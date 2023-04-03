import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "@playwright/test";

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


   


    //#endregion

}