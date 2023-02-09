import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility;

export class InstancesListPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _instacesNameHeaderInInstanceListPage = '//span[text()="Instance Name"]';
    private _statusHeaderInInstanceList = '//span[text()="Status"]';
    private _hardwareHeaderHeaderInInstancesList = '//span[text()="Hardware"]';

    public get instacesNameHeaderInInstanceListPageLocator(){
        return this._instacesNameHeaderInInstanceListPage;
    }

    public get statusHeaderInInstanceListLocator(){
        return this._statusHeaderInInstanceList;
    }

    public get hardwareHeaderHeaderInInstancesListLocator(){
        return this._hardwareHeaderHeaderInInstancesList;
    }


    //#endregion

    //#region This region is to have the functions

    
    //#endregion

}