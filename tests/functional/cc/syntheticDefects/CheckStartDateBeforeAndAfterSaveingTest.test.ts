import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';

let data = new DataForEnv();


test.beforeEach(async ({ baseTestUtil }) => {
});

/*
  CP-12527 : Bug 127422: Start Date on Safari is not pre-populated and on save uses the UTC Time
*/

test("CheckStartDateBeforeAndAfterSaveingTest  @ProductionDefect@SyntheticControlCenter", async ({ verification, syntheticTestDetailPage, sideNavigationBar, testUtilility, util }) => {

    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let testName = await testUtilility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createWebChromeTests(prodForTestCreate, testName, url);
    //fetch start date before saving test
    let startDateBeforeSavingTest = await syntheticTestDetailPage.fetchStartDate();
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(2000);
    //search and click created test
    await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
    //fetch start date after saving test
    await util.delay(2000);
    let startDateAfterSavingTest = await syntheticTestDetailPage.fetchStartDate();
    //validation of start date 
    await verification.verifySoftAssertTrue(startDateBeforeSavingTest === startDateAfterSavingTest, 'Start date before saving test and start date after saving test is not equal.');
    //cancel test property page by click on cancel button
    await syntheticTestDetailPage.clickCancelTestPropertyButton();
    await util.delay(1000);
    //delete test
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);


  });

