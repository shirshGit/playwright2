import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";

let webActions: WebActions;
let util: Utility;

export class InternetSonarCenterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _internetSonarList = '//div[@class="ms-List"]';
    
    public get internetSonarListLocator() {
        return this._internetSonarList;
    }
 
    //#endregion

    //#region This region is to have the functions

    async navigateToInternetSonarPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'ControlCenter/InternetSonar');
        await util.delay(5000);
    }


    //#endregion

}