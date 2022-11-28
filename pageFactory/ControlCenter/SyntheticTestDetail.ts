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
    private _transactionTestScriptEditorField = '//div[@data-mode-id = "transaction"]//div[contains(@class, "monaco-scrollable-element editor-scrollable vs")]'

    public get alertOverrideToogleBtn() {
        return this._alertOverrideToogleBtn;
    }

    public get testNameFiled() {
        return this._testNameField;
    }

    public get labelInputBox() {
        return this._labelInputBox;
    }

    public get targetUrlInput() {
        return this._targetUrlInput;
    }

    public get startDateValue() {
        return this._startDate;
    }

    public get endDateValue() {
        return this._endDate;
    }

    public get getTestName() {
        return this._testNameField;
    }

    public get changeLog() {
        return this._chnageLogInTestDetailBlade;
    }

    public get targetAndScheduleSection() {
        return this._targetAndScheduleSection;
    }

    public get transactionTestScriptEditorField(){
        return this._transactionTestScriptEditorField;
    }

    public get overrideButtonInTargetAndSchedule() {
        return this._overrideForTargetAndSchedulPage;
    }

    public get enterValueForSubSetOfNode() {
        return this._subSetOfNodeValueBox;
    }

    public get subSetOfNode() {
        return this._subSetOfNode;
    }

    public get subSetNodeTextBox() {
        return this._subSetOfNodeValueBox;
    }

    public get addNodeFileld() {
        return this._addNodeField;
    }

    public get changeLogRunOn() {
        return this._changeLogRunOn;
    }

    public get changeLogRunOnValue() {
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
        await webActions.enterElementText(this.testNameFiled, testName);
        await webActions.enterElementText(this.labelInputBox, labelKey);
        await webActions.onlyKeyPress('Enter');
        await webActions.enterElementText(this.labelInputBox, labelValue);
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

    async createWebChromeTests(prodName: string, testName: string, url: string) {
        await this.clickOnSearchedItemInCC(prodName);
        await this.goToNewWebChromeTestCreate();
        await webActions.enterElementText(this.testNameFiled, testName);
        await webActions.enterElementText(this.targetUrlInput, url);
    }

    async createTestWithEndDate(prodName: string, testName: string, url: string, endDate: string) {
        await this.createWebChromeTests(prodName, testName, url);
        await webActions.enterElementText(this.endDateValue, endDate);
    }

    async fetchStartDate() {
        let startdate = await webActions.getElementAttributeValue(this.startDateValue, 'value');
        return startdate;
    }

    async fetchEndDate() {
        let enddate = await webActions.getElementAttributeValue(this.endDateValue, 'value');
        return enddate;
    }
    async fetchInheritProperty() {
        let startdate = await webActions.getElementAttributeValue(this.startDateValue, 'value');
        return startdate;
    }

    async getClassPropertyOfInheritedCheckBox(index: number) {
        let xpath = '(//label[contains(@class,"ms-ChoiceField-field is-checked field")])[' + index + ']';
        await util.delay(2000);
        let inhertiText = await webActions.getElementAttributeValue(xpath, 'class');
        return inhertiText;
    }

    async fetchTestName() {
        let testName = await webActions.getElementAttributeValue(this.getTestName, 'value');
        return testName;
    }

    async targetScheduleSection() {
        await webActions.clickElement(this._targetAndScheduleSection);
    }

    async clickOverrideButtonForTargetAndSchedul() {
        await webActions.clickElement(this._overrideForTargetAndSchedulPage);
    }

    async clickOnSubSetOfNode() {
        await webActions.clickElement(this.subSetOfNode);
    }

    async clickOnSubsetOfNodeInputBox() {
        await webActions.clickElement(this.subSetNodeTextBox);
    }

    async clearOnSubsetOfNodeInputBox() {
        await webActions.clearTextField(this.subSetNodeTextBox);
    }

    async enterValueInSubsetOfNodeInputBox(value: string) {
        await webActions.enterElementText(this.subSetNodeTextBox, value);
    }

    async addNodesInTest(nodeName: string[]) {
        for (let index = 0; index < nodeName.length; index++) {
            const element = nodeName[index];
            await webActions.enterElementText(this.addNodeFileld, element);
            await webActions.keyPress(this.addNodeFileld, "Enter");
            await webActions.clickElement(this.saveButtonLoctor);

        }

    }

    async addNode(nodeName: string) {
        await webActions.enterElementText(this.addNodeFileld, nodeName);
        await webActions.keyPress(this.addNodeFileld, "Enter");
        await webActions.clickElement(this.saveButtonLoctor);

    }






    //#endregion
}