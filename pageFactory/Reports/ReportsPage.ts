import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util: Utility;

export class ReportListPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _reportCreateLink = '//a[@id="CreateLinkTop"]';
    private _batchReportActiveTop = '//a[@id="BatchActivateTop"]';
    

    public get reportCreateLinkLocator(){
        return this._reportCreateLink;
    }

    public get batchReportActiveTopLocator(){
        return this._batchReportActiveTop;
    }

    //#endregion

    //#region This region is to have the functions
    



    //#endregion

}