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
    private _recordsInThreeDotMenuInErrorTab = '//span[normalize-space()="Records"]';
    private _summeryTab = '//li[@data-testid="Summary Table"]';
    private _testInSourceSelector = '//div[@data-testid="custom-picker-pill-container"]//span';
    private _errorTabFirstRowTestName = '//div[@data-selection-index="0"]//div[@data-automation-key="Test_0"]//span';
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

}