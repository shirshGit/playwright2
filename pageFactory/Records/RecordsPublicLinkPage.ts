import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class RecordsPublicLinkPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _getSourceNameFromPublicLinkPage = '//label[contains(@class,"PublicSyntheticRecord_shareLabel_")]'
    
    public get getSourceNameFromPublicLinkPageLocator(){
        return this._getSourceNameFromPublicLinkPage
    }
   


    //#endregion

    async click(loc:string){
        await webActions.clickElement(loc)
    }
    async getElementText(locator:string){
        let text = await webActions.getElementText(locator)
        return text
    }

   
}