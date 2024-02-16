import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
import { SyntheticRecordsPage } from "./SyntheticRecordsPage";

let webActions: WebActions;
let util: Utility

export class SourceSelectorPage extends SyntheticRecordsPage {
    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _searchBoxForTest = '//input[@data-testid="searchText"]';
    private _firstRowSearchCheckBoxInSelectorPage = '//i[@data-icon-name="StatusCircleCheckmark"]/div';
    private _testTab = '//li[@data-testid="Tests"]';
    private _myAppTab = '//li[@data-testid="My Apps"]';
    private _firstSearchedAppChechBox = '//div[@data-item-index="0"]//i[@data-icon-name="StatusCircleCheckmark"]';
    private _searchBoxForApp = '//input[@id="rum-source-selector-search-box"]';
    private _sbPillInSourceSelector = '//div[contains(@class,"AutoCompletePillPicker_pillWrapper")]'
    private _scatterplotSection = '//div[contains(@class,"SyntheticRecordstyles__ScatterPlotCont-")]'
    private _cardDataSection = '//div[contains(@class,"SyntheticRecordstyles__DataSection-")]'
    public get searchBoxLocator() {
        return this._searchBoxForTest;
    }
    public get firstRowSearchCheckBoxInSelectorPageLocator() {
        return this._firstRowSearchCheckBoxInSelectorPage
    }
    public get testTabLocator() {
        return this._testTab;
    }
    public get myAppTabLocator() {
        return this._myAppTab;
    }
    public get firstSearchedAppCheckBoxLocator() {
        return this._firstSearchedAppChechBox;
    }
    public get searchBoxForAppLocator() {
        return this._searchBoxForApp;
    }
    public get pillItem(){
        return this._sbPillInSourceSelector;
    }
    public get scatterPlotSectionLocator(){
        return this._scatterplotSection
    }
    public get cardDataSectionLocator(){
        return this._cardDataSection
    }


    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedTestInSelectorPage(itemName: string) {
        await this.searchTest(itemName);
        await webActions.clickElement(this.firstRowSearchCheckBoxInSelectorPageLocator);
        await webActions.waitForElementAttached(this.scatterPlotSectionLocator);
        await webActions.waitForElementAttached(this.cardDataSectionLocator);
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

    async clickOnFirstSearchedAPPInSelectorPage(itemId: string) {
        await this.searchApp(itemId);
        await webActions.clickElementJS(this.firstSearchedAppCheckBoxLocator);
        
    }

    async searchTest(item: string) {
        await webActions.waitForElementAttached(this.searchBoxLocator);
        await webActions.clickElement(this.searchBoxLocator);
        await webActions.enterElementText(this.searchBoxLocator, item);
        await util.delay(1000);
        await webActions.clickElement(this.searchBoxLocator);
        await webActions.keyPress(this.searchBoxLocator, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    async searchApp(item: string) {
        await webActions.waitForElementAttached(this.searchBoxForAppLocator);
        await webActions.clickElement(this.searchBoxForAppLocator);
        await webActions.enterElementText(this.searchBoxForAppLocator, item);
        await util.delay(1000);
        await webActions.clickElement(this.searchBoxForAppLocator);
        await webActions.keyPress(this.searchBoxForAppLocator, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    async clickOnMyAppTab() {
        await webActions.clickElement(this.myAppTabLocator);
    }




    //#endregion

}