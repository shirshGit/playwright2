import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "playwright";

let webActions: WebActions;
let util: Utility

export class RecordsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _waterFallTab = '//span[text()="Waterfall"]';
    private _pingTab = '//span[text()="Ping"]';
    private _pillDeleteButton = '//div[@data-testid="pill-delete-button"]';
    private _testInSourceSelector = '//div[@data-testid="test-picker"]//div[contains(@class,"Pill_pillContent_")]';
    private _ipAddressNAValue = '//span[text()="IP Address"]/..//span[2][text()="NA"]';
    private _getIpAddressValue = '//span[text()="IP Address"]/..//span[2]';
    private _sourceButton = '//button[text()="Source"]';
    private _filedVerbErrorBar = '//div[contains(text(),"Failed Verb")]';
    private _runTime = '//span[text()="Run Time"]/..//span[2]';
    private _node = '//span[text()="Node"]/..//span[2]';
    private _nodeIP = '//span[text()="Node IP"]/..//span[2]';
    private _firstDataPoint = '//*[name()="svg"][1]/*[name()="g"][1]/*[name()="g"][3]/*[name()="g"][2]/*[name()="circle"][1]';
    private _monitor = '//span[text()="Monitor"]/..//span[2]';


    public get waterFallTab() {
        return this._waterFallTab;
    }

    public get pingTab() {
        return this._pingTab
    }

    public get pillDeleteButton() {
        return this._pillDeleteButton
    }

    public get testInSourceSelector() {
        return this._testInSourceSelector;
    }

    public get TestNameFromSourceBlade(){
        return (text: string) => { return `//span[text()="${text}"]` };
    }

    
    public get getIPAddressNAValue(){
        return this._ipAddressNAValue;
    }

    public get sourceButton(){
        return this._sourceButton;
    }

    public get failedVerb(){
        return this._filedVerbErrorBar;
    }

    public get getNode(){
        return this._node;
    }
    public get getNodeIP(){
        return this._nodeIP;
    }

    public get getMonitor(){
        return this._monitor;
    }

    public get firstDataPoint(){
        return this._firstDataPoint
    }

    public get getRunTime(){
        return this._runTime;
    }

    public get getIPAddress(){
        return this._getIpAddressValue;
    }
    //#endregion

    async clickOnTestInSourceSelector(){
        await webActions.clickElement(this.testInSourceSelector);
    }

    async clickOnPillDeleteButton(){
        await webActions.clickElement(this.pillDeleteButton);
    }

    async clickOnSourceButton(){
        await webActions.clickElement(this.sourceButton);
    }

    async clickFirstDataPoint(){
        await webActions.clickElement(this.firstDataPoint);
    }

    async getRunTimeValues(){
        return await webActions.getTextFromWebElementsUsingSelector(this.getRunTime);;
    }

    async getNewWindow(context : BrowserContext,locator : string){
        return await webActions.newWindowHandle(context,locator);
        
    }

    async getUrl(){
        return await webActions.getCurrentPageUrl();
    }

       
}