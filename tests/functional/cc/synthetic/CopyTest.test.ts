import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { expect } from "@playwright/test";

let data = new DataForEnv();
/*
    CP-16894 : Verify Settings should be Inherited
*/

test.skip("AfterCopyATestProductSettingsShouldBeInheritedInTest @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtilility,synCCPage, verification}) => {
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForCopyTest = await data.getValueOfTheParameter('productForCoapyTest');
    let testName = await testUtilility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createWebChromeTests(prodForTestCreate, testName, url);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(2000);
    //copy from three dot menu
    await syntheticTestDetailPage.copyItemFromThreeDotMenu(testName,prodForCopyTest);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    let copyTestName = 'Copy of - '+testName;
    //search test
    await synCCPage.clickOnSearchedItemInCC(copyTestName);
    for (let index = 2; index < 6; index++) {
        let checkForInheritText = await syntheticTestDetailPage.getClassPropertyOfInheritedCheckBox(index);
        await util.delay(500);
        await verification.verifySoftAssertTrue(checkForInheritText.includes('is-checked'), 'After Copy A Test Product Setting is not Inherited In Test');
    }
    //close test property page by clicking on cross icon
    await syntheticTestDetailPage.closeTestPropertyPage();
    //delete test
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(copyTestName);

})

/*
    CP-4391 : Verify 'Copy' option is available in menu for indivudual test
*/

test("CopyOptionShouldBeAvailableInMenuForIndividualTest @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtilility,synCCPage, verification}) => {
    let testId = await data.getValueOfTheParameter('testID');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //search test
    await synCCPage.searchAndClickOnThreeDotMenu(testId);
    //validation for copy option
    await verification.verifySoftAssertForTextOfAnElement(await syntheticTestDetailPage.threeDotMenuItem('Copy') ,'Copy' ,"copy is not present");
    
})

/*
    CP-4392 : Verify clicking on 'Copy' will open a blade to the user with the tree structure 
*/
test("AfterClickingOnCopyTestLocationBladeShouldOpen @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtilility,synCCPage, verification}) => {
    let testId = await data.getValueOfTheParameter('testID');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //search and click on three dot menu  
    await synCCPage.searchAndClickOnThreeDotMenuAndCopy(testId);
    //validation for Tests Location 
    await verification.verifySoftAssertForTextOfAnElement(synCCPage.testLocationTextAfterClickingOnCopyInThreeDotMenu ,'Tests Location' ,"Tests Location is not present");
    
})

/*
    CP-4393 : Verify User is able to pick up/select location on synthetic tests location
*/
test("UserIsAbleToSelectLocationOnSyntheticTestLocation @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtilility,synCCPage, verification}) => {
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForCopyTest = await data.getValueOfTheParameter('productForCoapyTest');
    let testName = await testUtilility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createWebChromeTests(prodForTestCreate, testName, url);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(2000);
    //copy from three dot menu
    await syntheticTestDetailPage.copyItemFromThreeDotMenu(testName,prodForCopyTest);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    let copyTestName = 'Copy of - '+testName;
    //search test
    await synCCPage.clickOnSearchedItemInCC(copyTestName);
    //validation for Tests Location 
    await verification.verifySoftAssertForTextOfAnElement(synCCPage.getItemLocation , prodForCopyTest,"Tests Location is not present");
    //close test property page by clicking on cross icon
    await syntheticTestDetailPage.closeTestPropertyPage();
    //delete test
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(copyTestName);
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);
})

/*
    CP-4394 : Verify test name of copied test 
*/
test("VeriftTestNameOfCopyTest @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtilility,synCCPage, verification}) => {
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForCopyTest = await data.getValueOfTheParameter('productForCoapyTest');
    let testName = await testUtilility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createWebChromeTests(prodForTestCreate, testName, url);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(2000);
    //copy from three dot menu
    await syntheticTestDetailPage.copyItemFromThreeDotMenu(testName,prodForCopyTest);
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    let copiedTestName = 'Copy of - '+testName;
    //search test
    await synCCPage.clickOnSearchedItemInCC(copiedTestName);
    //get test name
    let TestName = await syntheticTestDetailPage.fetchTestName();
    //validation for copy test name 
    await verification.verifySoftAssertTrue(TestName === copiedTestName,"Test is not copied successfully");
    //close test property page by clicking on cross icon
    await syntheticTestDetailPage.closeTestPropertyPage();
    //delete test
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(copiedTestName);
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);
})