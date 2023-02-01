import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

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
    private _summary = '//span[text()="Summary"]';
    private _endpoint = '//span[text()="Endpoints"]';
    private _network = '//span[text()="Network"]';
    private _application = '//span[text()="Application"]';
    private _endPointTested = '//div[text()="Endpoints Tested"]';
    private _locationTested = '//div[text()="Locations Tested"]';
    private _name = '//span[text()="Name"]';
    private _time = '//span[text()="Time"]';
    private _networkScoreInEndpointTab = '//span[text()="Network Score"]';
    private _roundtrip = '//span[text()="Round Trip (ms)"]';
    private _city = '//span[text()="City"]';
    private _isp = '//span[text()="ISP"]';
    //location summeryTab
    private _expScore = '//span[text()="Experience Score"]';
    private _trendingChart = '//div[contains(@class,"Chart_chartCont_")]';
    //location endpointTab
    private _pageViews = '//span[text()="Page Views"]';
    private  _endpointWidgetInEndpointLoc = '//div[@data-testid="endpoint-breakdown-dimension-container"]';
    //location networkTab
    private _domains = '//div[@data-testid="plainCard"]//div[text()="Domains"]';
    private _failures = '//div[text()="Failures"]';
    private _endpointWidget = '(//div[@data-automationid="DetailsList"])[1]';    

    //common locators
    private _endpointScore = '//span[text()="Endpoint Score"]';
    private _networkScore = '//div[text()="Network Score"]';
    private _netWorkScore = '//span[text()="Network Score"]';
    private _roundTrip = '//div[contains(text(),"Round Trip (ms)")]';
    private _packetLoss = '//div[text()="% Packet Loss"]';
    private _testRun = '//div[text()="Test Runs"]';
    private _appScore = '//span[text()="Network Score"]';
    private _errors = '//span[text()="Errors"]';
    private _domainWidget = '(//div[@data-automationid="DetailsList"])[2]';
    private _networkPath = '//span[text()="Network Path"]';
    private _hopByHop = '//span[text()="Hop-by-Hop"]';
    private _trending = '//span[text()="Trending"]';
    private _appVisited = '//div[contains(text(),"Applications Visited")]';
    private _urlTested = '//div[text()="URLs Tested"]';
    private _doccomplete = '//div[text()="Doc Complete"]';
    private _downtime = '//div[text()="% Downtime"]';
    private _urlWidget = '(//div[text()="URLs Tested"])[2]/../../../..';
    private _appVisititedWidget = '(//div[text()="Applications Visited"])[2]';
    private _trendsChart = '//li[text()="Trends"]/../../..';


    
    //endpoint overview tab
    private _callquality = '//div[text()="Call Quality"]';
    private _vpnHealth = '//div[text()="VPN Health"]';
    private _online = '//div[text()="Online"]';
    private _event = '//div[text()="Events"]';
    private _issue = '//div[text()="Issue"]';
    private _settingsIcon = '//i[@data-icon-name="properties"]';
    private _keyMetricsWidget = '//div[@data-testid="key-metrics-container"]';
    private _issueNdEventWidget = '(//div[contains(@class,"KeyEventsTableContainerstyl")])[1]';
    private _endpointTimeLine  = '//div[@data-testid="smartboard-timeline"]';
    
    //endpoint endpoint tab
    private _filterButton = '(//button[@id="action-button"])[3]';
    private _cpuUsageCardMetrics = '//span[text()="CPU Usage"]';
    private _memoryUsageCardMetrics = '//span[text()="CPU Usage"]';
    private _wifiStrenghtCardMetrics = '//span[text()="CPU Usage"]';
    private _signalQualityCardMetrics = '//span[text()="CPU Usage"]';
    private _hardwareUsageWidget = '//div[contains(@class,"DeviceContainerstyles__ChartContainer-")]';
    private _processWidget = '//div[@data-automationid="DetailsList"]';
    private _systemInfoCard = '//div[@data-testid="multipleDataCard"]';
    
    //endpoint network tab
    private _failure = '//div[text()="Failures"]';
    private _jitter = '//div[text()="Jitter (ms)"]';
    private _upload = '//div[text()="Upload (Mbps)"]';
    private _download = '//div[text()="Download (Mbps)"]';
    private _domainWidgetEndpoint = '(//div[@data-automationid="DetailsList"])[1]';
    private _locationWidgetEndpoint = '(//div[@data-automationid="DetailsList"])[2]';

    //employeeapp endpoint tab
    private _locCardMetrics = '//div[text()="Locations"]';
    private _pageViewCardMetrics = '//div[text()="Page Views"]';
    private _errorCardMetrics = '//div[text()="Errors"]';
    private _endpointPerLocationChart = '//div[text()="Endpoints Per Location"]/../../../..';
    
    //employee app network tab
    private _endpointWgtForNetworkTab = '//div[text()="Endpoints"]/../../../..';
    private _locWidgetForNetworkTab = '//div[text()="Location"]/../../../..';
    private _networkWidget = '//span[text()="Network Path"]';
    private _hopByHopWidget = '//span[text()="Hop-by-Hop"]';

    public get endpointTimeLineLocator(){
        return this._endpointTimeLine;
    }

    public get endpointWgtForNetworkTabLocator(){
        return this._endpointWgtForNetworkTab;
    }
    public get locWidgetForNetworkTabLocator(){
        return this._locWidgetForNetworkTab;
    }
    public get networkWidgetLocator() {
        return this._networkWidget;
    }
    public get hopByHopWidgetLocator() {
        return this._hopByHopWidget;
    }
    public get endpointPerLocationChartLocator(){
        return this._endpointPerLocationChart;
    }
    public get locCardMetricsLocator(){
        return this._locCardMetrics;
    }
    public get pageViewCardMetricsLocator() {
        return this._pageViewCardMetrics;
    }
    public get errorCardMetricsLocator() {
        return this._errorCardMetrics;
    }
    public get trendsChartLocator(){
        return this._trendsChart;
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

    public get summaryTabLocator() {
        return this._summary;
    }

    public get endpointTabLocator() {
        return this._endpoint;
    }

    public get applicationTabLocator() {
        return this._application;
    }

    public get networkTabLocator() {
        return this._network;
    }

    public get timeFrame(){
        return this._timeFrame;
    }

    public get networkScoreMetricsInNetworkTabForTestLocator(){
        return this._networkScore;
    }

    public get networkScoreMetricsInNetworkTabForLocLocator(){
        return this._netWorkScore;
    }

    public get endpointTestedCardMetricsInNetworkTabLocator(){
        return this._endPointTested;
    }

    public get locationTestedCardMetricsInNetworkTabLocator(){
        return this._locationTested;
    }

    public get nameInEndpointTabLocator(){
        return this._name;
    }

    public get timeInEndpointTabLocator(){
        return this._time;
    }

    public get networkScoreInEndpointTabLocator(){
        return this._networkScoreInEndpointTab;
    }

    public get roundTripInEndpointTabLocator(){
        return this._roundtrip;
    }

    public get cityInEndpointTabLocator(){
        return this._city;
    }

    public get ispInEndpointTabLocator(){
        return this._isp;
    }
    
    public get expScoreInLocationSummaryTabLocator(){
        return this._expScore;
    }

    public get trendingChartInLocationSummaryTab(){
        return this._trendingChart;
    }

    public get pageViewInLocationEndpointTab(){
        return this._pageViews;
    }

    public get endpointWidgetInEndpointLocationTab(){
        return this._endpointWidgetInEndpointLoc;
    }

    public get domainInEndpointLocationTab(){
        return this._domains;
    }

    public get failureInEndpointLocationLocator(){
        return this._failures;
    }

    public get domainWidgetInNetworkLocationTab(){
        return this._domainWidget;
    }

    public get endpointWidgetInnetworkLocationLocator(){
        return this._endpointWidget;
    }
    public get hopByHopInNetworkTabLocator(){
        return this._hopByHop;
    }

    public get networkPathInNetworkTabLocator(){
        return this._networkPath;
    }

    public get appVisitedInApplicationTab(){
        return this._appVisited;
    }

    public get urlTestedInApplicationLocator(){
        return this._urlTested;
    }

    public get docCompletedApplicationLocator(){
        return this._doccomplete;
    }

    public get onlineLocator() {
        return this._online;
    }

    public get vpnHealthLocator() {
        return this._vpnHealth;
    }

    public get issueLocator() {
        return this._issue;
    }
    public get settingsIconLocator() {
        return this._settingsIcon;
    }

    public get eventsLocator() {
        return this._event;
    }
    public get callQualityLocator() {
        return this._callquality;
    }
    public get keyMetricsWidgetLocator() {
        return this._keyMetricsWidget;
    }
    public get issueNdEventLocator() {
        return this._issueNdEventWidget;
    }

    public get filterButtonLocator() {
        return this._filterButton;
    }

    public get wifiMetricsLocator() {
        return this._wifiStrenghtCardMetrics;
    }
    public get signalQualityLocator() {
        return this._compareDropDown;
    }
    public get trendingWidgetLocator() {
        return this._trending;
    }
    public get appVisitedWidgetLocator() {
        return this._appVisititedWidget;
    }
    public get urlTestedWidgetLocator() {
        return this._urlWidget;
    }

    

    

    


    //common
    public get endpointScoreMetricsLocator(){
        return this._endpointScore;
    }

    public get netScoreMetricsLocator(){
        return this._netWorkScore;
    }

    public get roundTripMetricsLocator(){
        return this._roundTrip;
    }

    public get packetLossCardMetricsLocator(){
        return this._packetLoss;
    }

    public get testRunCardMetricsLocator(){
        return this._testRun;
    }

    public get appScoreMetricsLocator(){
        return this._appScore;
    }

    public get errorMetricsLocator(){
        return this._errors;
    }

    public get cpuUsageCardLocator(){
        return this._cpuUsageCardMetrics
    }

    public get memoryUsageMetricsLocator(){
        return this._memoryUsageCardMetrics;
    }

    public get wifiStrenghtCardLocator(){
        return this._wifiStrenghtCardMetrics
    }

    public get processWidgetLocator(){
        return this._processWidget;
    }

    public get hardwareUsageLocator(){
        return this._hardwareUsageWidget
    }

    public get signalQualityMetricsLocator(){
        return this._signalQualityCardMetrics;
    }

    public get systemInfoCardLocator(){
        return this._systemInfoCard;
    }

    public failureCardMetricsLocator() {
        return this._failure;
    }
    public get pktLossCardMetricsLocator() {
        return this._packetLoss;
    }

    public get jitterCardMetricsLocator() {
        return this._jitter;
    }
    public get uploadCardMetricsLocator() {
        return this._upload;
    }
    public get downloadCardMetricsLocator() {
        return this._download;
    }
    public get domainWidgetEndPointLocator() {
        return this._domainWidgetEndpoint;
    }

    public get locWidgetLocator() {
        return this._locationWidgetEndpoint;
    }

    public get downTimeLOcator(){
        return this._downtime;
    }






    
    




    //#endregion

    //#region This region is to have the functions

    

    async clickOnEndpointTab(){
        await webActions.clickElement(this.endpointTabLocator);
    }






}