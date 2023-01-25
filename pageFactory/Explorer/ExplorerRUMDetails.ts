import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class ExplorerRUMDetails {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _avgDOCCompleteMetricsText = '//span[text()="Avg. Doc Complete (ms)"]';
    private _pageViewsMetricsText = '//span[text()="# Page Views"]';
    private _avgDOCCompleteMetricsValue = '//div[@data-automation-key="Avg. Doc Complete (ms)_1"]';
    private _pageViewsMetricsValue = '//div[@data-automation-key="# Page Views_2"]';
    

    public get avgDOCCompleteMetricsTextLocator() {
        return this._avgDOCCompleteMetricsText;
    }
    public get pageViewsMetricsTextLocator() {
        return this._pageViewsMetricsText;
    }
    public get avgDOCCompleteMetricsValueLocator() {
        return this._avgDOCCompleteMetricsValue;
    }
    public get pageViewsMetricValueLocator() {
        return this._pageViewsMetricsValue;
    }
}