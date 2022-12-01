import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util: Utility;

export class InstantTestHistoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _dailyInstantTestUsage = '//span[contains(text(),"Daily Node Instant Test Usage")]';
    private _urlHeaderForIntantTestHistory = '//span[contains(@id,"header")]//span[text()="URL"]';
    private _testTypeHeaderInInstantTestHistoryTable = '//span[contains(@id,"header")]//span[text()="Test Type"]';
    private _statusInstantTestHistoryTable = '//span[contains(@id,"header")]//span[text()="Status"]';

    public get dailyInstantTestUsageLocator(){
        return this._dailyInstantTestUsage;
    }

    public get urlHeaderForIntantTestHistoryLocator(){
        return this._urlHeaderForIntantTestHistory;
    }

    public get testTypeHeaderInInstantTestHistoryTableLocator(){
        return this._testTypeHeaderInInstantTestHistoryTable;
    }

    public get statusInstantTestHistoryTableLocator(){
        return this._statusInstantTestHistoryTable;
    }
    
    

    //#endregion

    //#region This region is to have the functions




    //#endregion

}