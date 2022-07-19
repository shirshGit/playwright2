import test from '@lib/BaseTest';
import { ControlCenter } from '@objects/ControlCenter';
import { expect } from '@playwright/test';


test.beforeEach(async ({ baseTestUtil }) => {
});

/*
    CP-6805:Verify Parent's settings should be Inherited to the folder
*/
test('@Smoke @SyntheticControlCenter Verify Parents settings should be Inherited to the folder',async({page, verification, syntheticControlCenter}) => {
    let controlCenter = new ControlCenter();
    await syntheticControlCenter.navigateToSyntheticCCFromSideNavigation();
    await syntheticControlCenter.goToNewProductCreate();
    let productName: string = await syntheticControlCenter.randomItemName(5);
    let nodeName: string = 'Dallas-Linux IPV4 / IPV6';
    await syntheticControlCenter.createProductWithAllAdvanceSettings(productName, nodeName);
    await syntheticControlCenter.delay(1000);
    await syntheticControlCenter.clickSaveButton();
    await syntheticControlCenter.openPropertiesOfSerachedItem(productName);
    var getAdvncStngsOptnsForProducts = await syntheticControlCenter.getElementTextFromElements(controlCenter.COMMON_LOCATOR_FOR_ALL_ADVNC_SETTINGS);
    console.log(getAdvncStngsOptnsForProducts);
    await syntheticControlCenter.closePropertiesBlade();
    await syntheticControlCenter.clickOnSearchedItemInCC(productName);
    let folderName : string = await syntheticControlCenter.randomItemName(5);
    await syntheticControlCenter.goToNewFolderCreate();
    await syntheticControlCenter.createAFolderWithInheritedSettings(folderName);
    await syntheticControlCenter.openPropertiesOfSerachedItem(folderName);
    await syntheticControlCenter.clickOnCollapsableItem(controlCenter.COLLAPSIBLE_ADVANCE_SETTINGS_LOCATOR);
    var getAdvncStngsOptnsForFolders = await syntheticControlCenter.getElementTextFromElements(controlCenter.COMMON_LOCATOR_FOR_ALL_ADVNC_SETTINGS);
    console.log(getAdvncStngsOptnsForFolders);
    await verification.verifyTwoSetOfTextsOfElements(getAdvncStngsOptnsForProducts, getAdvncStngsOptnsForFolders);
    //getAdvncStngsOptnsForProducts.forEach(val => expect(getAdvncStngsOptnsForFolders.includes(val)).toBeTruthy());
    await syntheticControlCenter.closePropertiesBlade();

    await syntheticControlCenter.deleteItemFromThreeDotMenu(folderName);
    await syntheticControlCenter.deleteItemFromThreeDotMenu(productName);
})