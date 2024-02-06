import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { LoginPage } from "@pageobjects/Login/LoginPage";

let webActions: WebActions;
let util: Utility
let login : LoginPage;

export class ZonePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }
    //#region This region is for getter

    private _zoneTable = "//div[@class='ms-List-page']"


    public get zonesTableLocator() {
        return this._zoneTable;
    }

    //#endregion

    //#region This region is to have the functions


    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async navigateToZonePageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Administration/Zones');
        await util.delay(5000);
    }
    async LoginToZonePage() {
        this.navigateToZonePageByURL();
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.zonesTableLocator);
    }



    //#endregion

}