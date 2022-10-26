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
    private _startDate = '//div[@data-testid="datepicker"]/div[1]/input[@data-testid="date-input"]';
    private _endDate = '(//div[@data-testid="datepicker"]//input)[3]';
    private _chnageLogInTestDetailBlade = '//span[text()="Change Log"]';
    private _targetAndScheduleSection = '//div[@id="#targeting_and_scheduling"]//span[text()="Targeting & Scheduling"]';
    private _overrideForTargetAndSchedulPage = '//div[@id="#targeting_and_scheduling"]//span[text()="Override"]';
    private _subSetOfNode = '//span[text()="Subset of nodes"]/..';
    private _subSetOfNodeValueBox = '//input[@id="text-field"]';
    private _addNodeField = '//input[contains(@placeholder ,"Add Node")]';
    private _changeLogRunOn = '//td[text()="Run On"]';
    private _changeLogRunOnValue = '//td[text()="Run On"]//following-sibling::td[1]';

    public get alertOverrideToogleBtnLocator() {
        return this._alertOverrideToogleBtn;
    }

    public get testNameFiledLocator() {
        return this._testNameField;
    }

    public get labelInputBoxLocator() {
        return this._labelInputBox;
    }

    public get targetUrlInputLocator() {
        return this._targetUrlInput;
    }

    public get startDateValueLocator() {
        return this._startDate;
    }

    public get endDateValueLocator() {
        return this._endDate;
    }

    public get getTestNameLocator() {
        return this._testNameField;
    }

    public get changeLogLocator() {
        return this._chnageLogInTestDetailBlade;
    }

    public get targetAndScheduleSectionLocator() {
        return this._targetAndScheduleSection;
    }

    public get overrideButtonInTargetAndScheduleLocator() {
        return this._overrideForTargetAndSchedulPage;
    }

    public get enterValueForSubSetOfNodeLocator() {
        return this._subSetOfNodeValueBox;
    }

    public get subSetOfNodeLocator() {
        return this._subSetOfNode;
    }

    public get subSetNodeTextBoxLocator() {
        return this._subSetOfNodeValueBox;
    }

    public get addNodeFileldLocator() {
        return this._addNodeField;
    }

    public get changeLogRunOnLocator() {
        return this._changeLogRunOn;
    }

    public get changeLogRunOnValueLocator() {
        return this._changeLogRunOnValue;
    }





    //#endregion

    //#region This region is to have the functions

    async createWebChromeTest() {
        await this.goToNewWebChromeTestCreate();
    }


    async createWebChromeTestInAProdWithLabels(prodName: string, testName: string, labelKey: string, labelValue: string) {
        await this.clickOnSearchedItemInCC(prodName);
        await this.goToNewWebChromeTestCreate();
        await webActions.enterElementText(this.testNameFiledLocator, testName);
        await webActions.enterElementText(this.labelInputBoxLocator, labelKey);
        await webActions.onlyKeyPress('Enter');
        await webActions.enterElementText(this.labelInputBoxLocator, labelValue);
        await webActions.onlyKeyPress('Enter');
        await webActions.enterElementText(this.targetUrlInputLocator, 'https://www.google.com');

    }

    async alertToggleButtonToOverrideAlertSettings() {
        await webActions.waitForElementAttached(this.alertOverrideToogleBtnLocator);
        var toogleBtnCheck = await webActions.getElementAttributeValue(this.alertOverrideToogleBtnLocator, "aria-checked");
        if (toogleBtnCheck === 'true') {
            await webActions.clickElement(this.alertOverrideToogleBtnLocator);
        }
    }

    async alertToggleButtonToInheritAlertSettings() {
        await webActions.waitForElementAttached(this.alertOverrideToogleBtnLocator);
        var toogleBtnCheck = await webActions.getElementAttributeValue(this.alertOverrideToogleBtnLocator, "aria-checked");
        if (toogleBtnCheck === 'false') {
            await webActions.clickElement(this.alertOverrideToogleBtnLocator);
        }
    }

    async createWebChromeTests(prodName: string, testName: string, url: string) {
        await this.clickOnSearchedItemInCC(prodName);
        await this.goToNewWebChromeTestCreate();
        await webActions.enterElementText(this.testNameFiledLocator, testName);
        await webActions.enterElementText(this.targetUrlInputLocator, url);
    }

    async createTestWithEndDate(prodName: string, testName: string, url: string, endDate: string) {
        await this.createWebChromeTests(prodName, testName, url);
        await webActions.enterElementText(this.endDateValueLocator, endDate);
    }

    async fetchStartDate() {
        let startdate = await webActions.getElementAttributeValue(this.startDateValueLocator, 'value');
        return startdate;
    }

    async fetchEndDate() {
        let enddate = await webActions.getElementAttributeValue(this.endDateValueLocator, 'value');
        return enddate;
    }
    async fetchInheritProperty() {
        let startdate = await webActions.getElementAttributeValue(this.startDateValueLocator, 'value');
        return startdate;
    }

    async getClassPropertyOfInheritedCheckBox(index: number) {
        let xpath = '(//label[contains(@class,"ms-ChoiceField-field is-checked field")])[' + index + ']';
        await util.delay(2000);
        let inhertiText = await webActions.getElementAttributeValue(xpath, 'class');
        return inhertiText;
    }

    async fetchTestName() {
        let testName = await webActions.getElementAttributeValue(this.getTestNameLocator, 'value');
        return testName;
    }

    async targetScheduleSection() {
        await webActions.clickElement(this._targetAndScheduleSection);
    }

    async clickOverrideButtonForTargetAndSchedul() {
        await webActions.clickElement(this._overrideForTargetAndSchedulPage);
    }

    async clickOnSubSetOfNode() {
        await webActions.clickElement(this.subSetOfNodeLocator);
    }

    async clickOnSubsetOfNodeInputBox() {
        await webActions.clickElement(this.subSetNodeTextBoxLocator);
    }

    async clearOnSubsetOfNodeInputBox() {
        await webActions.clearTextField(this.subSetNodeTextBoxLocator);
    }

    async enterValueInSubsetOfNodeInputBox(value: string) {
        await webActions.enterElementText(this.subSetNodeTextBoxLocator, value);
    }

    async addNodesInTest(nodeName: string[]) {
        for (let index = 0; index < nodeName.length; index++) {
            const element = nodeName[index];
            await webActions.enterElementText(this.addNodeFileldLocator, element);
            await webActions.keyPress(this.addNodeFileldLocator, "Enter");
        }

    }

   

    //#endregion
}