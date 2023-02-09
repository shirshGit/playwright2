import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
let webActions: WebActions;
let util: Utility

export class ContactGroupPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _createButton = '//button[text()="Create"]';
    private _name   = '//span[text()="Name"]';
    private _division  = '//span[text()="Division"]';
    private _activeContact  = '//span[text()="Active Contacts"]';
    private _inactiveContact = '//span[text()="Inactive Contacts"]';
    private _status = '//span[text()="Status"]';
    private _lastUpdate = '//span[text()="Last Updated"]';




    
    public get createButtonLocator() {
        return this._createButton;
    }

    public get nameTextLocator() {
        return this._name;
    }

    public get divisionTextLocator() {
        return this._division;
    }

    public get statusTextLocator() {
        return this._status;
    }

    public get activeContactTextLocator() {
        return this._activeContact;
    }

    public get inactiveContactTextLocator() {
        return this._inactiveContact;;
    }

    public get lastUpdatedTextTextLocator() {
        return this._lastUpdate;
    }

    



    //#endregion

    //#region This region is to have the functions

  





    //#endregion

}