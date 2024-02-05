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

export class DivisionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }
    //#region This region is for getter

    private _createIcon = '//button[text()="Create"]';
    private _nameText = '//span[text()="Name"]';
    private _statusText = '//span[text()="Status"]';
    private _lastUpdatedText = '//span[text()="Last Updated"]';
    private _divisionTable = "//div[@class='ms-List-surface']"


    

  

    public get createIconLocator() {
        return this._createIcon;
    }
    public get nameTextLocator() {
        return this._nameText;
    }
    public get statusIconLocator() {
        return this._statusText;
    }
    public get lastUpdatedTextLocator() {
        return this._lastUpdatedText;
    }
    public get divisionTableLocator() {
        return this._divisionTable;
    }

    

    //#endregion

    //#region This region is to have the functions

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async navigateToDivisionPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Divisions');
        await util.delay(5000);
    }
    async LoginToDivisionsPage() {
        this.navigateToDivisionPageByURL();
        await webActions.enterElementText(login.emailInputLocator, testConfig.cpun);
        await webActions.enterElementText(login.passwordInputLocator, testConfig.cppwd);
        await webActions.clickElement(login.loginBtnLocator);
        await webActions.waitForElementAttached(this.divisionTableLocator);
    }
   

    //#endregion

}



