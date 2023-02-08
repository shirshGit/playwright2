import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
let webActions: WebActions;
let util: Utility

export class DefaultDashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _overviewDashboard = '//label[text()="Overview Dashboard"]';
    private _errorSectionOverviewDashboard = '//div[contains(@class,"AnalyticsErrorsOverviewDisplay_display")]';
    private _eventSectionOverviewDashboard = '//div[contains(@class,"EventsOverview_container")]';
    private _alertSectionOverviewDashboard = '//div[contains(@class,"AlertOverview_container")]';
    private _nodeMapPerformanceOverview = '//div[contains(@class,"NodePerformanceOverview_mapContainer")]'
    private _threeLineBurgerMenu = '//div[contains(@class,"fabricIcons_burgerMenu")]';
    private _rumWidgetinOverviewDashboard = '//div[contains(@class,"RumAppsOverview_mainContainer")]'

    public get overviewDashboardLocator() {
        return this._overviewDashboard;
    }

    public get tabLocator() {
        return (text: string) => { return `(//span[text()="${text}"])[1]` }
    }

    public get testNameLocator() {
        return (text: number) => { return `(//div[contains(@class,"ms-DetailsRow-fields fields")]//a)[${text}]` }
    }
    public get errorSectionOverviewDashboardLocator() {
        return this._errorSectionOverviewDashboard;
    }

    public get eventSectionOverviewDashboardLocator() {
        return this._eventSectionOverviewDashboard;
    }

    public get alertSectionOverviewDashboardLocator() {
        return this._alertSectionOverviewDashboard;
    }

    public get nodeMapPerformanceOverviewLocator() {
        return this._nodeMapPerformanceOverview;
    }

    public get threeLineBurgerMenuLocator() {
        return this._threeLineBurgerMenu;
    }

    public get rumWidgetinOverviewDashboardLocator() {
        return this._rumWidgetinOverviewDashboard;
    }

    //#endregion

    //#region This region is to have the functions
    async clickOnOverviewdashboard() {
        await webActions.clickElement(this.overviewDashboardLocator);
    }
    async clickOnTab(tabName: string) {
        await webActions.clickElement(this.tabLocator(tabName));
    }


    async getTestNameFromTestTable(tileNum: number) {
        return await webActions.getElementText(this.testNameLocator(tileNum));
    }


    //#endregion

}