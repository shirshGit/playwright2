import { WebActions } from "@lib/WebActions";
import { SyntheticDetailPage } from "@pageobjects/ControlCenter/SyntheticDetailsPage";
import { Page } from "playwright";
import { Utility } from "@util/Utility";

let util = new Utility();
let webActions: WebActions;

export class SyntheticTestDetailPage extends SyntheticDetailPage {

    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
    }

    //#region This for properties of Test Detail Page

    private _alertOverrideToogleBtn = '//div[@id = "#alerts"]//button[@id = "toggle"]';
    private _testNameField = '#name-input';
    private _labelInputBox = '//div[@data-testid = "labelautocomplete"]//input';
    private _targetUrlInput = '#target-url-input';
    private  _startDate = '//div[@data-testid="datepicker"]/div[1]/input[@data-testid="date-input"]';
    private _endDate = '(//div[@data-testid="datepicker"]//input)[3]';
    //private _threeDotMenuItem = '//span[text()="Copy"]'

    public get alertOverrideToogleBtn() {
        return this._alertOverrideToogleBtn;
    }

    public get testNameFiled(){
        return this._testNameField;
    }

    public get labelInputBox(){
        return this._labelInputBox;
    }

    public get targetUrlInput(){
        return this._targetUrlInput;
    }

    public get startDateValue(){
        return this._startDate;
    }

    public get endDateValue(){
        return this._endDate;
    }

    public get getTestName(){
        return this._testNameField;
    }


    
    //#endregion

    //#region This region is to have the functions

    async createWebChromeTest() {
        await this.goToNewWebChromeTestCreate();
    }
    
   
    async createWebChromeTestInAProdWithLabels(prodName : string, testName:string, labelKey:string, labelValue:string){
        await this.clickOnSearchedItemInCC(prodName);
        await this.goToNewWebChromeTestCreate();
        await webActions.enterElementText(this.testNameFiled, testName);
        await webActions.enterElementText(this.labelInputBox, labelKey);
        await webActions.onlyKeyPress('Enter');
        await webActions.enterElementText(this.labelInputBox,labelValue);
        await webActions.onlyKeyPress('Enter');
        await webActions.enterElementText(this.targetUrlInput, 'https://www.google.com');

    }

    async alertToggleButtonToOverrideAlertSettings() {
        await webActions.waitForElementAttached(this.alertOverrideToogleBtn);
        var toogleBtnCheck = await webActions.getElementAttributeValue(this.alertOverrideToogleBtn, "aria-checked");
        if (toogleBtnCheck === 'true') {
            await webActions.clickElement(this.alertOverrideToogleBtn);
        }
    }

    async alertToggleButtonToInheritAlertSettings() {
        await webActions.waitForElementAttached(this.alertOverrideToogleBtn);
        var toogleBtnCheck = await webActions.getElementAttributeValue(this.alertOverrideToogleBtn, "aria-checked");
        if (toogleBtnCheck === 'false') {
            await webActions.clickElement(this.alertOverrideToogleBtn);
        }
    }

    async createWebChromeTests(prodName : string,testName : string ,url : string) {
        await this.clickOnSearchedItemInCC(prodName);
        await this.goToNewWebChromeTestCreate();
        await webActions.enterElementText(this.testNameFiled, testName);
        await webActions.enterElementText(this.targetUrlInput, url);
    }

    async createTestWithEndDate(prodName : string,testName : string ,url : string, endDate : string){
        await this.createWebChromeTests(prodName,testName,url);
        await webActions.enterElementText(this.endDateValue, endDate);
    }

    async fetchStartDate() {
      let startdate = await webActions.getElementAttributeValue(this.startDateValue,'value');
      return startdate;
    }

    async fetchEndDate() {
        let enddate = await webActions.getElementAttributeValue(this.endDateValue,'value');
        return enddate;
    }

    //this method will retuen date in the formate "Sep 07, 2022"
    async EndDateAndStartDateForTestDetailPage(addDays : number = null ){
        let date2 = await util.getTodaysDate();
        let date3= date2.setDate(date2.getDate() + addDays); //number  of days to add, e.x. 15 days
        let date4 =await util.getCCTestDetailPageDateFormate(date3);
        return date4;
    }

    async fetchInheritProperty() {
        let startdate = await webActions.getElementAttributeValue(this.startDateValue,'value');
        return startdate;
    }

    async getClassPropertyOfInheritedCheckBox(index : number){
        let xpath = '(//label[contains(@class,"ms-ChoiceField-field is-checked field")])['+index+']';
        await util.delay(2000);
        let inhertiText = await webActions.getElementAttributeValue(xpath,'class');
        return inhertiText;
    }

    async fetchTestName(){
        let testName = await webActions.getElementAttributeValue(this.getTestName,'value');
        return testName;
    }

    

    
   
    //#endregion
}