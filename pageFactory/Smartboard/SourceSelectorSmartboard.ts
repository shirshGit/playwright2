import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
import { SyntheticSmartboardPage } from "./SyntheticSmartboardPage";

let webActions: WebActions;
let util: Utility

export class SourceSelectorSmartboard extends SyntheticSmartboardPage{
    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _searchBox = '//input[@data-testid="searchText"]';
    private _firstRowSearchCheckBoxInSelectorPage = '//i[@data-icon-name="StatusCircleCheckmark"]/div';
    private _nodeTab = '//li[text()="Nodes"]';
    private _myAppTab = '//li[text()="My Apps"]';
    private _testTab = '//li[text()="Tests"]';

    public get searchBox() {
        return this._searchBox;
    }

    public get firstRowSearchCheckBoxInSelectorPage() {
        return this._firstRowSearchCheckBoxInSelectorPage
    }

    public get myAppTabLocator() {
        return this._myAppTab;
    }
    public get nodeTabLocator() {
        return this._nodeTab;
    }

    public get testTabLocator() {
        return this._testTab;
    }


  
    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInSelectorPage(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.firstRowSearchCheckBoxInSelectorPage);
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

    async clickOnNodeTab(){
        await webActions.clickElement(this.nodeTabLocator);
    }

    async clickOnMyAppTab(){
        await webActions.clickElement(this.myAppTabLocator);
    }

    
    //#endregion

}