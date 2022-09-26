import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { expect, Page } from "@playwright/test";

let data = new DataForEnv();
/*
    CP-34475 : Verify "Client Level" should be selected by default under Division dropdown
*/

test("VerifyClientLevel @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage,page, sideNavigationBar,util,testUtilility,synCCPage, verification}) => {
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForMoveTest = await data.getValueOfTheParameter('productForCoapyTest');
    let testName = await testUtilility.getTestName();
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
    //validation for Tests Location 
    await verification.verifySoftAssertForTextOfAnElement(synCCPage.getItemLocation , prodForMoveTest,"Tests Location is not moved to selected location.");
    
})


