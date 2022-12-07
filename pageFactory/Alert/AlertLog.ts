import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util: Utility;

export class AlertLogPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _alertsForTests = '//span[text()="Tests"]';
    private _alertsForRum = '//span[text()="RUM"]';
    private _testIDInAlertLogTable = '//span[text()="Test ID"]';


    public get alertSectionForTestsLocator(){
        return this._alertsForTests;
    }

    public get alertSectionForRumLocator(){
        return this._alertsForRum;
    }

    public get testIDHeaderInAlertLogListLocator(){
        return this._testIDInAlertLogTable;
    }




    //#endregion

    //#region This region is to have the functions
    



    //#endregion

}