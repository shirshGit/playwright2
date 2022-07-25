import test from '@lib/BaseTest';
import { ControlCenter } from '@objects/ControlCenter';

let cc = new ControlCenter();

test.beforeEach(async ({ baseTestUtil }) => {
});


/*
    //CP-16588:Verify When User tried to Deactivate Folder ,then user should get an Error Messa
*/
test("@Smoke @SyntheticControlCenter Verify User Cant Deactivate Folder", async ({ sideNavigationBar, syntheticProductDetailPage, syntheticFolderDetailPage, synLocationBlade, verification }) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    await syntheticProductDetailPage.goToNewProductCreate();
    let productName: string = await syntheticProductDetailPage.randomItemName(5);
    await syntheticProductDetailPage.createAProductWithBasicSettings(productName, 'Dallas-Linux IPV4 / IPV6');
    await syntheticProductDetailPage.clickOnSearchedItemInCC(productName);
    let folderName : string = await syntheticFolderDetailPage.randomItemName(5);
    await syntheticFolderDetailPage.goToNewFolderCreate();
    await syntheticFolderDetailPage.createAFolderWithInheritedSettings(folderName);
    await syntheticFolderDetailPage.checkTheSearchedItem(folderName);
    await verification.verifyAttributeValueOfLocatorDoesnotMatch(syntheticFolderDetailPage.deactivateBtnInContainer,'class', 'IconButton_selected','Folder Deactivate button is enable');
    await syntheticFolderDetailPage.deleteItemFromThreeDotMenu(folderName);
    await syntheticProductDetailPage.deleteItemFromThreeDotMenu(productName);
    
})