import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { testConfig } from '../../testConfig';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { LoginPage } from "@pageobjects/Login/LoginPage";

let webActions: WebActions;
let util: Utility;
let login : LoginPage;

export class EndpointInstantTestPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
        login = new LoginPage(this.page);
    }

    //#region This region is for getter
    
    private _loading = '//div[text()="Loading..."]'
    private _createButton = '//button[text()="New Instant Test"]'
    private _endpointTestTable = '//div[contains(@class,"ActionTable_customDataCont_")]'
    
    public get commonLocator(){
        return (text:string) => {return `//span[text()="${text}"]`}
    }
   
    public get loadingLocator(){
        return this._loading
    }
    public get createButtonLocator(){
        return this._createButton
    }
    public get testListTableLocator(){
        return this._endpointTestTable
    }
    
    

    //#endregion

    //#region This region is to have the functions

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async click(loc:string){
        await webActions.clickElement(loc)
    }
    async getElementText(locator:string){
        let text = await webActions.getElementText(locator)
        return text
    }
    async navigateToEndpointInstantTestPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'InstantTest/Endpoint');
        await util.delay(5000);
    }
    async clickOnCreateInstantTest() {
         await webActions.clickElement(this.createButtonLocator);
         await webActions.waitForElementAttached(this.commonLocator('Traceroute'));
    }
    async LoginToEndpointInstantTestHistoryPage() {
        this.navigateToEndpointInstantTestPageByURL();
        await login.enterLoginCredential();
        await webActions.waitForElementAttached(this.testListTableLocator)
    }


   


    //#endregion

}