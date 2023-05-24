import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility

export class WPTPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _threeLine = '//details[@class="wptheader_menu"]//summary'
    private _loginPageLink = '//a[text()="Login"]'
    
    
    public get threeLineLocator() {
        return this._threeLine;
    }
    public get loginPageLinkLocator() {
        return this._loginPageLink;
    }
    
    

   

    //#endregion

    //#region This region is to have the functions

   
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator)

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl()
    }
    async clickItem(loc:string){
        await webActions.clickElement(loc) 
    }

    

    //#endregion

}