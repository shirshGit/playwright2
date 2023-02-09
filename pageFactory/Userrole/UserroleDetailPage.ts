import { WebActions } from "@lib/WebActions";
import { Utility } from "@util/Utility";
import { ListenOptions } from "net";
import { Page } from "@playwright/test";
import { UserrolePage } from "./UserrolePage";

let webActions: WebActions;
let util: Utility

export class UserroleDetailPage extends UserrolePage {
    constructor(page: Page) {
        super(page);
        webActions = new WebActions(this.page);
        util = new Utility();
    }
    //#region This region is for getter

    private _nameInputBox = '//input[contains(@class,"TextBox_detail_")]';
    private _searchBoxInDetailPage = '//div[contains(@class,"UserRoleDetailsBladestyles__UserRolePermissionSearch")]//input[@id="fabric-search-box"]';
    private _closeUserrolePropertyPage = '//div[@data-testid="cancel-icon"]';
    private _applyButtonOnconatctPropertyPage = '//span[text()="Apply"]';
    private _firstCheckBox = '//button//i[@data-icon-name="CircleRing"]';
    private _cancelButtonOnconatctPropertyPage = '//span[text()="Cancel"]';





    public get nameInputFieldLocator() {
        return this._nameInputBox
    }
    
    public get searchBoxInDetailPageLocator() {
        return this._searchBoxInDetailPage;
    }

    public get selectPermissionLocator() {
        return (text: string) => { return `//span[text()="${text}"]` };
    }

    public get cancelPropertiesPageLocator() {
        return this._cancelButtonOnconatctPropertyPage
    }

    public get closePropertyPageLocator() {
        return this._closeUserrolePropertyPage
    }

    public get applyButtonInPropertiesPageLocator() {
        return this._applyButtonOnconatctPropertyPage;
    }

    public get firstCheckBoxForPermissionSearchLocator() {
        return this._firstCheckBox;
    }

    



    //#endregion

    //#region This region is to have the functions

    async clickOnFirstSearchedPermissionCheckBox(permissions: string) {
        const [searchItem] = await Promise.all([
            this.searchPermissionsInDetailPage(permissions)
        ]);
        await util.delay(2000);
        await webActions.hoverOnElement(this.firstCheckBoxForPermissionSearchLocator);
        await webActions.clickElement(this.firstCheckBoxForPermissionSearchLocator);
    }

    async cancelPropertyPage() {
        await webActions.clickElement(this.cancelPropertiesPageLocator);
    }

    async applyButton() {
        await webActions.clickElement(this.applyButtonInPropertiesPageLocator);
    }

    async searchPermissionsInDetailPage(Permissions: string) {
        await webActions.waitForElementAttached(this.searchBoxInDetailPageLocator);
        await webActions.clickElement(this.searchBoxInDetailPageLocator);
        await webActions.enterElementText(this.searchBoxInDetailPageLocator, Permissions);
        await util.delay(1000);
        await webActions.clickElement(this.searchBoxInDetailPageLocator);
        await webActions.keyPress(this.searchBoxInDetailPageLocator, 'Enter')
        await webActions.onlyKeyPress('Enter');
    }

    async createUserrole(userroleName: string, permissions: string[]) {
        await webActions.waitForElementAttached(this.createIconLocator);
        await webActions.clickElement(this.createIconLocator);
        await util.delay(3000);
        await webActions.clickElement(this.nameInputFieldLocator);
        await webActions.enterElementText(this.nameInputFieldLocator, userroleName);
        await webActions.clickElement(this.searchBoxInDetailPageLocator);
        for (let index = 0; index < permissions.length; index++) {
            const element = permissions[index];
            await this.searchPermissionsInDetailPage(element);
            await webActions.clickElement(this.firstCheckBoxForPermissionSearchLocator);
        }
        await webActions.clickElement(this.applyButtonInPropertiesPageLocator);

    }

    async clickOnCreateIcon() {
        await webActions.clickElement(this.createIconLocator);
    }



    //#endregion

}