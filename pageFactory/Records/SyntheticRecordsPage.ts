import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";


let webActions: WebActions;
let util: Utility

export class SyntheticRecordsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _waterFallTab = '//span[text()="Waterfall"]';
    private _pingTab = '//span[text()="Ping"]';
    private _pillDeleteButton = '//div[@data-testid="pill-delete-button"]';
    private _testInSourceSelector = '//div[@data-testid="test-picker"]//div[contains(@class,"Pill_pillContent_")]';
    private _ipAddressValue = '//span[@data-testid="ipAddress"]';
    private _sourceButton = '//button[text()="Source"]';
    private _filedVerbErrorBar = '//div[contains(text(),"Failed Verb")]';
    private _runTime = '//span[text()="Run Time"]/..//span[2]';
    private _node = '//span[text()="Node"]/..//span[2]';
    private _nodeIP = '//span[text()="Node IP"]/..//span[2]';
    private _firstDataPoint = '//*[name()="svg"][1]/*[name()="g"][1]/*[name()="g"][3]/*[name()="g"][2]/*[name()="circle"][1]';
    private _monitor = '//span[text()="Monitor"]/..//span[2]';
    private _searchBoxOfGanttChart = '//input[@id="fabric-search-box"]';
    private _wiredRequestMetrics = '//div[text()="# Wire Requests"]';
    private _hostMetrics = '//div[text()="# Hosts"]';
    private _requestFilterDD = '//label[text()="Request"]/..//i[@data-icon-name="chevron"]';
    private _fileTypeFilterDD = '//label[text()="File Type"]/..//i[@data-icon-name="chevron"]';
    private _zoneFilterDD = '//label[text()="Zone"]/..//i[@data-icon-name="chevron"]';
    private _recordFirstRow = '//div[contains(@class,"RecordsTable_table")]//div[@data-list-index="0"]';
    private _errorMessageFieldForDatePoint = '//div[contains(@class,"ms-MessageBar-content")]'
    private _errorCodeLocator = '//div[contains(@class,"GanttChart_numericCell")]'

    public get waterFallTabLocator() {
        return this._waterFallTab;
    }

    public get pingTabLocator() {
        return this._pingTab
    }

    public get pillDeleteButtonLocator() {
        return this._pillDeleteButton
    }

    public get testInSourceSelectorLocator() {
        return this._testInSourceSelector;
    }

    public get TestNameFromSourceBladeLocator() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }


    public get getIPAddressValueLocator() {
        return this._ipAddressValue;
    }

    public get sourceButtonLocator() {
        return this._sourceButton;
    }

    public get failedVerbLocator() {
        return this._filedVerbErrorBar;
    }

    public get getNodeLocator() {
        return this._node;
    }
    public get getNodeIPLocator() {
        return this._nodeIP;
    }

    public get getMonitorLocator() {
        return this._monitor;
    }

    public get firstDataPointLocator() {
        return this._firstDataPoint
    }

    public get getRunTimeLocator() {
        return this._runTime;
    }

    public get getIPAddressLocator() {
        return this._ipAddressValue;
    }

    public get selectStepLoctor() {
        return (text: string) => { return `//div[@data-list-index="${text}"]` };
    }

    public get getCardValueLoctor() {
        return (text: string) => { return `//div[text()="${text}"]/..//span[@data-testid="keyMetricBlockValue"]` };
    }

    public get getStepNameLoctor() {
        return (text: number) => { return `(//div[@data-automation-key="Step Name_0"]//div)[${text}]` };
    }

    public get StepNameCheckBoxLoctor() {
        return (text: number) => { return `//div[@data-item-index="${text}"]//label` };
    }

    public get searchBoxOfGanttChartLocator() {
        return this._searchBoxOfGanttChart;
    }

    public get wiredRequestMetricsLocator() {
        return this._wiredRequestMetrics;
    }

    public get hostMetricsLocator() {
        return this._hostMetrics;
    }

    public get requestFilterDDLocator() {
        return this._requestFilterDD;
    }

    public get fileTypeDDLocator() {
        return this._fileTypeFilterDD;
    }

    public get firstSearchRowInRecordsListPage(){
        return this._recordFirstRow;
    }

    public get errorMessageFieldForDatePoint(){
        return this._errorMessageFieldForDatePoint;
    }
    public get errorCodeLocator(){
        return this._errorCodeLocator
    }


    //#endregion

    async clickOnTestInSourceSelector() {
        await webActions.clickElement(this.testInSourceSelectorLocator);
    }

    async clickOnPillDeleteButton() {
        await webActions.clickElement(this.pillDeleteButtonLocator);
    }

    async clickOnSourceButton() {
        await webActions.clickElement(this.sourceButtonLocator);
    }

    async clickFirstDataPoint() {
        await webActions.clickElement(this.firstDataPointLocator);
    }

    async getRunTimeValues() {
        let runTimeValue = await webActions.getElementText(this.getRunTimeLocator);
        return runTimeValue;
    }

    async selectStepInTransactionTest(stepNumber: string) {
        let xpath = this.selectStepLoctor(stepNumber);
        await webActions.clickElement(xpath);
    }


    async getCardMetricsData(cardMetrics: string[]) {
        let cardMetricsValue: string[] = [];
        for (let index = 0; index < cardMetrics.length; index++) {
            const metric = cardMetrics[index];
            let metricValue = await webActions.getElementText(this.getCardValueLoctor(metric));
            cardMetricsValue.push(metricValue);
        }
        return cardMetricsValue;
    }


    async getStepNames(item: number) {
        let itemText: string[] = [];
        for (let index = 1; index <= item; index++) {
            let xpath = this.getStepNameLoctor(index);
            let iteMText = await webActions.getElementText(xpath);
            itemText.push(iteMText);
        }
        return itemText;
    }

    async getClassPropertyOfStepNameCheckBox(stepNumber: number) {
        let inhertiText = await webActions.getElementAttributeValue(this.StepNameCheckBoxLoctor(stepNumber), 'class');
        return inhertiText;
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }

    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async getIPAddressValue() {
        let ipAddressValue = await webActions.getElementText(this.getIPAddressLocator);
        return ipAddressValue;

    }

    async getElementText(loc:string){
        let text = await webActions.getElementText(loc);
        return text;
    }

   
}