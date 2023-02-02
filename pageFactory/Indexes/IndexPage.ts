import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";

let webActions: WebActions;
let util: Utility

export class IndexPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _newIcon = '//button[text()="New"]';
    private _nameText = '//span[text()="Name"]';
    private _descriptionText = '//span[text()="Description"]';
    private _IDText = '//span[text()="ID"]';
    private _numberOfTestText = '//span[text()="Number of Tests"]';
    

    public get newIconLocator() {
        return this._newIcon;
    }

    public get nameTextLocator() {
        return this._nameText;
    }

    public get descrptionTextLocator() {
        return this._descriptionText;
    }

    public get idTextLocator() {
        return this._IDText;
    }

    public get noOfTestTextLocator() {
        return this._numberOfTestText;
    }


    //#endregion

    //#region This region is to have the functions


    //#endregion

}