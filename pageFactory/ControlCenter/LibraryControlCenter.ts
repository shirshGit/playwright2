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

export class LibraryControlCenterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }

    //#region This region is for getter
    private _libraryTreeSideSideNav = '//div[contains(@class,"NavigationTree_navGroupText") and text() = "Library"]';
    private _libraryCredentialsNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Credentials"]';
    private _libraryFilesNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Credentials"]';
    private _libraryASNsNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Credentials"]';
    private _libraryList = '//div[@class="ms-List"]';

    public get libraryTreeSideSideNavLocator() {
        return this._libraryTreeSideSideNav;
    }

    public get libraryCredentialsNavigationNavLinkLocator() {
        return this._libraryCredentialsNavigationNavLink;
    }

    public get libraryFilesNavigationNavLinkLocator() {
        return this._libraryFilesNavigationNavLink;
    }

    public get libraryASNsNavigationNavLinkLocator() {
        return this._libraryASNsNavigationNavLink;
    }
    public get libraryListLocator() {
        return this._libraryList;
    }

    //#endregion

    //#region This region is to have the functions

    async navigateToLibraryPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'ControlCenter/Library');
        await util.delay(5000);
    }
    async LoginToLibraryCCPage() {
        this.navigateToLibraryPageByURL()
        await webActions.enterElementText(login.emailInputLocator, testConfig.cpun);
        await webActions.enterElementText(login.passwordInputLocator, testConfig.cppwd);
        await webActions.clickElement(login.loginBtnLocator);
        await webActions.waitForElementAttached(this.libraryListLocator)
    }



    //#endregion

}