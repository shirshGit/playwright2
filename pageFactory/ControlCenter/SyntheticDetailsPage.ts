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

    private _saveButton = '//span[text()="Save"]';
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



    public get saveButton() {
        return this._saveButton;
    }

    public get propertiesBladeCancelButton() {
        return this._propertiesBladeCancelButton;
    }

    public get locatorForAllAdvanceSettingsInDetailPage() {
        return this._locatorForAllAdvanceSettingsInDetailPage;
    }

    public get locatorToGetSeletedNodes() {
        return this._locatorToGetSeletedNodes;
    }

    public get applyBtnDetailPage() {
        return this._applyBtnInDetailPage;
    }

    public get increasePingCountTxtBox() {
        return this._increasePingCountTxtBox;
    }

    public get increaseHopFailureCount() {
        return this._increaseHopFailureCount;
    }

    public get mqttSubnetClientIdTxtBox() {
        return this._mqttSubnetClientIdTxtBox;
    }

    public get ednsSubnetTxtBox() {
        return this._ednsSubnetTxtBox;
    }

    public get viewportWidthTextbox() {
        return this._viewportWidthTextbox;
    }

    public get viewportLenghthTextbox() {
        return this._viewportLenghthTextbox;
    }

    public get collapsibleAdvanceSettingsLocator() {
        return this._collapsibleAdvanceSettingsLocator;
    }

    public get chkBoxForAllAdvanceSettings() {
        return this._chkBoxForAllAdvanceSettings;
    }


    //#endregion


    //#region This region is to have common function for Product, Folder and Test detail page

    async closePropertiesBlade() {
        await webActions.clickElement(this.propertiesBladeCancelButton);
   }


    //#endregion
}