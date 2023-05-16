import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class SBSharedLinkPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    private _firstPublicLink = '//div[@data-automation-key="Link_0"]'
    private _createdLinksTextInShareExplorer = '//span[text()="Created Links"]'
    private _generateButton = '//button[text()="+ Generate Link"]'

    public get generateLinkButtonLocator(){
        return this._generateButton
    }
    public get fristPublicLinkLocator(){
        return this._firstPublicLink
    }

    public get createdLinksTextInShareExplorer(){
        return this._createdLinksTextInShareExplorer
    }


    //#region This region is for getter

    


    //#endregion

    async click(loc:string){
        await webActions.clickElement(loc)
    }
    async getElementText(locator:string){
        let text = await webActions.getElementText(locator)
        return text
    }

   
}