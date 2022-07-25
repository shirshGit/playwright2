import test from '@lib/BaseTest';
import { ControlCenter } from '@objects/ControlCenter';
import { expect } from '@playwright/test';


test.beforeEach(async ({ baseTestUtil }) => {
});

/*
    CP-6805:Verify Parent's settings should be Inherited to the folder
*/
test('@Smoke @SyntheticControlCenter Verify Parents settings should be Inherited to the folder',async({page,sideNavigationBar, syntheticProductDetailPage, syntheticFolderDetailPage, verification}) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await syntheticProductDetailPage.goToNewProductCreate();
    let productName: string = await syntheticProductDetailPage.randomItemName(5);
    let nodeName: string = 'Dallas-Linux IPV4 / IPV6';
    await syntheticProductDetailPage.createProductWithAllAdvanceSettings(productName, nodeName);
    await syntheticProductDetailPage.delay(1000);
    await syntheticProductDetailPage.clickSaveButton();
    await syntheticProductDetailPage.openPropertiesOfSerachedItem(productName);
    var getAdvncStngsOptnsForProducts = await syntheticProductDetailPage.getElementTextFromElementsFromProductProperties(syntheticFolderDetailPage.locatorForAllAdvanceSettingsInDetailPage);
    console.log(getAdvncStngsOptnsForProducts);
    await syntheticProductDetailPage.closePropertiesBlade();
    await syntheticProductDetailPage.clickOnSearchedItemInCC(productName);
    let folderName : string = await syntheticFolderDetailPage.randomItemName(5);
    await syntheticFolderDetailPage.goToNewFolderCreate();
    await syntheticFolderDetailPage.createAFolderWithInheritedSettings(folderName);
    await syntheticFolderDetailPage.openPropertiesOfSerachedItem(folderName);
    await syntheticFolderDetailPage.clickOnCollapsableItemAtFolderProperties(syntheticFolderDetailPage.collapsibleAdvanceSettingsLocator);
    var getAdvncStngsOptnsForFolders = await syntheticFolderDetailPage.getElementTextFromElements(syntheticFolderDetailPage.locatorForAllAdvanceSettingsInDetailPage);
    console.log(getAdvncStngsOptnsForFolders);
    await verification.verifyTwoSetOfTextsOfElements(getAdvncStngsOptnsForProducts, getAdvncStngsOptnsForFolders);
    //getAdvncStngsOptnsForProducts.forEach(val => expect(getAdvncStngsOptnsForFolders.includes(val)).toBeTruthy());
    await syntheticFolderDetailPage.closeFolderPropertiesBlade();

    await syntheticFolderDetailPage.deleteItemFromThreeDotMenu(folderName);
    await syntheticProductDetailPage.deleteItemFromThreeDotMenu(productName);
})