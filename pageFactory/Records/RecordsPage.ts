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
    private _ipAddressValue = '//span[@data-testid="ipAddress"]';
    private _sourceButton = '//button[text()="Source"]';
    private _filedVerbErrorBar = '//div[contains(text(),"Failed Verb")]';
    private _runTime = '//span[text()="Run Time"]/..//span[2]';
    private _node = '//span[text()="Node"]/..//span[2]';
    private _nodeIP = '//span[text()="Node IP"]/..//span[2]';
    private _firstDataPoint = '//*[name()="svg"][1]/*[name()="g"][1]/*[name()="g"][3]/*[name()="g"][2]/*[name()="circle"][1]';
    private _monitor = '//span[text()="Monitor"]/..//span[2]';


    public get waterFallTabLocator() {
        return this._waterFallTab;
    }

    public get pingTabLocator() {
        return this._pingTab
    }

    public get pillDeleteButtonLocator() {
        return this._pillDeleteButton
    }

    public get testInSourceSelectorLocator() {
        return this._testInSourceSelector;
    }

    public get TestNameFromSourceBladeLocator() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }


    public get getIPAddressValueLocator() {
        return this._ipAddressValue;
    }

    public get sourceButtonLocator() {
        return this._sourceButton;
    }

    public get failedVerbLocator() {
        return this._filedVerbErrorBar;
    }

    public get getNodeLocator() {
        return this._node;
    }
    public get getNodeIPLocator() {
        return this._nodeIP;
    }

    public get getMonitorLocator() {
        return this._monitor;
    }

    public get firstDataPointLocator() {
        return this._firstDataPoint
    }

    public get getRunTimeLocator() {
        return this._runTime;
    }

    public get getIPAddressLocator() {
        return this._ipAddressValue;
    }
    //#endregion

    async clickOnTestInSourceSelector() {
        await webActions.clickElement(this.testInSourceSelectorLocator);
    }

    async clickOnPillDeleteButton() {
        await webActions.clickElement(this.pillDeleteButtonLocator);
    }

    async clickOnSourceButton() {
        await webActions.clickElement(this.sourceButtonLocator);
    }

    async clickFirstDataPoint() {
        await webActions.clickElement(this.firstDataPointLocator);
    }

    async getRunTimeValues() {
        return await webActions.getTextFromWebElementsUsingSelector(this.getRunTimeLocator);
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }

    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async getIPAddressValue() {
        let ipAddressValue = await webActions.getTextFromWebElements(this.getIPAddressValueLocator);
        return ipAddressValue;
    }


}