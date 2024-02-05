import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { LoginPage } from "@pageobjects/Login/LoginPage";

let webActions: WebActions;
let util: Utility;
let login: LoginPage;

export class AlertLogPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }
    loginPageObjects = new LoginPageObjects();

    //#region This region is for getter
    private _alertsForTests = '//span[text()="Tests"]';
    private _alertsForRum = '//span[text()="RUM"]';
    private _testIDInAlertLogTable = '//span[text()="Test ID"]';
    private _searchBox = '(//input[@id="fabric-search-box"])[2]';
    private _threeDotMenu = '//div[@data-selection-index="0"]//span[@data-automationid="splitbuttonprimary"]';
    private _alertsLogList = '//div[@class="ms-List-page"][1]'
    private _internetSonarTab = '//span[text()="Internet Sonar"]';

    public get alertSectionForTestsLocator() {
        return this._alertsForTests;
    }

    public get alertSectionForRumLocator() {
        return this._alertsForRum;
    }

    public get testIDHeaderInAlertLogListLocator() {
        return this._testIDInAlertLogTable;
    }

    public get searchBoxLocator() {
        return this._searchBox;
    }
    public get threeDotMenuLocator() {
        return (text: number) => { return `//div[@data-selection-index="${text}"]//span[@data-automationid="splitbuttonprimary"]` }
    }

    public get threeDotMenuItemLocator() {
        return (text: string) => { return `//span[contains(@class,'ms-ContextualMenu-itemText')][normalize-space()='${text}']` }
    }

    public get alertLogListLocator() {
        return this._alertsLogList;
    }
    public get internetSonarTabLocator() {
        return this._internetSonarTab
    }




    //#endregion

    //#region This region is to have the functions

    async clickOnThreeDotMenu(num: number, threeDotMenuItem: string) {
        await this.hoverOnThreeDotMenu(num)
        await webActions.clickElement(this.threeDotMenuItemLocator(threeDotMenuItem))
    }

    async hoverOnThreeDotMenu(num: number) {
        await webActions.hoverOnElement(this.threeDotMenuLocator(num))
        await util.delay(1000)
        await webActions.clickElement(this.threeDotMenuLocator(num))
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async clickOnRumTab() {
        return await webActions.clickElement(this.alertSectionForRumLocator);
    }

    async navigateToTestAlertsPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Alerts/Test');
        //await webActions.waitForElementAttached(this.alertLogListLocator);
    }
    async clickOnInternetSonarTab() {
        return await webActions.clickElement(this.internetSonarTabLocator);
    }
    async LoginToAlertsPage() {
        this.navigateToTestAlertsPageByURL();
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.alertLogListLocator);
    }


    //#endregion

}