import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";


/*
    CP-8430 : Verify tests are moved
*/

test("VerifyMoveTestInOtherLocation @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage,page, sideNavigationBar,util,testUtility,synCCPage, verification}) => {
    let data = new DataForEnv();
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForMoveTest = await data.getValueOfTheParameter('productForCopyTest');
    let testName = await testUtility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createWebChromeTests(prodForTestCreate, testName, url);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(2000);
    //select test and lick on move
    await synCCPage.moveSelectedItem(testName,prodForMoveTest);
    //search test
    await synCCPage.clickOnSearchedItemInCC(testName);
    await util.delay(5000);
    //validation for Tests Location 
    await verification.verifyIfElementIsPresent(synCCPage.copyTestproductNameInTestPropertyPageLocator ,"Tests is not moved to selected location.");
    //close test property page by clicking on cross icon
    await syntheticTestDetailPage.closeTestPropertyPage();
    //delete test
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);
    
})


