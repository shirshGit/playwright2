import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class ExplorerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _errorTab = '//li[@data-testid="Errors"]';
    private _firstThreeDotMenuInErrorTab = '(//div[@data-testid="table_row"]//span[@data-automationid="splitbuttonprimary"])[1]//i';
    private _recordsInThreeDotMenuInErrorTab = '//span[normalize-space()="Records"]';
    private _myAppTabInSourceSelector = '//li[text()="My Apps"]';

    public get errorTabLocator() {
        return this._errorTab;
    }
    public get firstThreeDotInErrorTabLocator() {
        return this._firstThreeDotMenuInErrorTab;
    }
    public get recordInThreeDotMenuInErrorTabLocator() {
        return this._recordsInThreeDotMenuInErrorTab;
    }
    public get errorTabRowWiseTimeLocator() {
        return (text: number) => { return `//div[@data-item-index="${text}"]//div[@aria-colindex="3"]//div` };
    }
    public get myAppTabInSourceSelectorLocator() {
        return this._myAppTabInSourceSelector;
    }



    //#endregion

    async clickOnErrorTab() {
        await webActions.clickElement(this.errorTabLocator);
    }
    async clickOnFirstRowThreeDotMenu() {
        await util.delay(3000);
        await webActions.hoverOnElement(this.firstThreeDotInErrorTabLocator);
        await webActions.clickElement(this.firstThreeDotInErrorTabLocator);
    }
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getRowWiseTimeFromErrorTab(rowNum: number) {
        let time = await webActions.getElementText(this.errorTabRowWiseTimeLocator(rowNum));
        return time;
    }
    async clickOnMyAppInSourceSelector() {
        await webActions.clickElement(this.myAppTabInSourceSelectorLocator);
    }
}