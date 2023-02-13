import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility;

export class LibraryControlCenterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _libraryTreeSideSideNav = '//div[contains(@class,"NavigationTree_navGroupText") and text() = "Library"]';
    private _libraryCredentialsNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Credentials"]';
    private _libraryFilesNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Credentials"]';
    private _libraryASNsNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Credentials"]';

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

    //#endregion

    //#region This region is to have the functions




    //#endregion

}