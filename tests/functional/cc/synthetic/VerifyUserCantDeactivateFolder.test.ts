import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
import { ControlCenter } from '@objects/ControlCenter';

let data = new DataForEnv();

test.beforeEach(async ({ baseTestUtil }) => {
});


/*
    //CP-16588:Verify When User tried to Deactivate Folder ,then user should get an Error Messa
*/
test("VerifyUserCantDeactivateFolder @Smoke@SyntheticControlCenter@ControlCenter", async ({ util, sideNavigationBar, syntheticProductDetailPage, syntheticFolderDetailPage, verification }) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await syntheticProductDetailPage.goToNewProductCreate();
    let productName: string = await util.generateRandomText(5);
    let nodeName = await data.getValueOfTheParameter('node');
    await syntheticProductDetailPage.createAProductWithBasicSettings(productName, nodeName);
    await syntheticProductDetailPage.clickOnSearchedItemInCC(productName);
    let folderName : string = 'Automation_Delete_UI' + await util.generateRandomText(5);
    await syntheticFolderDetailPage.goToNewFolderCreate();
    await syntheticFolderDetailPage.createAFolderWithInheritedSettings(folderName);
    await syntheticFolderDetailPage.checkTheSearchedItem(folderName);
    await verification.verifyAttributeValueOfLocatorDoesNotMatch(syntheticFolderDetailPage.deactivateBtnInContainerLocator,'class', 'IconButton_selected','Folder Deactivate button is enable');
    await syntheticFolderDetailPage.deleteItemFromThreeDotMenu(folderName);
    await syntheticProductDetailPage.deleteItemFromThreeDotMenu(productName);
    
})