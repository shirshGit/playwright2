import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util :Utility;

export class SideNavBar{

    readonly page:Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }


    //#region This region is for locators as Property
    private _sideNavControlCenter = '#controlcentersection';
    private _sideNavCCTest = '//button/a[text()="Tests"]';
    private _sideNavAnalytics = '#analysissection';
    private _sideNavExplorer = '//a[text()="Explorer"]';
    private _homesection = '#homesection';
    private _dashboard = '//a[text()="Dashboard"]';



    public get sideNavControlCenter(){
        return this._sideNavControlCenter;
    }

    public get sideNavCCTest(){
        return this._sideNavCCTest;
    }

    public get sideNavAnalytics(){
        return this._sideNavAnalytics;
    }

    public get sideNavExplorer(){
        return this._sideNavExplorer;
    }

    public get sideNavHome(){
        return this._homesection;
    }

    public get sideNavDashboard(){
        return this._dashboard;
    }

    //#endregion

    async navigateToSyntheticCCFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavControlCenter);
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.waitForElementAttached(this.sideNavCCTest);
        await webActions.clickElement(this.sideNavCCTest);
    }

    async navigateToExplorerFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavAnalytics);
        await webActions.clickElement(this.sideNavAnalytics)
        await webActions.waitForElementAttached(this.sideNavExplorer);
        await webActions.clickElement(this.sideNavExplorer);
    }

    async navigateToDashboardFromSideNavigation(){
        await webActions.waitForElementAttached(this.sideNavHome);
        await webActions.clickElement(this.sideNavHome)
        await webActions.waitForElementAttached(this.sideNavDashboard);
        await webActions.clickElement(this.sideNavDashboard);
    }


}