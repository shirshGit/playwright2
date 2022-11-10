import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
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

    private _overviewDashboard = '//span[text()="Overview Dashboards"]';
    private _firstTile = '(//ul[contains(@class,"Tiles_tiles_")]//li)[1]//p[contains(@class,"Tiles_name_")]';
    private _createDashboard = '//span[text()="Create Dashboard"]';
    private _createFolder = '//span[text()="Create Folder"]';
    
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

    //#endregion

    //#region This region is to have the functions
    
    async clickOnOverviewDashboardDropDown(){
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
    


    //#endregion

}