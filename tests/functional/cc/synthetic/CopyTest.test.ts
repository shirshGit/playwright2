import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { expect } from "@playwright/test";


/*
    CP-16894 : Verify Settings should be Inherited
*/

test("AfterCopyATestProductSettingsShouldBeInheritedInTest @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtility,synCCPage, verification}) => {
    let data = new DataForEnv();
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForCopyTest = await data.getValueOfTheParameter('productForCopyTest');
    let testName = await testUtility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    let copyTestName = 'Copy of - '+testName;
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
    //search test
    await synCCPage.clickOnSearchedItemInCC(copyTestName);
    //validation for inherite property
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

test("CopyOptionShouldBeAvailableInMenuForIndividualTest @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtility,synCCPage, verification}) => {
    let data = new DataForEnv();
    let testId = await data.getValueOfTheParameter('testID');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //search test
    await synCCPage.searchAndClickOnThreeDotMenu(testId);
    //validation for copy option
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(synCCPage.copyOptionInThreeDotMenuLocator ,"copy option is not present");
    
})

/*
    CP-4392 : Verify clicking on 'Copy' will open a blade to the user with the tree structure 
*/
test("AfterClickingOnCopyTestLocationBladeShouldOpen @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtility,synCCPage, verification}) => {
    let data = new DataForEnv();
    let testId = await data.getValueOfTheParameter('testID');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //search and click on three dot menu  
    await synCCPage.clickCopyButtonFromThreeDotMenu(testId);
    await util.delay(2000);
    //validation for Tests Location 
    await verification.verifyIfElementIsPresent(synCCPage.testLocationTextAfterClickingOnCopyInThreeDotMenuLocator ,"Tests Location blade is not present after clicking on copy button in three dot menu.");
    
})

/*
    CP-4393 : Verify User is able to pick up/select location on synthetic tests location
*/
test("UserIsAbleToSelectLocationOnSyntheticTestLocation @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtility,synCCPage, verification}) => {
    let data = new DataForEnv();
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForCopyTest = await data.getValueOfTheParameter('productForCopyTest');
    let testName = await testUtility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    let copyTestName = 'Copy of - '+testName;
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
    await util.delay(3000);
    //search test
    await synCCPage.clickOnSearchedItemInCC(copyTestName);
    //validation for Tests Location 
    await verification.verifyIfElementIsPresent(synCCPage.copyTestproductNameInTestPropertyPageLocator ,"Tests Location is not present");
    //close test property page by clicking on cross icon
    await util.delay(1000);
    await syntheticTestDetailPage.closeTestPropertyPage();
    //delete test
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(copyTestName);
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);
})

/*
    CP-4394 : Verify test name of copied test 
*/
test("VeriftTestNameOfCopyTest @SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar,util,testUtility,synCCPage, verification}) => {
    let data = new DataForEnv();
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let prodForCopyTest = await data.getValueOfTheParameter('productForCopyTest');
    let testName = await testUtility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    let copiedTestName = 'Copy of - '+testName;
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
    await util.delay(2000);
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