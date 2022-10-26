import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";

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
    private _firstDataPoint = '(//*[name()="circle" and contains(@class,"Chart_dot_")])[1]';
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

    public get getIPAddressNAValueLocator() {
        return this._ipAddressNAValue;
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
        return this._getIpAddressValue;
    }

    public get selectStepLocator() {
        return (text: string) => { return `//div[@data-list-index="${text}"]` };
    }

    public get getCardValueLocator() {
        return (text: string) => { return `//div[text()="${text}"]/..//span[@data-testid="keyMetricBlockValue"]` };
    }

    public get getStepNameLocator() {
        return (text: number) => { return `(//div[@data-automation-key="Step Name_0"]//div)[${text}]` };
    }

    public get StepNameCheckBoxLocator() {
        return (text: number) => { return `//div[@data-item-index="${text}"]//label` };
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

    async selectStepInTransactionTest(stepNumber: string) {
        let xpath = this.selectStepLocator(stepNumber);
        await webActions.clickElement(xpath);
    }

    async getCardMetricsData(cardMetrics: string[]) {
        let cardMetricsValue: string[] = [];
        for (let index = 0; index < cardMetrics.length; index++) {
            const metric = cardMetrics[index];
            let metricValue = await webActions.getElementText(this.getCardValueLocator(metric));
            cardMetricsValue.push(metricValue);
        }
        return cardMetricsValue;
    }

    async getStepName(item: number) {
        let itemText: string[] = [];
        for (let index = 1; index <= item; index++) {
            let xpath = this.getStepNameLocator(index);
            let iteMText = await webActions.getElementText(xpath);
            itemText.push(iteMText);
        }
        return itemText;
    }

    async getClassPropertyOfStepCheckBox(stepNumber: number) {
        let inhertiText = await webActions.getElementAttributeValue(this.StepNameCheckBoxLocator(stepNumber), 'class');
        return inhertiText;
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }

    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }


}