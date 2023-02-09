import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";

let webActions: WebActions;
let util: Utility;

export class RumControlCenterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _rumTreeSideSideNav = '//div[contains(@class,"NavigationTree_navGroupText") and text() = "RUM"]';
    

    public get rumTreeSideSideNavLocator() {
        return this._rumTreeSideSideNav;
    }

    

    //#endregion

    //#region This region is to have the functions




    //#endregion

}