import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility

export class EndpointSmartboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _goButton = '//span[text()="Go"]';
    private _timeZoneDropDown = '//div[@data-testid="timezone-dropdown"]';
    private _compareDropDown = '(//i[@data-icon-name="chevrondownLarge"])[1]//div';
    private _timeLine = '//div[contains(@class,"EndpointSmartboardstyles__EndpointSmartboardTimeline")]';
    private _timeFrame = '//input[@value="Last 24 Hours"]';
    private _domainWidget = '(//div[text()="Domains"]/../../../..)[2]';
    private _endpointWidget = '//div[text()="Endpoints"]/../../../..'
    private _locWidget = '//div[text()="Location"]/../../../..'
    private _trendingChart = '//li[text()="Trending"]/../../..';
    private _endpoint = '//span[text()="Endpoints"]';
    private _endpointSmartboardNetworkTAb = '//div[@data-testid="endpoint-smartboard-network-tabs"]';
    private _endpointDomainWidget = '(//div[text()="Domains"]/../../../..)';
    private _appVisited = '//div[@data-testid="endpoint-device-apps-visited-list"]';
    private _urlTestedWidget = '//div[text()="URLs Tested"]/../../../..';
    private _urlWidget = '(//div[text()="URLs Tested"])[2]/../../../..';
    private _appVisititedWidget = '//div[text()="Applications Visited"]/../../../..';
    private _settingsIcon = '//i[@data-icon-name="properties"]';
    private _keyMetricsWidget = '//div[text()="Key Metrics"]/../../..';
    private _issueNdEventWidget = '//div[text()="Events & Issues"]/..';
    private _endpointTimeLine  = '//div[@data-testid="smartboard-timeline"]';
    private _hardwareUsageWidget = '//li[text()="Hardware Usage"]/../../..';
    private _processWidget = '//div[text()="Processes"]/../../../..';
    private _systemInfoCard = '//div[text()="System Info"]/../..';
    private _endpointPerLocationWidget = '//div[@data-testid="endpoint-app-device-list"]';
    private _networkWidget = '//div[contains(@class,"EndpointNetworkVizContainerstyles__EndpointNetworkViz")]';
    private _hopByHopText = '//span[text()="Hop-by-Hop"]';
    private _hopBtHopWidget = '//div[@data-testid="hop-traceroute"]';
    private  _timeLineGraph= '//div[@data-testid="smartboard-timeline"]'

    public get endpointWidgetLocator(){
        return this._endpointWidget;
    }
    public get domainWidgetLocator(){
        return this._domainWidget;
    }
    public get locWidgetLocator(){
        return this._locWidget;
    }
    public get networkPathWidgetLocator() {
        return this._networkWidget;
    }
    public get hopByHopTextLocator() {
        return this._hopByHopText;
    }
    public get hopByHopWidgetLocator() {
        return this._hopBtHopWidget;
    }
    public get endpointPerLocationChartLocator(){
        return this._endpointPerLocationWidget;
    }
    public get trendingChartLocator(){
        return this._trendingChart;
    }
    public get endpointDomainWidgetLocator() {
        return this._endpointDomainWidget;
    }
    public get appVisititedWidgetLocator() {
        return this._appVisititedWidget;
    }
    public get urlTestedWgtLocator(){
        return this._urlTestedWidget;
    }
    public get goButtonLocator() {
        return this._goButton;
    }
    public get timeZoneDDLocator() {
        return this._timeZoneDropDown;
    }
    public get compareDDLocator() {
        return this._compareDropDown;
    }
    public get timeLineLocator() {
        return this._timeLine;
    }
    public get timeFrame(){
        return this._timeFrame;
    }
    public get endpointSmartboardNetworkTAbLocator() {
        return this._endpointSmartboardNetworkTAb;
    }
    public get endpointTabLocator() {
        return this._endpoint;
    }
    public get endpointTimeLineLocator() {
        return this._endpointTimeLine;
    }
    public get appVisitedWidgetTab(){
        return this._appVisited;
    }
    public get settingsIconLocator() {
        return this._settingsIcon;
    }
    public get keyMetricsWidgetLocator() {
        return this._keyMetricsWidget;
    }
    public get issueNdEventLocator() {
        return this._issueNdEventWidget;
    }
    public get urlTestedWidgetLocator() {
        return this._urlWidget;
    }
    public get processWidgetLocator(){
        return this._processWidget;
    }
    public get hardwareUsageLocator(){
        return this._hardwareUsageWidget
    }
    public get systemInfoCardLocator(){
        return this._systemInfoCard;
    }
    public get commonLocator(){
        return (text:string) => { return `//span[text()="${text}"]`}
    }
    public get commoNLocator(){
        return (text:string) => { return `(//div[text()="${text}"])[1]`}
    }
    public get tabLocator() {
        return (text:string) => {return `//span[text()="${text}"]`};
    }
    public get timeLineGraph(){
        return this._timeLineGraph
    }
    //#endregion

    //#region This region is to have the functions
    async clickOnEndpointTab(){
        await webActions.clickElement(this.endpointTabLocator);
    }

    async clickOn(item:string){
        await webActions.waitForElementAttached(this.commonLocator(item));
        await webActions.clickElement(this.commonLocator(item));
    }

    async clickOnTab(item : string){
        await webActions.clickElement(this.tabLocator(item));
    }
    async waitForElement(locator:string){
        await webActions.waitForElementAttached(locator);
    }






}