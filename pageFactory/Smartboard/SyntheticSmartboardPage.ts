import { WebActions } from "@lib/WebActions"
import { BrowserContext, Page } from "@playwright/test"
import { Utility } from "@util/Utility"

let webActions: WebActions
let util: Utility

export class SyntheticSmartboardPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        util = new Utility()
    }
    //#region This region is for getter

    private _firstDataPointInTrendingChart = '//*[name()="svg"]//*[name()="g"]//*[name()="circle"][1]'
    private _selectFirstRecords = '//div[@data-automation-key="Run Time_1"]'
    private _filterButton = '//i[@data-icon-name="filterButtonWhite"]'
    private _downTimeMetricsInTimeLine = '(//div[text()="% Downtime"])[1]'
    private _testTimeMetricsInTimeLine = '(//div[text()="Test Time (ms)"])[1]'
    private _runMetricsInTimeLine = '(//div[text()="# Runs"])[1]'
    private _downTimeMetricsInKeyMetric = '(//div[text()="% Downtime"])[2]'
    private _testTimeMetricsInKeyMetric = '(//div[text()="Test Time (ms)"])[2]'
    private _trendingChart = '(//div[contains(@class,"AnalyticsTrendingChart_chartContainer_")]//div//div[contains(@class,"Chart_chartContainer_")]//*[name()="svg"])[1]'
    private _testInSourceSelector = '//div[@data-testid="test-picker"]//div[contains(@class,"Pill_pillContent_")]'
    private _Last6HourTimeFrame = '//input[@value="Last 6 Hours"]'
    private _generateButton = '//button[text()="+ Generate Link"]'
    private _firstPublicLink = '//div[@data-automation-key="Link_0"]'
    private _getSourceNameFromPublicLinkPage = '//div[contains(@class,"SourceSelectorRowstyles__LabelWrapper")]'
    private _getTestNameFromSourceSelector = '//div[contains(@class,"Pill_pillContent_")]'
    private _createdLinksTextInShareExplorer = '//span[text()="Created Links"]'
    

    public get commonLocator() {
        return (text: string) => { return `//span[text()="${text}"]` }
    }
    public get commoNLocator() {
        return (text: string) => { return `//div[text()="${text}"]` }
    }
    public get dataPoint() {
        return this._firstDataPointInTrendingChart
    }

    public get selectFirstRowLocator() {
        return this._downTimeMetricsInTimeLine
    }
    public get testTimeMetricsInTimeLineLocator() {
        return this._testTimeMetricsInTimeLine
    }
    public get downTimeMetricsInTimeLine() {
        return this._downTimeMetricsInTimeLine
    }
    public get rumMetricsInTimeLineLocator() {
        return this._runMetricsInTimeLine
    }
    public get downTimeMetricsInKeyMetricLocator() {
        return this._downTimeMetricsInKeyMetric
    }
    public get testTimeMetricsInKeyMetricLocator() {
        return this._testTimeMetricsInKeyMetric
    }

    public get filterLocator() {
        return this._filterButton
    }

    public get trendingChartGraphLocator() {
        return this._trendingChart
    }

    public get testInSourceSelectorLocator() {
        return this._testInSourceSelector
    }
    public get lastSixHourTimeFrame() {
        return this._Last6HourTimeFrame
    }
    public get filterValueLocator() {
        return (text: number) => { return `(//div[@data-testid="pill-content"])[${text}]` }
    }
    public get generateLinkButtonLocator(){
        return this._generateButton
    }
    public get fristPublicLinkLocator(){
        return this._firstPublicLink
    }
    public get getSourceNameFromPublicLinkPageLocator(){
        return this._getSourceNameFromPublicLinkPage
    }
    public get gettestNameFromSourceSelectorBoxLocator(){
        return this._getTestNameFromSourceSelector
    }
    public get createdLinksTextInShareExplorer(){
        return this._createdLinksTextInShareExplorer
    }


    //#endregion

    async clickDataPoint() {
        await webActions.clickElement(this.dataPoint)
    }

    async selectFristRowFromRecordListPage() {
        await webActions.clickElementJS(this.selectFirstRowLocator)
    }
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator)

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl()
    }
    async getFilterValue(valueNum: number) {
        await util.delay(4000)
        return await webActions.getElementText(this.filterValueLocator(valueNum))
    }
    async testWiseKeyMetrics(testType: string) {
        switch (testType) {
            case "Transaction":
                let transactionTestMetrics: string[] = ['% Downtime', 'Response (ms)', 'DNS (ms)', 'Ping Round Trip (ms)', 'Connect (ms)', 'Load (ms)', 'Wait (ms)', '% Ping Packet Loss', '% Self Bottleneck', 'DOM Loaded (ms)', 'Test Time (ms)', 'Total Downloaded Bytes']
                return transactionTestMetrics
            default:
                let webTestMetrics: string[] = ['% Downtime', 'Test Time (ms)', 'Response (ms)', 'Time To Interactive (ms)', 'Doc Complete (ms)', 'Content Load (ms)', 'First Paint (ms)', 'First Contentful Paint (ms)', 'Largest Contentful Paint (ms)', 'Cumulative Layout Shift', 'Total Downloaded Bytes', '# Items', 'DNS (ms)', 'Connect (ms)', 'SSL (ms)', 'Wait (ms)', 'Load (ms)', 'Ping Round Trip (ms)', '% Ping Packet Loss', '% Self Bottleneck', '% Third Party Bottleneck', 'Wait (ms)']
                return webTestMetrics
        }
    }

    async testWiseTimeLineMetrics() {
        let timeLineMetrics: string[] = ['Test Time (ms)', 'Downtime', 'Warning Alert', 'Critical Alert']
        return timeLineMetrics
    }
    async click(loc:string){
        await webActions.clickElement(loc)
    }
    async getElementText(locator:string){
        let text = await webActions.getElementText(locator)
        return text
    }
    




}