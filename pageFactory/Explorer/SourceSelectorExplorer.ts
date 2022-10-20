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
    
    public get searchBox() {
        return this._searchBox;
    }

    public get firstSearchedItem(){
        return this._allcheckCheckBox;
    }

    public get selectButton(){
        return this._selectButton
    }


  
    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInSelectorPage(itemId: string) {
        await this.searchItem(itemId);
        await webActions.clickElement(this.firstSearchedItem);
        await webActions.clickElement(this.selectButton);
    }

    async searchItem(item: string) {
        await webActions.waitForElementAttached(this.searchBox);
        await webActions.clickElement(this.searchBox);
        await webActions.enterElementText(this.searchBox, item);
        await util.delay(1000);
        await webActions.clickElement(this.searchBox);
        await webActions.keyPress(this.searchBox, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    
    
    //#endregion

}