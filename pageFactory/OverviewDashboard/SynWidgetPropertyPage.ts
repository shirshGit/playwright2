import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";
let webActions: WebActions;
let util: Utility

export class SynWidgetPropertyPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    
    private _searchBox = '//label[contains(text(),"Name:")]/..//input';
    private _descriptionBox = '//label[contains(text(),"Description")]/..//input';
    private _divisionDD = '//label[contains(text(),"Division:")]/..//i/div';
    private _testFilter = '(//span[text()="Test"])[2]';
    private _otherFilterDDLocator = '//div[contains(@class,"fabricIcons_comboBox_")]';
    private _otherFilterInputBox = '(//div[contains(@class,"ms-BasePicker-text text-")]//input)[1]';
    private _dimensionInputBox = '//label[contains(text(),"Dimensions:")]/../..//input';
    private _metricsInputBox = '//label[contains(text(),"Metrics:")]/../..//input';
    private _defaultTimeFrameDD = '//label[contains(text(),"Default Timeframe:")]/..//i[@data-icon-name="chevrondown"]';
    private _otherTimeFrameToggleButton = '//label[contains(text(),"Other Timeframes:")]/..//button';
    private _otherTimeFrameDD = '//label[contains(text(),"Timeframes")]/..//i/div';
    private _saveWidgetButton = '(//span[text()="Save"])[2]';
    private _timeframeDDForSLA = '(//div[@data-testid="chevron-down-icon"])[3]'
    
    
    public get sourceDDOptionLocator() {
        return (text1: string, text2: string) => { return `//span[text()="${text1}"]/../following-sibling::button[@title="${text2}"]` }
    }
    public get commomLocator() {
        return (text: string) => { return `//span[text()="${text}"]` }
    }
    public get testFilterLocator() {
        return this._testFilter;
    }
    public get nameInputBoxLocator() {
        return this._searchBox;
    }
    public get descriptionInputLocator() {
        return this._descriptionBox;
    }
    public get divisionDDLocator() {
        return this._divisionDD;
    }
    public get othersFilterDDLocator() {
        return (text: number) => { return `(//i[@data-icon-name="comboBox"])[${text}]` }
    }
    public get othersFilterInputBoxLocator() {
        return (text: number) => { return `(//div[contains(@class,"ms-BasePicker-text text-")])[${text}]` }
    }
    public get otherFilterDDLocator() {
        return this._otherFilterDDLocator;
    }
    public get otherFilterInputBoxLocator() {
        return this._otherFilterInputBox
    }
    public get dimensionInputBoxLocator() {
        return this._dimensionInputBox;
    }
    public get metricsInputBoxLocator() {
        return this._metricsInputBox;
    }
    public get defaultTimeFrameDDLocator() {
        return this._defaultTimeFrameDD;
    }
    public get otherTimeFrameToggleButtonLocator() {
        return this._otherTimeFrameToggleButton;
    }
    public get otherTimeFrameDDLocator() {
        return this._otherTimeFrameDD;
    }
    public get saveWidgetLocator() {
        return this._saveWidgetButton;
    }
    public get timeframeDDForSLA(){
        return this._timeframeDDForSLA
    }
    //#endregion

    
    async fillBasicProperties(widgetName: string, widgetDiscription: string, division: string = null) {
        await webActions.clickElement(this.nameInputBoxLocator);
        await webActions.enterElementText(this.nameInputBoxLocator,widgetName);
        await webActions.clickElement(this.descriptionInputLocator);
        await webActions.enterElementText(this.descriptionInputLocator,widgetDiscription);
        if(division !== null){
            await webActions.clickElement(this.divisionDDLocator);
            await webActions.clickElement(this.commomLocator(division));
        }
    }
    async selectFilters(dataFilterName:string = null,otherFilterName: string = null, otherFilterOption:string[] = null) {
        await this.selectDataFilter(dataFilterName)
        await this.selectOtherFilter(otherFilterName,otherFilterOption)
    }
    async selectDataFilter(dataFilterName:string = null){
        if (dataFilterName !== null) {
            if (dataFilterName = 'Test') {
                await webActions.clickElement(this.testFilterLocator);
            }
            else {
                await webActions.clickElement(this.commomLocator(dataFilterName));
            }
        }
    }
    async selectOtherFilter(otherFilterName: string = null, otherFilterOption:string[] = null){
        if (otherFilterName !== null) {
            await webActions.clickElement(this.otherFilterDDLocator);
            await webActions.clickElement(this.commomLocator(otherFilterName));
            for (let index = 0; index < otherFilterOption.length; index++) {
                await webActions.clickElement(this.otherFilterInputBoxLocator);
                await webActions.enterElementText(this.otherFilterInputBoxLocator,otherFilterOption[index])
                await webActions.onlyKeyPress('Enter');
            }
        }
    }
    async selectDimension(dimensions: string[]) {
        for (let index = 0; index < dimensions.length; index++) {
            await webActions.clickElement(this.dimensionInputBoxLocator);
            await webActions.enterElementText(this.descriptionInputLocator,dimensions[index])
            await webActions.onlyKeyPress('Enter');
            await webActions.onlyKeyPress('Enter');
        }
    }
    async selectMetrics(metrics: string[]) {
        for (let index = 0; index < metrics.length; index++) {
            await webActions.clickElement(this.metricsInputBoxLocator);
            await webActions.enterElementText(this.metricsInputBoxLocator,metrics[index])
            await webActions.onlyKeyPress('Enter');
        }
    }
    async selectDefaultTimeFrame(defaultTimeFrame:string= null) {
        if(defaultTimeFrame !== null){
        await webActions.clickElement(this.defaultTimeFrameDDLocator);
        await webActions.clickElement(this.commomLocator(defaultTimeFrame));
        }

    }
    async selectOtherTimeFrame(otherTimeFrame: string = null) {
        if(otherTimeFrame !== null){
        await webActions.clickElement(this.otherTimeFrameToggleButtonLocator);
        await webActions.clickElement(this.otherTimeFrameDDLocator);
        await webActions.clickElement(this.commomLocator(otherTimeFrame));
        }
    }

    async selectTimeFrameForSLA(timeFrame: string) {
       await webActions.clickElement(this.timeframeDDForSLA);
       await webActions.clickElement(this.commomLocator(timeFrame));
      
    }
    

}