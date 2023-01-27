import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util: Utility

export class SchedulePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    //#region This region is for getter

    private _createIcon = '//button[text()="Create"]';
    private _nameText = '//span[text()="Name"]';
    private _statusText = '//span[text()="Status"]';
    private _typeText = '//span[text()="Type"]';
    private _lastUpdatedColumnText = '//span[text()="Last Updated"]';
    

    public get newIconLocator() {
        return this._createIcon;
    }

    public get nameTextLocator() {
        return this._nameText;
    }

    public get statusTextLocator() {
        return this._statusText;
    }

    public get typeTextLocator() {
        return this._typeText;
    }

    public get lastUpdatedColumnTextLocator() {
        return this._lastUpdatedColumnText;
    }

 

    //#endregion

    //#region This region is to have the functions

   

   
    

    //#endregion

}