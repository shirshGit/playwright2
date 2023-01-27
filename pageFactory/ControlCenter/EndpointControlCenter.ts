import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util: Utility;

export class EndpointControlCenterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _endpointTreeSideSideNav = '//div[contains(@class,"NavigationTree_navGroupText") and text() = "Endpoint"]';
    private _endpointsNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Endpoints"]';
    private _endpointsTestNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Tests"]';
    private _endpointsAppNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Employee Apps"]';
    private _endpointsLocationNavigationNavLink = '//div[contains(@class,"Navigation_navLinkText")]//span[text()="Locations"]';


    public get endpointTreeSideSideNavLocator() {
        return this._endpointTreeSideSideNav;
    }

    public get endpointsNavigationNavLinkLocator() {
        return this._endpointsNavigationNavLink;
    }

    public get endpointsTestNavigationNavLinkLocator() {
        return this._endpointsTestNavigationNavLink;
    }

    public get endpointsAppNavigationNavLinkLocator() {
        return this._endpointsAppNavigationNavLink;
    }

    public get endpointsLocationNavigationNavLinkLocator() {
        return this._endpointsLocationNavigationNavLink;
    }


    //#endregion

    //#region This region is to have the functions




    //#endregion

}