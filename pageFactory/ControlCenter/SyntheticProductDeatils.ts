import { WebActions } from "@lib/WebActions";
import { Page } from "@playwright/test";
import { SyntheticDetailPage } from "@pageobjects/ControlCenter/SyntheticDetailsPage";

let webActions: WebActions;

/*
     This file is going to have locators and funtionaities specific to Product detail page
*/

export class SyntheticProductDetailPage extends SyntheticDetailPage {

     constructor(page: Page) {
          super(page);
          webActions = new WebActions(this.page);
     }

     //#region This for properties of Product Detail Page

     private _productNameField = '#name-input';
     private _addNodeField = '//input[contains(@placeholder ,"Add Node")]';
     private _testDataWebhookToogleButton = '//button[@id = "test-webhook-toggle"]';
     private _newDataWebhookDropdown = '//span[text() = "New Webhook"]';
     private _getSelectedWebhookText = '//div[@data-testid = "test-webhook-dropdown"]/span/div/span';
     private _addAdvanceSettingsTitle = '//button[@title = "Add Advanced Setting"]';
     


     public get productNameField() {
          return this._productNameField;
     }

     public get commonLocatorForTestDataWebhook() {
          return (text: string) => { return `//span[text()="${text}"]` };
     }

     public get addNodeFileld() {
          return this._addNodeField;
     }

     public get testDataWebhookToogleButton() {
          return this._testDataWebhookToogleButton;
     }

     public get newDataWebhookDropdown() {
          return this._newDataWebhookDropdown;
     }

     public get getSelectedWebhookText() {
          return this._getSelectedWebhookText;
     }

     public get addAdvanceSettingsTitle() {
          return this._addAdvanceSettingsTitle;
     }


     //#endregion


     //#region This region is to have the functions

     async createAProductWithBasicSettings(productName: string, nodeName: string) {
          await webActions.enterElementText(this.productNameField, productName);
          await webActions.enterElementText(this.addNodeFileld, nodeName);
          await webActions.keyPress(this.addNodeFileld, "Enter");
          await webActions.clickElement(this.saveButtonLoctor);
     }

     async clickOnToogleButtonForTestDataWebhook() {
          await webActions.clickElement(this.testDataWebhookToogleButton);
     }

     async enableTestDataWebhookToggleButton() {
          var toogleBtnCheck = await webActions.getElementAttributeValue(this.testDataWebhookToogleButton, "aria-checked");
          if (toogleBtnCheck === 'false') {
               await webActions.clickElement(this.testDataWebhookToogleButton);
          }
     }

     async disableTestDataWebhookToggleButton() {
          var toogleBtnCheck = await webActions.getElementAttributeValue(this.testDataWebhookToogleButton, 'aria-checked');
          if (toogleBtnCheck === 'true') {
               await webActions.clickElement(this.testDataWebhookToogleButton);
          }
     }

     async selectTestDataWebhookDuringItemCreation(webhookName: string) {
          //await webActions.clickElement(this.testDataWebhookToogleButton);
          await webActions.clickElement(this.newDataWebhookDropdown);
          await webActions.clickElement(this.commonLocatorForTestDataWebhook(webhookName));
     }

     async createProductWithAllAdvanceSettings(productName: string, nodeName: string) {
          await webActions.enterElementText(this.productNameField, productName);
          await webActions.enterElementText(this.addNodeFileld, nodeName);
          await webActions.keyPress(this.addNodeFileld, "Enter");
          await webActions.clickElement(this.addAdvanceSettingsTitle);
          await webActions.clickElement(this.chkBoxForAllAdvanceSettingsLocator);
          await webActions.clickElement(this.applyBtnDetailPageLocator);
          await webActions.enterElementText(this.increasePingCountTxtBoxLocator, '5');
          await webActions.enterElementText(this.increaseHopFailureCountLocator, '10');
          await webActions.enterElementText(this.mqttSubnetClientIdTxtBoxLocator, '8.8.8.8');
          await webActions.enterElementText(this.ednsSubnetTxtBoxLocator, '8.8.8.8');
          await webActions.enterElementText(this.viewportWidthTextboxLocator, '1200');
          await webActions.enterElementText(this.viewportLenghthTextboxLocator, '600');
     }

     async getElementTextFromElementsFromProductProperties(element : string){
          var elementsText = webActions.getTextFromWebElements(element);
          return elementsText;
      }


     //#endregion
}