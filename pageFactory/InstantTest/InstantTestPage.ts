import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";
import { DataForEnv } from "@lib/DataForEnvironment";
import { LiteralSyntaxKind } from "typescript";

let webActions: WebActions;
let util: Utility;

export class InstantTestPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _testTypeDDInstantTest = '//label[text()="Test Type"]/..//input';
    private _monitorDDInstantTest = '//label[text()="Monitor"]/..//input';
    private _nodesInputField = '//label[contains(text(),"Nodes")]/..//input';
    private _testUrlInputBox = '//input[@id="synthetic-target-url-input"]'
    private _nodeInputBox = '//div[contains(@class,"AutoCompletePillPicker_pillPicker")]//input'
    private _shareButton = '//button[text()="Share"]'
    private _getShareLink = '//span[contains(@class,"TextBoxCopyButton_copySection")]'
    private _loading = '//div[text()="Loading..."]'
    private _testTypeDD = '(//i[@data-icon-name="chevrondownLarge"]/div)[1]';
    public get testTypeDDInstantTestLocator(){
        return this._testTypeDDInstantTest;
    }

    public get monitorDDInstantTestLocator(){
        return this._monitorDDInstantTest;
    }

    public get nodesInputFieldLocator(){
        return this._nodeInputBox;
    }
    public get commonLocator(){
        return (text:string) => {return `//span[text()="${text}"]`}
    }
    public get commonLocatorWithIndex(){
        return (text:string, index:number) => {return `(//span[text()="${text}"])[${index}]`}
    }
    public get urlFieldLocator(){
        return this._testUrlInputBox;
    }
    public get shareButtonLocator(){
        return this._shareButton;
    }
    public get shareLinkCopyLocator(){
        return this._getShareLink
    }
    public get loadingLocator(){
        return this._loading
    }
    public get selectTestTypeDDLocator(){
        return this._testTypeDD
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
    async enterNodes(nodes: string[]){
        let nodeList: string[] = []; 
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            await webActions.enterElementText(this.nodesInputFieldLocator,node)
            await webActions.onlyKeyPress('Enter')
        }
    }
    async enterURL(url:string){
        await webActions.enterElementText(this.urlFieldLocator,url)
    }
    async getShareLink(){
        await webActions.hoverOnElement(this.shareButtonLocator)
        let link = await webActions.getElementText(this.shareLinkCopyLocator)
        return link
    }
    async getResultStatus(){
        if (await this.page.locator(this.loadingLocator).isVisible) return true
        if (await this.page.locator(this.loadingLocator).isHidden) return false
    }

    async navigateToInstantTestPageByURL() {
        let data = new DataForEnv();
        let baseURL = await data.getValueOfTheParameter('baseURL');
        await webActions.navigateToURL(baseURL + 'InstantTest/Tests/New');
        await util.delay(5000);
    }
    async selectTestTypeInInstantTestPage(testType:string){
        await webActions.clickElement(this.selectTestTypeDDLocator)
        await util.delay(1000);
        await webActions.clickElement(this.commonLocator(testType))
    }
    async cancelPopUp(){
        await webActions.clickElement('//button[contains(@class,"_pendo-close-guide")]');
    }
    async clickOnAPITestTypeInInstantTestDD(){
        await webActions.clickElement(this.selectTestTypeDDLocator)
        await util.delay(1000);
        await webActions.clickElement(this.commonLocatorWithIndex('API',2))
    }



   


    //#endregion

}