import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility;

export class NodeGroupPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _nodeGroupIdHeaderInTable = '//span[text()="ID"]';
    private _nodeCountHeaderInTable = '//span[text()="Node Count"]';
    private _descriptionHeaderInTable = '//span[text()="Description"]';

    public get nodeGroupIdHeaderInTableLocator(){
        return this._nodeGroupIdHeaderInTable;
    }

    public get nodeCountHeaderInTableLocator(){
        return this._nodeCountHeaderInTable;
    }

    public get descriptionHeaderInTableLocator(){
        return this._descriptionHeaderInTable;
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