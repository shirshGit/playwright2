import { WebActions } from "@lib/WebActions";
import { SyntheticDetailPage } from "@pageobjects/ControlCenter/SyntheticDetailsPage";
import { Page } from "playwright";


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


    //#endregion
}