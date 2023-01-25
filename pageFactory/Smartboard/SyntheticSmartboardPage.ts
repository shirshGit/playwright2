import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class SyntheticSmartboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _firstDataPointInTrendingChart = '//*[name()="svg"]//*[name()="g"]//*[name()="circle"][1]';
    private _selectFirstRecords = '//div[@data-automation-key="Run Time_1"]';
    private _filterButton = '//i[@data-icon-name="filterButtonWhite"]';
    private _downTimeMetricsInTimeLine = '(//div[text()="% Downtime"])[1]';
    private _testTimeMetricsInTimeLine = '(//div[text()="Test Time (ms)"])[1]';
    private _runMetricsInTimeLine = '(//div[text()="# Runs"])[1]';
    private _downTimeMetricsInKeyMetric = '(//div[text()="% Downtime"])[2]';
    private _testTimeMetricsInKeyMetric = '(//div[text()="Test Time (ms)"])[2]';
    private _trendingChart = '(//div[contains(@class,"AnalyticsTrendingChart_chartContainer_")]//div//div[contains(@class,"Chart_chartContainer_")]//*[name()="svg"])[1]';
    
    public get dataPoint(){
        return this._firstDataPointInTrendingChart;
    }

    public get selectFirstRowLocator(){
        return this._downTimeMetricsInTimeLine;
    }
    public get testTimeMetricsInTimeLineLocator(){
        return this._testTimeMetricsInTimeLine;
    }
    public get downTimeMetricsInTimeLine(){
        return this._downTimeMetricsInTimeLine;
    }
    public get rumMetricsInTimeLineLocator(){
        return this._runMetricsInTimeLine;
    }
    public get downTimeMetricsInKeyMetricLocator(){
        return this._downTimeMetricsInKeyMetric;
    }
    public get testTimeMetricsInKeyMetricLocator(){
        return this._testTimeMetricsInKeyMetric;
    }
    
    public get filterLocator(){
        return this._filterButton;
    }

    public get trendingChartGraphLocator(){
        return this._trendingChart;
    }

   
    //#endregion

    async clickDataPoint(){
        await webActions.clickElement(this.dataPoint);
    }

    async selectFristRowFromRecordListPage(){
        await webActions.clickElementJS(this.selectFirstRowLocator);
    }

   
    

    
}