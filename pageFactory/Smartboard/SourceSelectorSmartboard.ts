import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "@playwright/test";
import { SyntheticSmartboardPage } from "./SyntheticSmartboardPage";

let webActions: WebActions;
let util: Utility

export class SourceSelectorSmartboard extends SyntheticSmartboardPage{
    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter
    private _testSearchBox = '//input[@data-testid="searchText"]';
    private _appSearchBox = '//input[@id="rum-source-selector-search-box"]';
    private _nodeSearchBox = '//input[@id="fabric-search-box"]';
    private _firstRowSearchCheckBoxInSelectorPage1 = '//i[@data-icon-name="StatusCircleCheckmark"]/div';
    private _firstRowSearchCheckBoxInSelectorPage2 = '//div[@data-automationid="DetailsRowCheck"]//label'
    private _nodeTab = '//li[text()="Nodes"]';
    private _myAppTab = '//li[text()="My Apps"]';
    private _testTab = '//li[text()="Tests"]';
    private _endpointTab = '//li[text()="Tests"]';
    private _employeeAppTab = '//li[text()="Tests"]';
    private _LocationTab = '//li[text()="Tests"]';
    private _endpointTestTab = '//li[text()="Endpoint Tests"]';
    private _sbPillInSourceSelector = '//div[contains(@class,"AutoCompletePillPicker_pillWrapper")]'
    private _nodeTableInSourceSelector = '//div[@id="node-tree-blade-pivot"]'
    private _tableInSourceSelector = '//div[@class="ms-List"]';
    
    public get appSearchBox() {
        return this._appSearchBox;
    }
    public get testSearchBox() {
        return this._testSearchBox;
    }
    public get nodeSearchBox() {
        return this._nodeSearchBox;
    }

    public get firstRowSearchCheckBoxInSelectorPage1() {
        return this._firstRowSearchCheckBoxInSelectorPage1
    }
    public get firstRowSearchCheckBoxInSelectorPage2() {
        return this._firstRowSearchCheckBoxInSelectorPage2
    }

    public get myAppTabLocator() {
        return this._myAppTab;
    }
    public get nodeTabLocator() {
        return this._nodeTab;
    }

    public get testTabLocator() {
        return this._testTab;
    }

    public get employeeAppTabLocator() {
        return this._myAppTab;
    }
    public get endpointTabLocator() {
        return this._endpointTab;
    }

    public get endpointTestTabLocator() {
        return this._endpointTestTab;
    }

    public get locationTabLocator() {
        return this._LocationTab;
    }

    public get tabLocatorInSourceSelector() {
        return (text:string) => {return `//li[text()="${text}"]`};
    }
    public get tabLocator() {
        return (text:string) => {return `//span[text()="${text}"]`};
    }

    public get pillItem(){
        return this._sbPillInSourceSelector;
    }
    public get nodeTableInSourceSelector(){
        return this._nodeTableInSourceSelector;
    }
    public get tableInSourceSelector(){
        return this._tableInSourceSelector;
    }
    

  
    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInSelectorPage(itemName: string, parentName:string) {
        await this.searchItem(itemName,parentName);
        let xpath = null;
        if (parentName === 'Nodes') {
            xpath = this.firstRowSearchCheckBoxInSelectorPage2;
        }else{
            xpath = this.firstRowSearchCheckBoxInSelectorPage1;
        }
        await webActions.clickElement(xpath);
        await webActions.waitForElementAttached(this.timeLineGraph);
    }

    async searchItem(item: string, parentName:string) {
        let xpath = null;
        if (parentName === 'Nodes') {
            xpath = this.nodeSearchBox;
        }else if(parentName === 'My Apps'){
            xpath = this.appSearchBox;
        }else if(parentName === 'Tests'){
            xpath = this.testSearchBox;
        }
        await webActions.waitForElementAttached(xpath);
        await webActions.clickElement(xpath);
        await webActions.enterElementText(xpath, item);
        await util.delay(1000);
        await webActions.clickElement(xpath);
        await webActions.keyPress(xpath, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    
    async clickOnTabInSourceSelector(item : string, waitElement:string){
        await webActions.clickElement(this.tabLocatorInSourceSelector(item));
        await webActions.waitForElementAttached(waitElement)
    }

    async clickOnTab(item : string){
        await webActions.clickElement(this.tabLocator(item));
    }
    async selectTabUnderNodes(item : string){
        await webActions.clickElement(this.commonLocator(item));
    }
    

    
    //#endregion

}