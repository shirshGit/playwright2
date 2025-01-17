import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
let webActions: WebActions;
let util: Utility

export class CharmBar {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _divisionInCharmbar = '//div[@data-testid="division-section-root-div"]';
    

    
    public get divisionIconInCharmBarLocator() {
        return this._divisionInCharmbar;
    }

    public get divisionLocator() {
        return (text: string) => { return `//div[text()="${text}"]` };
    }

    //#endregion

    //#region This region is to have the functions

  
    async selectDivFromCharmbar(division : string){
        await webActions.clickElement(this.divisionIconInCharmBarLocator);
        await webActions.clickElement(this.divisionLocator(division));
    }




    //#endregion

}