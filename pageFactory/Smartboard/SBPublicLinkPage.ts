import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class SBPublicLinkPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _getSourceNameFromPublicLinkPage = '//div[contains(@class,"SourceSelectorRowstyles__LabelWrapper")]'
    
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