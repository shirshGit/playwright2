import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class NodeToNodeSmartboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _zoneDropDown = '//span[contains(@class,"DatePickerSectionstyles__StyledTimezone")]//i/div';
    private _latency = '//div[text()="Latency"]';
    private _jitter = '//div[text()="Jitter"]';
    private _pktLoss = '//div[text()="Packet Loss"]';
    private _selectedItemInMetricsDD = '//span[contains(@class,"MatrixHeaderstyled__")]//span[text()="Packet Loss"]';
    private _jitterInMetricsDD = '//div[contains(@class,"dropdownItemsWrapper")]//span[text()="Jitter"]';
    private _latencyInMetricsDD = '//div[contains(@class,"dropdownItemsWrapper")]//span[text()="Latency"]';
    private _pktLossMetricsDD = '//div[contains(@class,"dropdownItemsWrapper")]//span[text()="Packet Loss"]';
    private _pktLossJitterLatencyMetricsDD = '//div[contains(@class,"dropdownItemsWrapper")]//span[text()="% Packet Loss, Latency, Jitter"]';
    private _metricsDD = '(//div[@id="chevron-down-icon"])[1]';
    private _selectedNodeInMetricsSection = '//div[contains(@class,"Gridstyles__Row-")]';
    private _legendDDSelectedItem = '//label[text()="Metric"]/..//span[text()="% Packet Loss"]';
    private _pktLossInLegendMetricsDD = '//div[contains(@class,"dropdownItemsWrapper-")]//span[text()="% Packet Loss"]';
    private _jitterInLegendMetricsDD = '//div[contains(@class,"dropdownItemsWrapper-")]//span[text()="Latency (ms)"]';
    private _latencyInLegendMetricsDD = '//div[contains(@class,"dropdownItemsWrapper-")]//span[text()="Jitter (ms)"]';
    private _legendMetricsDD = '(//div[@id="chevron-down-icon"])[2]';
    private _recordsCompareButton = '//span[text()="Records Compare"]';
    private _firstWidgetFromNode = '(//label[text()="From"])[1]/../..//div[2]//label';
    private _fristWidgetToNode = '(//label[text()="To"])[1]/../..//div[2]//label';
    private _secondWidgetFromNode = '(//label[text()="From"])[2]/../..//div[2]//label';
    private _secondWidgetToNode = '(//label[text()="To"])[2]/../..//div[2]//label';
    private _firstWidgetFrom = '(//label[text()="From"])[1]';
    private _fristWidgetTo = '(//label[text()="To"])[1]';
    private _SecondWidgetFrom = '(//label[text()="From"])[2]';
    private _SecondWidgetTo = '(//label[text()="To"])[2]';
    private _firstRecordSheduleTimeInFirstWgt = '(//div[@data-automation-key="Schedule Time_0"])[1]//div';
    private _firstRecordSheduleTimeInSecondWgt = '((//div[@data-selection-index="0"])[3]//div[@data-automation-key="Schedule Time_0"]//div)[1]';
    private _recordSheduleTimeFirstWgt = '(//label[@data-testid="selected-label"])[1]';
    private _recordSheduleTimeSecondWgt = '(//label[@data-testid="selected-label"])[2]';

    public get firstRecordSheduleTimeInFirstWgtLocator(){
        return this._firstRecordSheduleTimeInFirstWgt;
    }
    public get firstRecordSheduleTimeInSecondWgtLocator(){
        return this._firstRecordSheduleTimeInSecondWgt;
    }
    public get recordSheduleTimeFirstWgtLocator(){
        return this._recordSheduleTimeFirstWgt;
    }
    public get recordSheduleTimeSecondWgtLocator(){
        return this._recordSheduleTimeSecondWgt;
    }

    public get firstWidgetFromNodeLocator(){
        return this._firstWidgetFromNode;
    }
    public get secondWidgetFromNodeLocator(){
        return this._secondWidgetFromNode;
    }
    public get secondWidgetToNodeLocator(){
        return this._secondWidgetToNode;
    }
    public get fristWidgetToNodeLocator(){
        return this._fristWidgetToNode;
    }
    public get firstWidgetFromLocator(){
        return this._firstWidgetFrom;
    }
    public get fristWidgetToLocator(){
        return this._fristWidgetTo;
    }
    public get SecondWidgetFromLocator(){
        return this._SecondWidgetFrom;
    }
    public get SecondWidgetToLocator(){
        return this._SecondWidgetTo;
    }
    public get recordsCompareButtonLocator(){
        return this._recordsCompareButton;
    }
    public get legendMetricsDDLocator(){
        return this._legendMetricsDD;
    }
    public get pktLossInLegendMetricsDDLocator(){
        return this._pktLossInLegendMetricsDD;
    }
    public get jitterInLegendMetricsDDLocator(){
        return this._jitterInLegendMetricsDD;
    }
    public get latencyInLegendMetricsDDLocator(){
        return this._latencyInLegendMetricsDD;
    }
    public get selectedItemInMetricsDDLocator(){
        return this._selectedItemInMetricsDD;
    }
    public get legendDDSelectedItemLocator(){
        return this._legendDDSelectedItem;
    }

    private get selectedNodeInMetricsSectionLocator(){
        return this._selectedNodeInMetricsSection;
    }

    public get zoneDropDownLocator(){
        return this._zoneDropDown;
    }
    public get latencyCardMetricsLocator(){
        return this._latency;
    }
    public get jitterCardMetricsLocator(){
        return this._jitter;
    }
    public get pktLossCardMetricsLocator(){
        return this._pktLoss;
    }
    public get latencyInMetricsDDLocator(){
        return this._latencyInMetricsDD;
    }
    public get jitterInMetricsDDLocator(){
        return this._jitterInMetricsDD;
    }
    public get pktLossInMetricsDDLocator(){
        return this._pktLossMetricsDD;
    }
    public get pktLossLatencyJitterInMetricsDDLocator(){
        return this._pktLossJitterLatencyMetricsDD;
    }
    public get metricsDDLocator(){
        return this._metricsDD;
    }

    public get zoneNameLocator(){
        return (text:string) => {return `//span[contains(text(),"${text}")]`}
    }

    public get timingTabMetricsValueLocator() {
        return (text: string) => { return `//td[text()="${text}"]/..//td[2]` };
    }

   
   
    //#endregion
    
    async fetchElementText(loc : string){
        return await webActions.getElementText(loc);
    }

    async clickOnTimeZoneDropDown(){
        await webActions.clickElement(this.zoneDropDownLocator);
    }

    async getSelectedNodeCountInMetricsSection(){
        let rowCount = await this.page.locator(this.selectedNodeInMetricsSectionLocator).count();
        return rowCount;
    }

    async clickOnMetricsDropDown(){
        await webActions.clickElement(this.metricsDDLocator);
    }

    async clickOnLegendMetricsDropDown(){
        await webActions.clickElement(this.legendMetricsDDLocator);
    }

    async getTimeZoneName(nameList : string[]){
        let zoneName = [];
        for (let index = 0; index < nameList.length; index++) {
            const element = nameList[index];
            let name = await webActions.getElementText(this.zoneNameLocator(element));
            zoneName.push(name);
        }
        return zoneName;
        
    }

    async clickOnRecordsCompareButton(){
        await webActions.clickElement(this.recordsCompareButtonLocator);
    }

   

   
   
    

    
}