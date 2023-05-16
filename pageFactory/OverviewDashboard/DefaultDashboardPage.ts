
import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
let webActions: WebActions;
let util: Utility

export class DefaultDashboardPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        util = new Utility()
    }

    //#region This region is for getter
    private _overviewDashboard = '//label[text()="Overview Dashboard"]';
    private _errorSectionOverviewDashboard = '//div[contains(@class,"AnalyticsErrorsOverviewDisplay_display")]';
    private _eventSectionOverviewDashboard = '//div[contains(@class,"EventsOverview_container")]';
    private _alertSectionOverviewDashboard = '//div[contains(@class,"AlertOverview_container")]';
    private _nodeMapPerformanceOverview = '//div[contains(@class,"NodePerformanceOverview_mapContainer")]'
    private _threeLineBurgerMenu = '//div[contains(@class,"fabricIcons_burgerMenu")]';
    private _rumWidgetinOverviewDashboard = '//div[contains(@class,"RumAppsOverview_mainContainer")]'
    private _testOverView = '(//span[text()="Tests"])[1]';
    private _endpointInDefaultDashboard = '(//span[text()="Endpoint"])[1]';
    private _bgpInDefaultDashboard = '(//span[text()="BGP"])[1]';

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
    public get testOverViewTabLocator(){
        return this._testOverView;
    }

    public get testInTableWidget(){
        return (text:number) => {return `(//div[@data-automationid="DetailsRowFields"]//a)[${text}]`}
    }

    public get testInTileWidget(){
        return (text:number) => {return `(//ul[contains(@class,"Tiles_tiles")]//li//div//p)[${text}]`}
    }

    public get endpointInDefaultDashboardLocator() {
        return this._endpointInDefaultDashboard;
    }

    public get bgpInDefaultDashboardLocator() {
        return this._bgpInDefaultDashboard;
    }

    //#endregion

    //#region This region is to have the functions

    async clickOnOverviewdashboard() {
        await webActions.clickElement(this.overviewDashboardLocator)
    }
    
    async clickOnTab(tabName: string) {
        if (tabName = 'Tests') {
            await webActions.clickElement(this.testOverViewTabLocator);
        } else {
            await webActions.clickElement(this.tabLocator(tabName))
        }
    }
    async clickOnTestInTileTestWidget(tileNum: number) {
        await webActions.clickElement(this.testInTileWidget(tileNum));
    }
    async getTestNameFromTestTable(tileNum: number) {
        return await webActions.getElementText(this.testNameLocator(tileNum))
    }
    async clickOnTestInTableTestWidget(rowNum: number) {
        await webActions.clickElement(this.testInTableWidget(rowNum));
    }
    async clickOnEndpointdashboard() {
        await webActions.clickElement(this.endpointInDefaultDashboardLocator)
    }
    async clickOnBGPdashboard() {
        await webActions.clickElement(this.bgpInDefaultDashboardLocator)
    }
   




    //#endregion

}