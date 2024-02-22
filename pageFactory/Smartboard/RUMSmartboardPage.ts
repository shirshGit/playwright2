import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class RUMSmartboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _pageViewsMetricsValue = '(//div[text()="# Page Views"]/..//div)[2]';
    private _docCompleteMetricsValue = '(//div[text()="Doc Complete (ms)"]/..//div)[2]';
    private _jsValueMetrics = '(//div[text()="# JS Errors Per Page"]/..//div)[2]';
    private _filterButton = '//button[text()="Filters"]';
    private _responseMetricsValue = '((//div[text()="Response (ms)"])[1]/..//div)[2]';
    private _domInteractiveMetricsValue = '((//div[text()="DOM Interactive (ms)"])[1]/..//div)[2]';
    private _timeLineGraph = '//div[contains(@class,"Timeline_cont_")]';
    public get pageViewsMetricsValueLocator(){
        return this._pageViewsMetricsValue;
    }

    public get docCompleteMetricsValueLocator(){
        return this._docCompleteMetricsValue;
    }

    public get jsValueMetricsLocator(){
        return this._jsValueMetrics;
    }

    public get filterButtonDropDown(){
        return this._filterButton;
    }

    public get responseMetricsValueLocator(){
        return this._responseMetricsValue;
    }

    public get domInteractiveMetricsValueLocator(){
        return this._domInteractiveMetricsValue;
    }
    public get commonLocator(){
        return (text:string) => { return `//span[text()="${text}"]`}
    }
    public get commoNLocator(){
        return (text:string) => { return `(//div[text()="${text}"])[1]`}
    }
    public get timeLineGraphLocator(){
        return this._timeLineGraph;
    }

   
    //#endregion
     
    async waitForElement(locator:string){
        await webActions.waitForElementAttached(locator);
    }
    
   
    

    
}