import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { Utility } from "@util/Utility";
let webActions: WebActions;
let util: Utility

export class TestOverviewDashboard {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        webActions = new WebActions(this.page);
        util = new Utility();
    }

    //#region This region is for getter

    private _testWidgetFirstRowThreeDotMenu = '(//div[@data-automationid="DetailsList"])[1]//div[@data-item-index="0"]//div[contains(@class,"CustomCell_icoMenuCell_")]';
    private _webTestPropertyText = '(//span[text()="Web Test Properties"])[1]';
    private _testNameInTestPropertiesPage = '//label[text()="Name * :"]/..//input';


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



    //#endregion

}