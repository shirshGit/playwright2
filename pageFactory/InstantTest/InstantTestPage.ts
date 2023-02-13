import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility;

export class InstantTestPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _testTypeDDInstantTest = '//label[text()="Test Type"]/..//input';
    private _monitorDDInstantTest = '//label[text()="Monitor"]/..//input';
    private _nodesInputField = '//label[contains(text(),"Nodes")]/..//input';

    public get testTypeDDInstantTestLocator(){
        return this._testTypeDDInstantTest;
    }

    public get monitorDDInstantTestLocator(){
        return this._monitorDDInstantTest;
    }

    public get nodesInputFieldLocator(){
        return this._nodesInputField;
    }
    

    //#endregion

    //#region This region is to have the functions




    //#endregion

}