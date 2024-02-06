import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { LoginPage } from "@pageobjects/Login/LoginPage";

let webActions: WebActions;
let util: Utility;
let login : LoginPage;

export class RumControlCenterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }

    //#region This region is for getter
    private _rumTreeSideSideNav = '//div[contains(@class,"NavigationTree_navGroupText") and text() = "RUM"]';
    private _rumList = '//div[@class="ms-List-surface"]'

    public get rumTreeSideSideNavLocator() {
        return this._rumTreeSideSideNav;
    }
    public get rumListLocator() {
        return this._rumList;
    }

    

    //#endregion

    //#region This region is to have the functions

    async navigateToRUMPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'ControlCenter/Rum');
    }
    async LoginToRUMCCPage() {
        this.navigateToRUMPageByURL()
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.rumListLocator)
    }




    //#endregion

}