import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
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

    private _overviewDashboard = '//label[text()="My Dashboards"]';
    private _firstTile = '(//ul[contains(@class,"Tiles_tiles_")]//li)[1]//p[contains(@class,"Tiles_name_")]';
    private _createDashboard = '//span[contains(text(),"New Dashboard")]';
    private _createFolder = '//span[text()="Create Folder"]';
    private _testOverview = '//span[text()="Test Overview"]';
    private _endpointOverview = '//span[text()="Endpoint Monitoring Overview"]'
    private _bgpOverview = '//span[text()="BGP Overview"]';
    private _searchBox = '//div[@data-testid="dashboard-blade"]//input[@data-testid="fabricsearchbox"]';
    private _deleteDB = '//button[text()="Delete"]';
    private _folderDelete = '//span[normalize-space()="Delete Folder"]';

    public get overviewDashboardLocator() {
        return this._overviewDashboard;
    }

    public get dashboardLocator() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }

    public get firstTileLocator() {
        return this._firstTile;
    }

    public get toolTipItemsLocator() {
        return (text: string) => { return `//div[text()="${text}"]` }
    }

    public get createDashboardLocator() {
        return this._createDashboard;
    }

    public get createFolderLocator() {
        return this._createFolder;
    }

    public get testOverviewLocator() {
        return this._testOverview;
    }

    public get EndpointOverviewLocator() {
        return this._endpointOverview;
    }

    public get bgpOverviewLocator() {
        return this._bgpOverview;
    }

    public get searchBoxLocator() {
        return this._searchBox
    }
    public get searchRowInDBBlade() {
        return (name: string, num: number) => { return `(//ul[contains(@class,"ant-tree")]//span[contains(text(),"${name}")])[${num}]` };
    }
    public get threeDotMenuLocator() {
        return (text: number) => { return `//ul[1]/li[${text}][@role="treeitem"]/span[2]/span[1]/span[1]/div[1]/button[1]/span[1]/i[1]` };
    }
    public get threeDotMenuOptionLocator() {
        return (text: string) => { return `//span[normalize-space()="${text}"]` };
    }
    public get deleteDBButtonLocator() {
        return this._deleteDB
    }
    public get commonLocator() {
        return (text: string) => { return `//span[text()="${text}"]` }
    }
    public get searchedItemThreeDotMenuLocator() {
        return (text: number) => { return `//ul[1]/li[${text}][@role="treeitem"]/span[2]/span[1]/span[1]/div[1]/button[1]/span[1]/i[1]` };
    }
    public get deleteFolderButtonLocator() {
        return this._folderDelete
    }
    //#endregion

    //#region This region is to have the functions

    async clickOnOverviewDashboard() {
        await webActions.clickElement(this.overviewDashboardLocator);
    }

    async selectDashboard(dashboardName: string) {
        await webActions.waitForElementAttached(this.dashboardLocator(dashboardName));
        await webActions.clickElement(this.dashboardLocator(dashboardName));
    }

    async navigateFromToolTip(itemName: string) {
        await webActions.waitForElementAttached(this.firstTileLocator);
        await webActions.hoverOnElement(this.firstTileLocator);
        await webActions.clickElement(this.toolTipItemsLocator(itemName));
    }

    async clickOnCreateDashboard() {
        await webActions.clickElement(this.createDashboardLocator);
    }

    async clickOnCreateFolder() {
        await webActions.clickElement(this.createFolderLocator);
    }

    async clickOnTestOverviewDashboard() {
        await webActions.clickElement(this.testOverviewLocator);
    }


    async clickOnEndpointOverviewDashboard() {
        await webActions.clickElement(this.EndpointOverviewLocator);
    }

    async clickOnBGPOverviewDashboard() {
        await webActions.clickElement(this.bgpOverviewLocator);
    }
    async searchInCDSearchBox(itemName: string) {
        await webActions.clickElement(this.searchBoxLocator)
        await webActions.enterElementText(this.searchBoxLocator, itemName)
    }
    async deleteBulkDBItems(itemName: string) {
        await this.searchInCDSearchBox(itemName)
        let dbCount = await this.page.locator(`//ul[contains(@class,"ant-tree ant-tree")]//span[contains(text(),"${itemName}")]`).count();
        if (dbCount !== 0)
            for (let index = dbCount; index <= dbCount; index--) {
                await util.delay(2000);
                await webActions.waitForElementAttached(this.searchRowInDBBlade(itemName, index))
                await webActions.hoverOnElement(this.searchRowInDBBlade(itemName, index))
                await webActions.waitForElementAttached(this.threeDotMenuLocator(index))
                await webActions.clickElement(this.threeDotMenuLocator(index))
                await webActions.waitForElementAttached(this.threeDotMenuOptionLocator('Delete Dashboard'))
                await webActions.clickElement(this.threeDotMenuOptionLocator('Delete Dashboard'))
                await webActions.waitForElementAttached(this.deleteDBButtonLocator)
                await webActions.clickElement(this.deleteDBButtonLocator);
            }
    }
    async deleteBulkFolder(itemName: string) {
        await this.searchInCDSearchBox(itemName)
        let dbCount = await this.page.locator(`//ul[contains(@class,"ant-tree ant-tree")]//span[contains(text(),"${itemName}")]`).count();
        if (dbCount !== 0)
            for (let index = dbCount; index <= dbCount; index--) {
                await util.delay(2000);
                await webActions.waitForElementAttached(this.searchRowInDBBlade(itemName, index))
                await util.delay(2000);
                await webActions.hoverOnElement(this.searchRowInDBBlade(itemName, index))
                await webActions.waitForElementAttached(this.threeDotMenuLocator(index))
                await webActions.clickElement(this.threeDotMenuLocator(index))
                await webActions.waitForElementAttached(this.deleteFolderButtonLocator)
                await webActions.clickElement(this.deleteFolderButtonLocator)

            }
    }
    async deleteDB(dbName: string) {
        await this.searchInCDSearchBox(dbName)
        await webActions.hoverOnElement(this.commonLocator(dbName))
        await webActions.clickElement(this.searchedItemThreeDotMenuLocator(1))
        await webActions.clickElement(this.threeDotMenuOptionLocator('Delete Dashboard'))
        await webActions.clickElement(this.deleteDBButtonLocator);
    }



    //#endregion

}