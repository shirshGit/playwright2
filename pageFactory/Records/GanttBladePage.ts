import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { BrowserContext, Page } from "playwright";

let webActions: WebActions;
let util: Utility

export class GanttBladePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _responseText = '(//iframe[@data-testid="iframedisplay-iframe"])[2]';
    private _timingTabStartMetrics = '//td[text()="Start"]';
    private _timingTabEndMetrics = '//td[text()="End"]';
    private _timingTabBlockedMetrics = '//td[text()="Blocked"]';
    private _timingTabDNSMetrics = '//td[text()="DNS"]';
    private _timingTabConnectMetrics = '//td[text()="Connect"]';
    private _timingTabSSLMetrics = '//td[text()="SSL"]';
    private _timingTabSendMetrics = '//td[text()="Send"]';
    private _timingTabWaitMetrics = '//td[text()="Wait"]';
    private _timingTabLoadMetrics = '//td[text()="Load"]';
    private _timingTabResponseMetrics = '//td[text()="Response"]';
    private _ganttBladeCrossIcon = '//button[@data-testid="close-overlay"]';
    private _errorTextInGeneralTab = '//td[text()="Error"]';
    private  _warningTextInGeneralTab = '//td[text()="Warning"]';

    public get tabLocator() {
        return (text: string) => { return `//li[text()="${text}"]` };

    }

    public get responseTextLocator() {
        return this._responseText;
    }

    public get timingTabStartMetricsLocator() {
        return this._timingTabStartMetrics;
    }
    
    public get timingTabEndMetricsLocator() {
        return this._timingTabEndMetrics;
    }

    public get timingTabBlockedMetricsLocator() {
        return this._timingTabBlockedMetrics;
    }

    public get timingTabConnectMetricsLocator() {
        return this._timingTabConnectMetrics;
    }

    public get timingTabDNSMetricsLocator() {
        return this._timingTabDNSMetrics;
    }

    public get timingTabLoadMetricsLocator() {
        return this._timingTabLoadMetrics;
    }

    public get timingTabResponseMetricsLocator() {
        return this._timingTabResponseMetrics;
    }

    public get timingTabSSLMetricsLocator() {
        return this._timingTabSSLMetrics;
    }

    public get timingTabSendMetricsLocator() {
        return this._timingTabSendMetrics;
    }

    public get timingTabWaitMetricsLocator() {
        return this._timingTabWaitMetrics;
    }

    public get ganttTabCrossIconLocator(){
        return this._ganttBladeCrossIcon;
    }

    public get errorTextInGeneralTabLocator() {
        return this._errorTextInGeneralTab
    }

    public get warningTextInGeneralTabLocator() {
        return this._warningTextInGeneralTab
    }


    //#endregion

    async clickTab(tabName: string) {
        await webActions.clickElement(this.tabLocator(tabName));
    }

    async clickOnGanttBladeCrossIcon(){
        await webActions.clickElement(this.ganttTabCrossIconLocator);
        
    }

   
}