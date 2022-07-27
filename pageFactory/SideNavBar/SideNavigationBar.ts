import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";

let webActions: WebActions;

export class SideNavBar{

    readonly page:Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
    }


    //#region This region is for locators as Property
    private _sideNavControlCenter = '#controlcentersection';
    private _sideNavCCTest = '//button/a[text()="Tests"]';



    public get sideNavControlCenter(){
        return this._sideNavControlCenter;
    }

    public get sideNavCCTest(){
        return this._sideNavCCTest;
    }

    //#endregion

    async navigateToSyntheticCCFromSideNavigation(){
        await webActions.clickElement(this.sideNavControlCenter)
        await webActions.clickElement(this.sideNavCCTest);
    }


}