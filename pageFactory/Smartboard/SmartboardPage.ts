import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class SmartboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _firstDataPointInTrendingChart = '//*[name()="svg"]//*[name()="g"]//*[name()="circle"][1]';
    private _selectFirstRecords = '//div[@data-automation-key="Run Time_1"]';

    public get dataPoint(){
        return this._firstDataPointInTrendingChart;
    }

    public get selectFirstRow(){
        return this._selectFirstRecords;
    }

   
    //#endregion

    async clickDataPoint(){
        await webActions.clickElement(this.dataPoint);
    }

    async selectFristRowFromRecordListPage(){
        
        await webActions.clickElementJS(this.selectFirstRow);
    }

   
    

    
}