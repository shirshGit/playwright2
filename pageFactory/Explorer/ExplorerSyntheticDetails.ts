import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";
import { ExplorerPage } from "./ExplorerPage";

let webActions: WebActions;
let util: Utility

export class ExplorerSyntheticDetails{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    
    //#region This region is for getter
    private _runMetricsText = '//span[text()="# Runs"]';
    private _testTimeMetricsText = '//span[text()="Avg. Test Time (ms)"]';
    private _availabilityMetricsText = '//span[text()="% Availability"]';
    private _runMetricsValue = '//div[@data-automation-key="# Runs_1"]';
    private _testTimeMetricsValue = '//div[@data-automation-key="Avg. Test Time (ms)_2"]';
    private _availabilityMetricsValue = '//div[@data-automation-key="% Availability_3"]';
    private _last24HourTimeFrame = '//input[@value="Last 24 Hours"]';
    private _syntheticGraphLocator = '//div[contains(@class,"Explorer_charting_")]';
    private _last6HourTimeFrame = '//input[@value="Last 6 Hours"]';
    private _pointEstimationLoc = '//div[contains(@class,"PointsEstimation_number_")]'
    public get runMetricsTextLocator() {
        return this._runMetricsText;
    }
    public get testTimeMetricsTextLocator() {
        return this._testTimeMetricsText;
    }
    public get availabilityMetricsTextLocator() {
        return this._availabilityMetricsText;
    }
    public get runMetricsValueLocator() {
        return this._runMetricsValue;
    }
    public get testTimeMetricsValueLocator() {
        return this._testTimeMetricsValue;
    }
    public get availabilityMetricsValueLocator() {
        return this._availabilityMetricsValue;
    }
    public get last24HourTimeFrameLocator(){
        return this._last24HourTimeFrame;
    }
    public get last6HourTimeFrameLocator(){
        return this._last6HourTimeFrame;
    }

    public get summaryTabMetricsLocator(){
        return (text:string) => { return `//span[text()="${text}"]`}
    }
    public get syntheticGraphLocator(){
        return this._syntheticGraphLocator;
    }
    public get pointEstimationLocator(){
        return this._pointEstimationLoc
    }
    //#endregion
    async waitForElement(locator:string){
        await webActions.waitForElementAttached(locator);
    }
}