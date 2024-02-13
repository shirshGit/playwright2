import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
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
    private _searchBoxForTest = '//input[@id="synthetic-source-selector-search-box"]';
    private _allcheckCheckBox = '//div[text()="Name"]/..//div[contains(@class,"TreeTable_checkboxCell_")]';
    private _selectButton = '//span[text()="Select"]';
    private _clearButton = '//i[@data-icon-name="Clear"]';
    private _testTab = '//li[@data-testid="Tests"]';
    private _myAppTabInSourceSelector = '//li[text()="My Apps"]';
    private _allCheckBoxForApp = '//div[@data-item-index="0"]//i[@data-icon-name="CircleRing"]';
    private _explorerPillInSourceSelector = '//div[@data-testid="custom-picker-pill-container"]'
    private _searchBoxForRum = '//input[@id="rum-source-selector-search-box"]';
    
    public get testSearchBoxLocator() {
        return this._searchBoxForTest;
    }
    public get rumSearchBoxLocator() {
        return this._searchBoxForRum;
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

    public get testTabLocator(){
        return this._testTab;
    }

    public get myAppTabInSourceSelectorLocator() {
        return this._myAppTabInSourceSelector;
    }

    public get allCheckLocatorForApp(){
        return this._allCheckBoxForApp;

    }

    public get pillItem(){
        return this._explorerPillInSourceSelector;
    }

   

  
    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInSelectorPage(itemId: string) {
        await this.searchTest(itemId);
        await util.delay(3000);
        await webActions.clickElement(this.firstSearchedItemLocator);
        await webActions.clickElement(this.selectButtonLocator);
    }

    async clickOnFirstSearchAppInSelectorPage(itemId: string) {
        await util.delay(2000);
        await this.searchRumApp(itemId);
        await util.delay(2000);
        await webActions.clickElementJS(this.allCheckLocatorForApp);
        await webActions.clickElement(this.selectButtonLocator);
    }

    async searchTest(item: string) {
        await webActions.waitForElementAttached(this.testSearchBoxLocator);
        await webActions.clickElement(this.testSearchBoxLocator);
        await webActions.enterElementText(this.testSearchBoxLocator, item);
        await webActions.keyPress(this.testSearchBoxLocator, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }
    async searchRumApp(item: string) {
        await webActions.waitForElementAttached(this.rumSearchBoxLocator);
        await webActions.clickElement(this.rumSearchBoxLocator);
        await webActions.enterElementText(this.rumSearchBoxLocator, item);
        await webActions.keyPress(this.rumSearchBoxLocator, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    async clickOnMyAppTab(){
        await webActions.clickElement(this.myAppTabInSourceSelectorLocator);
    }
 
    
    //#endregion

}