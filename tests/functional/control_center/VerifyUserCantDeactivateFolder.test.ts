import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
import { ControlCenter } from '@objects/ControlCenter';

let data = new DataForEnv();

test.beforeEach(async ({ baseTestUtil }) => {
});


/*
    //CP-16588:Verify When User tried to Deactivate Folder ,then user should get an Error Messa
*/
test("@Smoke @SyntheticControlCenter Verify User Cant Deactivate Folder", async ({ sideNavigationBar, syntheticProductDetailPage, syntheticFolderDetailPage, verification }) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await syntheticProductDetailPage.goToNewProductCreate();
    let productName: string = await syntheticProductDetailPage.randomItemName(5);
    let nodeName = await data.getValueOfTheParameter('node');
    await syntheticProductDetailPage.createAProductWithBasicSettings(productName, nodeName);
    await syntheticProductDetailPage.clickOnSearchedItemInCC(productName);
    let folderName : string = await syntheticFolderDetailPage.randomItemName(5);
    await syntheticFolderDetailPage.goToNewFolderCreate();
    await syntheticFolderDetailPage.createAFolderWithInheritedSettings(folderName);
    await syntheticFolderDetailPage.checkTheSearchedItem(folderName);
    await verification.verifyAttributeValueOfLocatorDoesNotMatch(syntheticFolderDetailPage.deactivateBtnInContainer,'class', 'IconButton_selected','Folder Deactivate button is enable');
    await syntheticFolderDetailPage.deleteItemFromThreeDotMenu(folderName);
    await syntheticProductDetailPage.deleteItemFromThreeDotMenu(productName);
    
})