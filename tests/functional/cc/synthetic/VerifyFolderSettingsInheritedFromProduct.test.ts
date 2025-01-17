import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
import { ControlCenter } from '@objects/ControlCenter';
import { expect } from '@playwright/test';

let data = new DataForEnv();

test.beforeEach(async ({ baseTestUtil }) => {
    
});

/*
    CP-6805:Verify Parent's settings should be Inherited to the folder
*/
test('VerifyParentsSettingsShouldBeInheritedToTheFolder @Smoke@SyntheticControlCenter@ControlCenter',async({util, sideNavigationBar, syntheticProductDetailPage, syntheticFolderDetailPage, verification}) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await syntheticProductDetailPage.goToNewProductCreate();
    let productName: string = 'Automation_Delete_UI' + await util.generateRandomText(5);
    let nodeName: string = await data.getValueOfTheParameter('node');;
    await syntheticProductDetailPage.createProductWithAllAdvanceSettings(productName, nodeName);
    await syntheticProductDetailPage.clickSaveButton();
    await util.delay(2000);   
    await syntheticProductDetailPage.openPropertiesOfSerachedItem(productName);
    var getAdvncStngsOptnsForProducts = await syntheticProductDetailPage.getElementTextFromElementsFromProductProperties(syntheticFolderDetailPage.locatorForAllAdvanceSettingsInDetailPageLocator);
    console.log(getAdvncStngsOptnsForProducts);
    await syntheticProductDetailPage.closePropertiesBlade();
    await syntheticProductDetailPage.clickOnSearchedItemInCC(productName);
    let folderName : string = 'Automation_Delete_UI' + await util.generateRandomText(5);
    await syntheticFolderDetailPage.goToNewFolderCreate();
    await syntheticFolderDetailPage.createAFolderWithInheritedSettings(folderName);
    await syntheticFolderDetailPage.openPropertiesOfSerachedItem(folderName);
    await syntheticFolderDetailPage.clickOnCollapsableItemAtFolderProperties(syntheticFolderDetailPage.collapsibleAdvanceSettingsLocator);
    var getAdvncStngsOptnsForFolders = await syntheticFolderDetailPage.getElementTextFromElements(syntheticFolderDetailPage.locatorForAllAdvanceSettingsInDetailPageLocator);
    console.log(getAdvncStngsOptnsForFolders);
    await verification.verifyTwoSetOfTextsOfElements(getAdvncStngsOptnsForProducts, getAdvncStngsOptnsForFolders);
    //getAdvncStngsOptnsForProducts.forEach(val => expect(getAdvncStngsOptnsForFolders.includes(val)).toBeTruthy());
    await syntheticFolderDetailPage.closeFolderPropertiesBlade();

    await syntheticFolderDetailPage.deleteItemFromThreeDotMenu(folderName);
    await syntheticProductDetailPage.deleteItemFromThreeDotMenu(productName);
})