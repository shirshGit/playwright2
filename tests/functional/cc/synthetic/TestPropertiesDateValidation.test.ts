import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';

let data = new DataForEnv();


test.beforeEach(async ({ baseTestUtil }) => {
});


/*
  CP-39581 : Bug 127422: Start Date on Safari is not pre-populated and on save uses the UTC Time
*/

test("CheckStartDateBeforeAndAfterSaveingTest  @ProductionDefect@SyntheticControlCenter", async ({baseTestUtil, verification, syntheticTestDetailPage, sideNavigationBar,synCCPage, testUtility, util }) => {

    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let testName = await testUtility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    //navigate to cc test page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createWebChromeTests(prodForTestCreate, testName, url);
    //fetch start date before saving test
    await util.delay(3000);
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
    await syntheticTestDetailPage.closeItemPropertyPage();
    await util.delay(1000);
    //delete test
    await synCCPage.deleteItemFromThreeDotMenu(testName);


  });



/*
 CP-39582 :Bug 130312: CC: Safari: To Date is not getting saved
*/

test("CheckEndDateAfterSavingTest  @ProductionDefect@SyntheticControlCenter", async ({ baseTestUtil,verification, syntheticTestDetailPage, sideNavigationBar, testUtility,synCCPage, util }) => {

    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let testName = await testUtility.getTestName();
    let url = await data.getValueOfTheParameter('url');
    let endDate = await util.getDate(2,'mmm dd yyyy');
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //create web test
    await syntheticTestDetailPage.createTestWithEndDate(prodForTestCreate, testName, url, endDate.toLocaleString());
    //save test
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(1000);
    //search and click created test
    await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
    await util.delay(3000);
    //fetch end date after saving test
    let endDateAfterSavingDate = await syntheticTestDetailPage.fetchEndDate();
    //validation
    await verification.verifySoftAssertTrue(endDateAfterSavingDate === endDate.toLocaleString(), 'end date which is provided while creating test is not same after saving test.');
    //close test property page by clicking on cross icon
    await syntheticTestDetailPage.closeItemPropertyPage();
    await util.delay(1000);
    //delete test
    await synCCPage.deleteItemFromThreeDotMenu(testName);

  });

  

 



