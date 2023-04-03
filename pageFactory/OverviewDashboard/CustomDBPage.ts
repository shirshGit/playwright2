import { WebActions } from "@lib/WebActions";
import { BrowserContext, Page } from "@playwright/test";
import { Utility } from "@util/Utility";
import { SynWidgetPropertyPage } from "./SynWidgetPropertyPage";
let webActions: WebActions;
let util: Utility

export class CustomDBPage extends SynWidgetPropertyPage{
    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _overviewDashboard = '//label[text()="Overview Dashboard"]';
    private _newDBCreateIcon = '//span[contains(text(),"New Dashboard")]'
    private _addWidget = '//span[contains(text(),"+ Add Widget")]'
    private _sourceSelectorDD = '//i[@data-icon-name="comboBox"]//div'
    private _dbNameBox = '//input[contains(@class,"TextBox_")]';
    private _saveDBButton = '//span[text()="Save"]';
    private _threeDotMenu = '//span[@data-testid="tile-name"]/..//span[2]//button//i[contains(@class,"ms-Icon-placeHolder")]';
    private _tileHeader = '(//div[contains(@class,"GaugeTilestyles__TileHeader-")])[1]';
    private _dbName = '(//span[@data-automationid="splitbuttonprimary"]//span[contains(@class,"ms-Button-textContainer")])[1]'
    
    
    public get overviewDashboardLocator(){
        return this._overviewDashboard;
    }

    public get dashboardLocator(){
        return (text: string) => { return `//span[text()="${text}"]`};
    }
    public get newDBCreateIconLocator(){
        return this._newDBCreateIcon
    }
    public get addWidgetLocator(){
        return this._addWidget
    }
    public get sourceSelectorDDLocator(){
        return this._sourceSelectorDD
    }
    public get sourceDDOptionLocator(){
        return (text1:string, text2:string) => { return `//span[text()="${text1}"]/../following-sibling::button[@title="${text2}"]`}
    }
    public get commomLocator(){
        return (text:string) => { return `//span[text()="${text}"]`}
    }
    public get dbNameBoxLocator(){
        return this._dbNameBox
    }
    public get savedbButtonLocator(){
        return this._saveDBButton
    }
    public get tileLocator(){
        return (text:number) => { return `(//span[@data-testid="tile-name"])[${text}]`}
    }
    public get threeDotMenuLocator(){
        return this._threeDotMenu
    }
    public get tileHeaderLocator(){
        return this._tileHeader
    }
    public get threeDotMenuOptionLocator(){
        return (text:string) => { return `//span[normalize-space()='${text}']`}
    }
    public get tableWidgetRowLocator(){
        return (text:number) => { return `//div[@data-testid="table_row"]//a[@tabindex="${text}"]`}
    }
    public get getDBNameLocator(){
        return this._dbName
    }

  
    //#endregion

    //#region This region is to have the functions
    async enterDBName(dbName){
        await webActions.clearTextByBtnPress(this.dbNameBoxLocator);
        await webActions.clickElement(this.dbNameBoxLocator)
        await webActions.enterElementText(this.dbNameBoxLocator,dbName)
    }
    async navigateToCreateDB(dbName){
        await webActions.clickElement(this.newDBCreateIconLocator)
        await this.enterDBName(dbName)
        await webActions.clickElement(this.addWidgetLocator)
    }
    async clickTileWidge(tileNum: number) {
        await webActions.clickElement(this.tileLocator(tileNum))
    }
    async saveDB(){
        await webActions.clickElement(this.savedbButtonLocator)
    }
    async selectSourceFromSourceDD(endpointName: string, endpointOption: string) {
        await webActions.clickElement(this.sourceSelectorDDLocator)
        await webActions.clickElement(this.sourceDDOptionLocator(endpointName, endpointOption))
    }
    async selectVizualization(vizName: string) {
        await webActions.clickElement(this.commomLocator(vizName))
    }
    async SelectSourceAndVizualization(endpointName: string, endpointOption: string, vizName: string) {
        await this.selectSourceFromSourceDD(endpointName, endpointOption)
        await this.selectVizualization(vizName)
        await webActions.clickElement(this.commomLocator('Continue'));
    }
    async createTileWidget(widgetName: string, widgetDiscription: string, division:string=null, dataFilterName: string = null, otherFilter:string = null,otherFilterOptions:string[]=null,metrics: string[], defaultTimeFrame: string = null, otherTimeFrame: string = null) {
        await this.fillBasicProperties(widgetName,widgetDiscription)
        await this.selectFilters(dataFilterName,otherFilter,otherFilterOptions)
        await this.selectMetrics(metrics)
        await this.selectDefaultTimeFrame(defaultTimeFrame)
        await this.selectOtherTimeFrame(otherTimeFrame)
        await webActions.clickElement(this.saveWidgetLocator)
    }
    async createTableWidget(widgetName: string, widgetDiscription: string, division:string=null, dataFilterName: string = null, otherFilter:string = null,otherFilterOptions:string[]=null,dimension: string[] ,metrics: string[], defaultTimeFrame: string = null, otherTimeFrame: string = null) {
        await this.fillBasicProperties(widgetName,widgetDiscription)
        await this.selectFilters(dataFilterName,otherFilter,otherFilterOptions)
        await this.selectDimension(dimension)
        await this.selectMetrics(metrics)
        await this.selectDefaultTimeFrame(defaultTimeFrame)
        await this.selectOtherTimeFrame(otherTimeFrame)
        await webActions.clickElement(this.saveWidgetLocator)
    }
    async createSLAWidget(widgetName: string, widgetDiscription: string, division:string=null, dataFilterName: string = null, otherFilter:string = null,otherFilterOptions:string[]=null,dimension: string[] ,metrics: string[], defaultTimeFrame: string = null, otherTimeFrame: string = null) {
        await this.fillBasicProperties(widgetName,widgetDiscription)
        await this.selectFilters(dataFilterName,otherFilter,otherFilterOptions)
        await this.selectMetrics(metrics)
        await this.selectOtherTimeFrame(otherTimeFrame)
        await webActions.clickElement(this.saveWidgetLocator)
    }
    async navigateByThreeDotMenu(option:string){
        await webActions.hoverOnElement(this.tileHeaderLocator);
        await webActions.clickElement(this.threeDotMenuLocator);
        await webActions.clickElement(this.threeDotMenuOptionLocator(option))
    }
    async clickTableWidgeRow(rowNum: number) {
        await webActions.clickElement(this.tableWidgetRowLocator(rowNum))
    }
    async click(loc:string){
        await webActions.clickElement(loc)
    }
    async getElementText(locator:string){
        let text = await webActions.getElementText(locator)
        return text
    }
    async getNewWindow(context: BrowserContext, locator: string) {
        return await webActions.newWindowHandle(context, locator);

    }
    async getUrl() {
        return await webActions.getCurrentPageUrl();
    }
    
   


    //#endregion

}