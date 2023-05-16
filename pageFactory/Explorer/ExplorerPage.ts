import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";

let webActions: WebActions;
let util: Utility

export class ExplorerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _errorTab = '//li[@data-testid="Errors"]';
    private _firstThreeDotMenuInErrorTab = '(//div[@data-testid="table_row"]//span[@data-automationid="splitbuttonprimary"])[1]//i';
    private _recordsInThreeDotMenuInErrorTab = '//i[@data-icon-name="waterfall"]/..//span[text()="Records"]';
    private _summeryTab = '//li[@data-testid="Summary Table"]';
    private _testInSourceSelector = '//div[@data-testid="custom-picker-pill-container"]//span';
    private _errorTabFirstRowTestName = '//div[@data-selection-index="0"]//div[@data-automation-key="Test_0"]//span';
    private _getTestNameFromSourceSelector = '//div[contains(@class,"Legend_name_")]'
    private _tableVizThreeDotMenuSB = '//i[@data-icon-name="smartboardBlue"]/..//span[text()="Smartboard"]'
    private _getStarDate = '(//div[text()="From"]/..//input)[1]'
    private _getEndDate = '(//div[text()="To"]/..//input)[1]'
    private _getStarTime = '(//div[text()="From"]/..//input)[2]'
    private _getEndTime = '(//div[text()="To"]/..//input)[2]'
    private _filterNameLocator = '//div[contains(@class,"FilterPillsContainer_container_")]'
    private _filterValueLocator =  '//div[contains(@class,"FilterPillsContainer_valueText_")]'
    private _sourceTab = '//button[text()="Source"]'

    public get errorTabLocator() {
        return this._errorTab;
    }
    public get firstThreeDotInErrorTabLocator() {
        return this._firstThreeDotMenuInErrorTab;
    }
    public get recordInThreeDotMenuInErrorTabLocator() {
        return this._recordsInThreeDotMenuInErrorTab;
    }
    public get errorTabRowWiseTimeLocator() {
        return (text: number) => { return `//div[@data-item-index="${text}"]//div[@aria-colindex="3"]//div` };
    }
    public get summaryTabLocator() {
        return this._summeryTab;
    }
    public get testInSourceSelectorLocator() {
        return this._testInSourceSelector;
    }
    public get errorTabFirstRowTestName(){
        return this._errorTabFirstRowTestName
    }
    public get vizualizationLocator(){
        return (text:string) => { return `//div[contains(@class,"ExplorerVisualization_")]//div[@title="${text}"]`}
    }
    public get tableVizThreeDotMenuLocator(){
        return (text:number) => { return `//div[@data-list-index="${text}"]//button//i`};
    }
    public get commonLocator(){
        return (text:string) => { return `//span[text()="${text}"]`}
    }
    
    public get gettestNameFromSourceSelectorBoxLocator(){
        return this._getTestNameFromSourceSelector
    }
    public get tableVizThreeDotMenuSB(){
        return this._tableVizThreeDotMenuSB
    }
    
    public get selectedFilterValueLocator(){
        return (text:string) => { return `//div[@title="${text}"]`}
    }
    public get selectedFilterNameLocator(){
        return (text:string) => { return `//div[contains(@class,"Pill_pillContent_")]//div[contains(text(),"${text}")]`}
    }
    public get selectedTimeFrameLocator(){
        return (text:string) => { return `//input[@value="${text}"]`};
    }
    public get getStartDateLocator(){
        return this._getStarDate
    }
    public get getEndDateLocator(){
        return this._getEndDate
    }
    public get getStartTimeLocator(){
        return this._getStarTime
    }
    public get getEndTimeLocator(){
        return this._getEndTime
    }
    public get filterNameLocator() {
        return this._filterNameLocator;
    }
    public get filterValueLocator() {
        return this._filterValueLocator;
    }
    public get sourceTabLocator() {
        return this._sourceTab;
    }
    public get tabInSourceSelectorPagelocator(){
        return(text:string) => { return `//button[@name="${text}"]`}
    }





    //#endregion

    async clickOnErrorTab() {
        await webActions.clickElement(this.errorTabLocator);
    }
    async clickOnFirstRowThreeDotMenu() {
        await util.delay(3000);
        await webActions.hoverOnElement(this.firstThreeDotInErrorTabLocator);
        await webActions.clickElement(this.firstThreeDotInErrorTabLocator);
    }
    async getRowWiseTimeFromErrorTab(rowNum: number) {
        let time = await webActions.getElementText(this.errorTabRowWiseTimeLocator(rowNum));
        return time;
    }

    async clickOnSummaryTab() {
        await webActions.clickElement(this.summaryTabLocator);
    }

    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }

    async clickOnErrorTabFirstRowTestName(){
        return await webActions.clickElement(this.errorTabFirstRowTestName);
    }
    async selectVizualization(vizName:string){
        return await webActions.clickElement(this.vizualizationLocator(vizName))
    }
    async clickOnThreeDotMenuForTableViz(rowNum:number) {
        await util.delay(3000);
        await webActions.hoverOnElement(this.tableVizThreeDotMenuLocator(rowNum));
        await webActions.clickElement(this.tableVizThreeDotMenuLocator(rowNum));
    }
    async selectItemFormThreeDotMenu(itemName:string){
        await webActions.clickElement(this.commonLocator(itemName))
    }
    async click(loc:string){
        await webActions.clickElement(loc)
    }
    async getElementText(locator:string){
        let text = await webActions.getElementText(locator)
        return text
    }

    async getTestNameFromSourceSelector(itemName:string){
        return await webActions.getElementText(this.commonLocator(itemName))
    }
    async getDateTimeValue(locator:string){
        return await webActions.getElementAttributeValue(locator,'value')
    }
    async getTextOfElement(locator:string){
        return await webActions.getElementText(locator)
    }
    async getValue(array:string[]){
        let values:string[] = [];
        for (let index = 0; index < array.length; index++) {
            let text =  await webActions.getElementText(this.commonLocator(array[index]))
            values.push(text);
        }
        return values;
    }
    async clickOnSourceTab(){
        return await webActions.clickElement(this.sourceTabLocator);
    }
    async getAttributeProperty(locator:string,attributeName:string){
        return await webActions.getElementAttributeValue(locator,attributeName)
    }
}