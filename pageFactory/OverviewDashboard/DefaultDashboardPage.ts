import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";
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
    private _testWidgetTimeFrameDD = '(//button[@type="button"][normalize-space()="Last Hour"])[2]';
    private _explorerUnderThreeDotMenuInTableWidget = '(//span[text()="Explorer"])[2]'
    private _scatterPlotUnderThreeDotMenuInTableWidget =  '//span[text()="Scatterplot"]'
    private _charmBar = '//div[@data-testid="main-charm-bar"]'
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
    public get testOverViewTabLocator() {
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
    
    public get commomLocator() {
        return (text: string) => { return `//span[text()="${text}"]` }
    }
    public get tableWidgetTimeFrameDDLocator() {
        return this._testWidgetTimeFrameDD;
    }
    public get commoNLocator() {
        return (text: string) => { return `//div[contains(text(),"${text}")]` }
    }
    public get threeDotMenuInTestTableWidgetLocator() {
        return (text: number) => { return `(//div[contains(@class,"visibilityToggle")]//i)[${text}]` }
    }
    public get errorWidgetErrorLocator(){
        return (text: number) => { return `//div[contains(@class,"AnalyticsErrorsOverviewDisplay_table")]//div[@data-list-index="${text}"]//a`}
    }
    public get explorerUnderThreeDotMenuInTableWidgetLocator(){
        return this._explorerUnderThreeDotMenuInTableWidget
    }
    public get scatterPlotUnderThreeDotMenuInTableWidgetLocator(){
        return this._scatterPlotUnderThreeDotMenuInTableWidget
    }
    public get charmBarLocator(){
        return this._charmBar
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
    
    async getTestNameFromTestTable(itemNum: number) {
        return await webActions.getElementText(this.testNameLocator(itemNum))
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

    async selectTimeFrameForTestWidget(timeframe: string) {
        await webActions.clickElement(this.tableWidgetTimeFrameDDLocator);
        await webActions.clickElement(this.commoNLocator(timeframe))
    }

    async clickOnThreeDotMenuInTableTestWidget(rowNum: number, threeDotMenuLocator: string) {
        await webActions.hoverOnElement(this.testInTableWidget(rowNum))
        await webActions.clickElement(this.threeDotMenuInTestTableWidgetLocator(rowNum))
        await webActions.clickElement(threeDotMenuLocator)
    }
    async clickOnErrorInErrorWidget(errorNum:number){
        await webActions.clickElement(this.errorWidgetErrorLocator(errorNum))
    }
    async getTextOfElement(locator:string){
        return await webActions.getElementText(locator)
    }




    //#endregion

}