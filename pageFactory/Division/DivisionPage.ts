import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility

export class DivisionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _createIcon = '//button[text()="Create"]';
    private _nameText = '//span[text()="Name"]';
    private _statusText = '//span[text()="Status"]';
    private _lastUpdatedText = '//span[text()="Last Updated"]';
  

    public get createIconLocator() {
        return this._createIcon;
    }
    public get nameTextLocator() {
        return this._nameText;
    }
    public get statusIconLocator() {
        return this._statusText;
    }
    public get lastUpdatedTextLocator() {
        return this._lastUpdatedText;
    }

    

    //#endregion

    //#region This region is to have the functions

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
   

    //#endregion

}