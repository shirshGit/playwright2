import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util: Utility;

export class NodeListPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _nodeNameHeaderInNodeListTable = '//span[text()="Node Name"]';
    private _statusHeaderInNodeListPage = '//span[text()="Status"]';
    private _runRateHeaderInNodeListPage = '//span[text()="Run Rate"]';

    public get nodeNameHeaderInNodeListTableLocator(){
        return this._nodeNameHeaderInNodeListTable;
    }

    public get statusHeaderInNodeListPageLocator(){
        return this._statusHeaderInNodeListPage;
    }

    public get runRateHeaderInNodeListPageLocator(){
        return this._runRateHeaderInNodeListPage;
    }


    //#endregion

    //#region This region is to have the functions

    
    //#endregion

}