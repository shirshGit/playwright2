import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";

let webActions: WebActions;
let util: Utility;

export class InternetSonarAlertLogPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    
    private _searchBox = '(//input[@id="fabric-search-box"])[2]';
    private _internetSonarAlertList = '//div[@class="ms-List-page"][1]'
    

  

    public get searchBoxLocator(){
        return this._searchBox;
    }
    public get threeDotMenuLocator(){
        return (text:number) => { return `//div[@data-selection-index="${text}"]//span[@data-automationid="splitbuttonprimary"]`}
    }

    public get threeDotMenuItemLocator(){
        return (text:string) => { return `//span[contains(@class,'ms-ContextualMenu-itemText')][normalize-space()='${text}']`}
    }
    public get internetSonarAlertLocator(){
        return this._internetSonarAlertList;
    }




    //#endregion

    //#region This region is to have the functions
    
    async clickOnThreeDotMenu(num:number,threeDotMenuItem:string){
        await this.hoverOnThreeDotMenu(num)
        await webActions.clickElement(this.threeDotMenuItemLocator(threeDotMenuItem))
    }

    async hoverOnThreeDotMenu(num:number){
        await webActions.hoverOnElement(this.threeDotMenuLocator(num))
        await util.delay(1000)
        await webActions.clickElement(this.threeDotMenuLocator(num))
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async navigateToInternetSonarAlertsTestPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'Alerts/InternetSonar');
        await util.delay(5000);
    }


  

    //#endregion

}