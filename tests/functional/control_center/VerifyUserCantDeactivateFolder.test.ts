import test from '@lib/BaseTest';


test.beforeEach(async ({ baseClass }) => {
});


/*
    //CP-16588:Verify When User tried to Deactivate Folder ,then user should get an Error Messa
*/
test("@Smoke @SyntheticControlCenter Verify User Cant Deactivate Folder", async ({ page, syntheticControlCenter }) => {
    await syntheticControlCenter.navigateToSyntheticCCFromSideNavigation();
    await syntheticControlCenter.goToNewProductCreate();
    let productName: string = await syntheticControlCenter.randomItemName(5);
    await syntheticControlCenter.createAProductWithBasicSettings(productName, 'Dallas-Linux IPV4 / IPV6');
    await syntheticControlCenter.clickOnSearchedItemInCC(productName);
    let folderName : string = await syntheticControlCenter.randomItemName(5);
    await syntheticControlCenter.goToNewFolderCreate();
    await syntheticControlCenter.createAFolderWithInheritedSettings(folderName);
    await syntheticControlCenter.verifyDeactivateButtonDisabledForSelectedIteam(folderName);

    await syntheticControlCenter.deleteItemFromThreeDotMenu(folderName);
    await syntheticControlCenter.deleteItemFromThreeDotMenu(productName);
    
})