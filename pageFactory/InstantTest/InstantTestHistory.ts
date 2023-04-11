import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility;

export class InstantTestHistoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _dailyInstantTestUsage = '//span[contains(text(),"Daily Node Instant Test Usage")]';
    private _urlHeaderForIntantTestHistory = '//span[contains(@id,"header")]//span[text()="URL"]';
    private _testTypeHeaderInInstantTestHistoryTable = '//span[contains(@id,"header")]//span[text()="Test Type"]';
    private _statusInstantTestHistoryTable = '//span[contains(@id,"header")]//span[text()="Status"]';
    private __instantTestPage = '//button[text()="New Instant Test"]'

    public get dailyInstantTestUsageLocator() {
        return this._dailyInstantTestUsage;
    }

    public get urlHeaderForIntantTestHistoryLocator() {
        return this._urlHeaderForIntantTestHistory;
    }

    public get testTypeHeaderInInstantTestHistoryTableLocator() {
        return this._testTypeHeaderInInstantTestHistoryTable;
    }

    public get statusInstantTestHistoryTableLocator() {
        return this._statusInstantTestHistoryTable;
    }
    public get instantTestPageLocator() {
        return this.__instantTestPage
    }



    //#endregion

    //#region This region is to have the functions

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async clickOnNewInstantTestButton() {
        await webActions.clickElement(this.instantTestPageLocator)
    }


    //#endregion

}