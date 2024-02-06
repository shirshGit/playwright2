import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { LoginPage } from "@pageobjects/Login/LoginPage";

let webActions: WebActions;
let util: Utility;
let login : LoginPage;

export class InstantTestHistoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }

    //#region This region is for getter
    private _dailyInstantTestUsage = '//span[contains(text(),"Daily Node Instant Test Usage")]';
    private _urlHeaderForIntantTestHistory = '//span[contains(@id,"header")]//span[text()="URL"]';
    private _testTypeHeaderInInstantTestHistoryTable = '//span[contains(@id,"header")]//span[text()="Test Type"]';
    private _statusInstantTestHistoryTable = '//span[contains(@id,"header")]//span[text()="Status"]';
    private __instantTestPage = '//button[text()="New Instant Test"]'
    private _instantTestHistoryList = '//div[@class="ms-List-surface"]'
    private __endpointTab = '//span[text()="Endpoint"]'

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
    public get instantTestHistoryListLocator(){
        return this._instantTestHistoryList
    }
    public get endpointTabLocator() {
        return this.__endpointTab
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

    async navigateToInstantTestHistoryPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'InstantTest');
        await util.delay(5000);
    }
    async clickOnEndpointTab() {
        await webActions.clickElement(this.endpointTabLocator)
    }
    async LoginToInstantTestHistoryPage() {
        this.navigateToInstantTestHistoryPageByURL();
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.instantTestHistoryListLocator);
    }



    //#endregion

}