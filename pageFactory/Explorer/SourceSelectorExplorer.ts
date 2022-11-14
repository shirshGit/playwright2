import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
import { ExplorerPage } from "./ExplorerPage";

let webActions: WebActions;
let util: Utility

export class SourceSelectorExplorer extends ExplorerPage{
    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _searchBox = '(//input[@id="fabric-search-box"])[2]';
    private _allcheckCheckBox = '//div[text()="Name"]/..//div[contains(@class,"TreeTable_checkboxCell_")]';
    private _selectButton = '//span[text()="Select"]';
    private _clearButton = '//i[@data-icon-name="Clear"]';
    
    public get searchBoxLocator() {
        return this._searchBox;
    }

    public get firstSearchedItemLocator(){
        return this._allcheckCheckBox;
    }

    public get selectButtonLocator(){
        return this._selectButton
    }

    public get clearButtonLocator(){
        return this._clearButton
    }


  
    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInSelectorPage(itemId: string) {
        await util.delay(5000);
        await this.searchItem(itemId);
        await util.delay(5000);
        await webActions.clickElement(this.firstSearchedItemLocator);
        await webActions.clickElement(this.selectButtonLocator);
    }

    async searchItem(item: string) {
        await webActions.waitForElementAttached(this.searchBoxLocator);
        await webActions.clickElement(this.searchBoxLocator);
        await webActions.enterElementText(this.searchBoxLocator, item);
        await util.delay(1000);
        await webActions.clickElement(this.searchBoxLocator);
        await webActions.keyPress(this.searchBoxLocator, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    async selectItemFromSourceSelector(listOfItem : string []){
        for (let index = 0; index < listOfItem.length; index++) {
            const element = listOfItem[index];
            await this.searchItem(element);
            await webActions.clickElement(this.firstSearchedItemLocator);
            await webActions.clickElement(this.clearButtonLocator);
        }
        await webActions.clickElement(this.selectButtonLocator);
    }

    
    
    //#endregion

}