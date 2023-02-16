import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";
import { DefaultDashboardPage } from "./DefaultDashboardPage";
let webActions: WebActions;
let util: Utility

export class TestOverviewDashboard extends DefaultDashboardPage{


    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _testWidgetFirstRowThreeDotMenu = '(//div[@data-automationid="DetailsList"])[1]//div[@data-item-index="0"]//div[contains(@class,"CustomCell_icoMenuCell_")]';
    private _webTestPropertyText = '(//span[text()="Web Test Properties"])[1]';
    private _testNameInTestPropertiesPage = '//label[text()="Name * :"]/..//input';
    private _testWidgetInTestOverviewDB = '//div[contains(@class,"Tiles_container")]';
    private _filterBlade = '//button[text()="Filters"]';
    private _geoFilterLocator = '//div[text()="Geo"]';
    private _filterSearchBox = '//input[@placeholder="Search City, Country"]';
    private _firstSearchedItemCheckBox = '(//div[contains(@class,"fabricIcons_tableCheckMark_")])[2]';
    private _allItemCheckBox = '(//div[contains(@class,"fabricIcons_tableCheckMark_")])[1]'
    private _applyButton = '//button[text()="Apply"]';
    private _tileWidgetTimeFrameDD = '(//button[@type="button"][normalize-space()="Last Hour"])[2]'

    public get tabLocator() {
        return (text: string) => { return `(//span[text()="${text}"])[1]` }
    }
    public get testWidgetThreeDotMenuLocator() {
        return (text: number) => { return `(//div[@data-automation-key="Tests_0"]/..//div[contains(@class,"CustomCell_icoMenuCell_")])[${text}]` };
    }
    public get webTestPropertyTextLocator() {
        return this._webTestPropertyText;
    }
    public get threeDotMenuOptionLocator() {
        return (text: string) => { return `//span[text()="${text}"]` }
    }
    public get tileWidgetTestNameLocator() {
        return (text: number) => { return `(//p[contains(@class,"Tiles_name_")])[${text}]` }
    }
    public get tileWidgetOptionLocator() {
        return (text: string) => { return `//div[contains(text(),'${text}')]` }
    }
    public get getTestNameInTestPropertiesPage(){
        return this._testNameInTestPropertiesPage;
    }
    public get filterLocator(){
        return this._filterBlade;
    }
    public get geoFilterLocator(){
        return this._geoFilterLocator;
    }
    public get filterSearchBoxLocator(){
        return this._filterSearchBox;
    }
    public get allItemSelectCheckBoxLocator(){
        return this._allItemCheckBox;
    }
    public get fisrtItemSelectCheckBoxLocator(){
        return this._firstSearchedItemCheckBox;
    }
    public get applyButtonLocator(){
        return this._applyButton;
    }
    public get testWidgetInTestOverviewDBLocator(){
        return this._testWidgetInTestOverviewDB;
    }
    public get filterValueLocator(){
        return (text:number) =>{ return `(//div[@data-testid="pill-content"])[${text}]`}
    }
    public get selectTileLocator(){
        return(num:number) => { return `(//ul[contains(@class,"Tiles_tiles_")]//li)[${num}]`}
    }
    public get testInTileWidgetLocator() {
        return (text: number) => { return `(//ul[contains(@class,"Tiles_tiles")]//li//p[contains(@class,"Tiles_name_")])[${text}]` }
    }
    public get commonLocator() {
        return (text: string) => { return `//span[text()="${text}"]` }
    }
    public get commoNLocator() {
        return (text: string) => { return `//div[text()="${text}"]` }
    }
    public get tileWidgetTimeFrameDDLocator() {
        return this._tileWidgetTimeFrameDD;
    }
   
    //#endregion

    //#region This region is to have the functions
    async clickOnTab(tabName: string) {
        await webActions.clickElement(this.tabLocator(tabName));
    }
    async hoverAndClickOnTestWidgetThreeDotMenu(rowNum: number, threeDotMenuOption: string) {
        await webActions.hoverOnElement(this.testWidgetThreeDotMenuLocator(rowNum));
        await webActions.clickElement(this.testWidgetThreeDotMenuLocator(rowNum));
        await webActions.clickElement(this.threeDotMenuOptionLocator(threeDotMenuOption));
    }

    async hoverOnTileWidgetTestName(tileNum: number) {
        await webActions.hoverOnElement(this.tileWidgetTestNameLocator(tileNum));
    }

    async clickOnTileWidgetOptions(optionName:string){
        await webActions.clickElement(this.tileWidgetOptionLocator(optionName))
    }
    async getTileWidgetTestName(tileNum: number){
        return await webActions.getElementText(this.tileWidgetTestNameLocator(tileNum));
    }
    async getPropertiesPageTestName(){
        return await webActions.getElementAttributeValue(this._testNameInTestPropertiesPage,'value');
    }
    async clickOnFilter(){
        await webActions.clickElement(this.filterLocator);
    }
    async applyFilterButton(){
        await webActions.clickElement(this.applyButtonLocator);
    }
    async clickOnFirstTile(tileNum:number){
        await webActions.clickElement(this.selectTileLocator(tileNum))
    }
    async selectCityInGeoFilter(cityName:string){
        await webActions.clickElement(this.geoFilterLocator);
        await util.delay(3000);
        await webActions.clickElement(this.filterSearchBoxLocator);
        await webActions.enterElementText(cityName,this.filterSearchBoxLocator);
        await webActions.clickElement(this.filterSearchBoxLocator);
    }
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);
    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    async getFilterValue(valueNum:number){
        return await webActions.getElementText(this.filterValueLocator(valueNum));
    }
    async hoverAndSelectItemFromThreeDotMenuInTileTestWidget(tileNum: number, threeDotMenuItem: string) {
        await webActions.hoverOnElement(this.testInTileWidgetLocator(tileNum))
        await webActions.clickElement(this.commoNLocator(threeDotMenuItem))
    }
    async clickOnTestInTileTestWidget(tileNum: number) {
        await webActions.clickElement(this.testInTileWidgetLocator(tileNum));
    }
    async selectTimeFrameForTileTestWidget(timeframe: string) {
        await webActions.clickElement(this.tileWidgetTimeFrameDDLocator);
        await webActions.clickElement(this.commoNLocator(timeframe))
    }



    //#endregion

}