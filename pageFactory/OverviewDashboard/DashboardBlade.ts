import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";
let webActions: WebActions;
let util: Utility

export class DashboardBlade {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _overviewDashboard = '//label[text()="Overview Dashboard"]';
    private _firstTile = '(//ul[contains(@class,"Tiles_tiles_")]//li)[1]//p[contains(@class,"Tiles_name_")]';
    private _createDashboard = '//span[contains(text(),"New Dashboard")]';
    private _createFolder = '//span[text()="Create Folder"]';
    private _testOverview = '//span[text()="Test Overview"]';
    private _endpointOverview = '//span[text()="Endpoint Monitoring Overview"]'
    private _bgpOverview = '//span[text()="BGP Overview"]';
    
    public get overviewDashboardLocator(){
        return this._overviewDashboard;
    }

    public get dashboardLocator(){
        return (text: string) => { return `//span[text()="${text}"]`};
    }

    public get firstTileLocator(){
        return this._firstTile;
    }

    public get toolTipItemsLocator(){
        return (text:string) => {return `//div[text()="${text}"]`}
    }

    public get createDashboardLocator(){
        return this._createDashboard;
    }

    public get createFolderLocator(){
        return this._createFolder;
    }

    public get testOverviewLocator(){
        return this._testOverview;
    }

    public get EndpointOverviewLocator(){
        return this._endpointOverview;
    }

    public get bgpOverviewLocator(){
        return this._bgpOverview;
    }

    //#endregion

    //#region This region is to have the functions
    
    async clickOnOverviewDashboard(){
        await webActions.clickElement(this.overviewDashboardLocator);
    }
    
    async selectDashboard(dashboardName : string){
        await webActions.waitForElementAttached(this.dashboardLocator(dashboardName));
        await webActions.clickElement(this.dashboardLocator(dashboardName));
    }

    async navigateFromToolTip(itemName : string){
        await webActions.waitForElementAttached(this.firstTileLocator);
        await webActions.hoverOnElement(this.firstTileLocator);
        await webActions.clickElement(this.toolTipItemsLocator(itemName));
    }

    async clickOnCreateDashboard(){
        await webActions.clickElement(this.createDashboardLocator);
    }

    async clickOnCreateFolder(){
        await webActions.clickElement(this.createFolderLocator);
    }

    async clickOnTestOverviewDashboard(){
        await webActions.clickElement(this.testOverviewLocator);
    }


    async clickOnEndpointOverviewDashboard(){
        await webActions.clickElement(this.EndpointOverviewLocator);
    }

    async clickOnBGPOverviewDashboard(){
        await webActions.clickElement(this.bgpOverviewLocator);
    }
    


    //#endregion

}