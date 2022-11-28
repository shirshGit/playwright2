import { WebActions } from "@lib/WebActions";
import { Page } from "playwright";
import { SynControlCenterPage } from "@pageobjects/ControlCenter/SyntheticControlCenter";

//const SyntheticControlCenter = require('@pageobjects/ControlCenter/SyntheticControlCenter');

let webActions: WebActions;


/*
    This file is to have common functionalities and locators for Product , Folder and Test Detail Page
*/

export class SyntheticDetailPage extends SynControlCenterPage {

    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
    }


    //#region This region is for properties

    private _saveButton = '//button[@id="primary-button"]';
    private _propertiesBladeCancelButton = '//div[@data-testid="cancel-icon"]';
    private _locatorForAllAdvanceSettingsInDetailPage = 'div[class*="AdvancedSettingsCells_container"]';
    private _locatorToGetSeletedNodes = '//div[contains(@class, "NodeRow__StyledNameRow")]';
    private _applyBtnInDetailPage = '//button[@data-testid="primary-button"]//span[text()="Apply"]';
    private _increasePingCountTxtBox = '//div[text()="Increase Ping Count"]//input';
    private _increaseHopFailureCount = '//div[text()="Increase Failure Hop Count"]//input';
    private _mqttSubnetClientIdTxtBox = '//div[text()="MQTT Client ID"]//input';
    private _ednsSubnetTxtBox = '//div[text()="EDNS Subnet"]//input';
    private _viewportWidthTextbox = 'input#widthTextbox';
    private _viewportLenghthTextbox = 'input#heightTextbox';
    private _collapsibleAdvanceSettingsLocator = '//span[(contains(@class,"CollapsibleContainer_clickable")) and (text() = "Advanced Settings")]';
    private _chkBoxForAllAdvanceSettings = '//div[@data-testid = "advancedsettingsblade"]//span//div[@data-automationid = "DetailsRowCheck"]//i[@data-icon-name="StatusCircleCheckmark"]';
    private _alertRecipientsTextBox = '//div[@data-testid = "recipient-autocomplete-picker"]//input';
    private _alertReceipientSuggestedContacts = '//div[@aria-label = "Suggested Contacts"]//span[contains(@class, "AutoCompletePillPicker_suggestionItem")]//b';
    private _cancelItemDetailPage = '//span[text()="Cancel"]';
    private _rumInMasterTestBlade = '//span[text()="RUM"]';
    private _testsInMasterTestBlade = '//span[text()="Tests"]';
     private _changeLogButton = '//span[text()="Change Log"]/../../i'
    

    public get saveButtonLoctor() {
        return this._saveButton;
    }

    public get propertiesBladeCancelButtonLocator() {
        return this._propertiesBladeCancelButton;
    }

    public get locatorForAllAdvanceSettingsInDetailPageLocator() {
        return this._locatorForAllAdvanceSettingsInDetailPage;
    }

    public get locatorToGetSeletedNodesLocator() {
        return this._locatorToGetSeletedNodes;
    }

    public get applyBtnDetailPageLocator() {
        return this._applyBtnInDetailPage;
    }

    public get increasePingCountTxtBoxLocator() {
        return this._increasePingCountTxtBox;
    }

    public get increaseHopFailureCountLocator() {
        return this._increaseHopFailureCount;
    }

    public get mqttSubnetClientIdTxtBoxLocator() {
        return this._mqttSubnetClientIdTxtBox;
    }

    public get ednsSubnetTxtBoxLocator() {
        return this._ednsSubnetTxtBox;
    }

    public get viewportWidthTextboxLocator() {
        return this._viewportWidthTextbox;
    }

    public get viewportLenghthTextboxLocator() {
        return this._viewportLenghthTextbox;
    }

    public get collapsibleAdvanceSettingsLocator() {
        return this._collapsibleAdvanceSettingsLocator;
    }

    public get chkBoxForAllAdvanceSettingsLocator() {
        return this._chkBoxForAllAdvanceSettings;
    }

    public get alertRecipientsTextBoxLocator() {
        return this._alertRecipientsTextBox;
    }

    public get alertReceipientSuggestedContactsLocator() {
        return this._alertReceipientSuggestedContacts;
    }

    public get rumFromMasterTestBladeLocator() {
        return this._rumInMasterTestBlade;
    }

    public get testFromMasterTestBladeLocator() {
        return this._testsInMasterTestBlade;
    }

   
    public get cancelItemDetailPageLocator() {
        return this._cancelItemDetailPage;
    }

    public get ChangeLogButtonLocator(){
        return this._changeLogButton;
    }

    



    //#endregion


    //#region This region is to have common function for Product, Folder and Test detail page

    async closePropertiesBlade() {
        await webActions.clickElement(this.propertiesBladeCancelButtonLocator);
    }
    
    async clickSaveButton() {
        await webActions.clickElement(this.saveButtonLoctor);
    }

    async typeRecipientsNameInAlertReceipientBox(name: string) {
        await webActions.enterElementText(this.alertRecipientsTextBoxLocator, name);
    }

    async getSuggestedContactsForAlertRecipients(element: string) {
        var elementsText = await webActions.getTextFromWebElements(element);
        return elementsText;
    }

      async CancelButton() {
        await webActions.clickElement(this.cancelItemDetailPageLocator);
    }

    async closeItemPropertyPage() {
        await webActions.clickElement(this.closeItemPropertiesBladeLocator);
    }

    async rumInMasterBlade(){
        await webActions.clickElement(this.rumFromMasterTestBladeLocator);
    }

    async clickOnChangeLogButton(){
        await webActions.clickElement(this.ChangeLogButtonLocator);
    }


    //#endregion
}