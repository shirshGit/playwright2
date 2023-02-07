import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { Page } from "playwright";
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
    private _searchBox = '//input[@data-testid="searchText"]';
    private _firstRowSearchCheckBoxInSelectorPage = '//i[@data-icon-name="StatusCircleCheckmark"]/div';
    private _nodeTab = '//li[text()="Nodes"]';
    private _myAppTab = '//li[text()="My Apps"]';
    private _testTab = '//li[text()="Tests"]';
    private _endpointTab = '//li[text()="Tests"]';
    private _employeeAppTab = '//li[text()="Tests"]';
    private _LocationTab = '//li[text()="Tests"]';
    private _endpointTestTab = '//li[text()="Endpoint Tests"]';
    private _goButton = '//span[text()="Go"]';
    private _timeZoneDropDown = '//div[@data-testid="timezone-dropdown"]';
    private _compareDropDown = '(//i[@data-icon-name="chevrondownLarge"])[1]';
    private _timeLine = '//div[contains(@class,"EndpointSmartboardstyles__EndpointSmartboardTimeline-")]';
    private _summary = '//span[text()="Summary"]';
    private _endpoint = '//span[text()="Endpoint"]';
    private _network = '//span[text()="Network"]';
    private _application = '//span[text()="Application"]';


    public get searchBox() {
        return this._searchBox;
    }

    public get firstRowSearchCheckBoxInSelectorPage() {
        return this._firstRowSearchCheckBoxInSelectorPage
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


  
    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedItemInSelectorPage(itemName: string) {
        await this.searchItem(itemName);
        await webActions.clickElement(this.firstRowSearchCheckBoxInSelectorPage);
    }

    async searchItem(item: string) {
        await webActions.waitForElementAttached(this.searchBox);
        await webActions.clickElement(this.searchBox);
        await webActions.enterElementText(this.searchBox, item);
        await util.delay(1000);
        await webActions.clickElement(this.searchBox);
        await webActions.keyPress(this.searchBox, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    
    async clickOnTabInSourceSelector(item : string){
        await webActions.clickElement(this.tabLocatorInSourceSelector(item));
    }

    async clickOnTab(item : string){
        await webActions.clickElement(this.tabLocator(item));
    }
    

    
    //#endregion

}