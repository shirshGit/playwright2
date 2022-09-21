import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
import { WebActions } from '@lib/WebActions';
import { expect } from '@playwright/test';

let data = new DataForEnv();


test.beforeEach(async ({ baseTestUtil }) => {
});

/*
  CP-12527 : Bug 127422: Start Date on Safari is not pre-populated and on save uses the UTC Time
*/

test.skip("CheckStartDateBeforeAndAfterSaveingTest  @ProductionDefect@SyntheticControlCenter", async ({ verification, syntheticTestDetailPage, sideNavigationBar, testUtilility, util }) => {

  let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
  let testName = await testUtilility.getTestName();
  let url = await data.getValueOfTheParameter('url');
  //navigate to cc test page
  await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
  //create web test
  await syntheticTestDetailPage.createWebChromeTests(prodForTestCreate, testName, url);
  //fetch start date before saving test
  let startDateBeforeSavingTest = await syntheticTestDetailPage.fetchStartDate();
  console.log(startDateBeforeSavingTest);
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
  await syntheticTestDetailPage.clickCancelPropertyButton();
  await util.delay(1000);
  //delete test
  await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);


});

/*
 CP-12529 :Bug 130312: CC: Safari: From Date is not getting saved
*/

test.skip("CheckEndDateAfterSavingTest  @ProductionDefect@SyntheticControlCenter", async ({ verification, syntheticTestDetailPage, sideNavigationBar, testUtilility, util }) => {

  let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
  let testName = await testUtilility.getTestName();
  let url = await data.getValueOfTheParameter('url');
  let endDate = await syntheticTestDetailPage.EndDateAndStartDateForTestDetailPage(2);
  await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
  //create web test
  await syntheticTestDetailPage.createTestWithEndDate(prodForTestCreate, testName, url, endDate);
  //save test
  await syntheticTestDetailPage.clickSaveButton();
  await util.delay(1000);
  //search and click created test
  await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
  await util.delay(3000);
  //fetch end date after saving test
  let endDateAfterSavingDate = await syntheticTestDetailPage.fetchEndDate();
  //validation
  await verification.verifySoftAssertTrue(endDateAfterSavingDate === endDate, 'end date which is provided while creating test is not same after saving test.');
  //close test property page by clicking on cross icon
  await syntheticTestDetailPage.closePropertyPage();
  await util.delay(1000);
  //delete test
  await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);

});


/*
 CP-12697 : Bug 125438: Control Center : Manipulating URL shows some random tests and left navigation goes to Endpoints
*/

test.skip("ManipulatingURL  @ProductionDefect@SyntheticControlCenter", async ({ page, verification, syntheticTestDetailPage, sideNavigationBar, testUtilility, util, baseTestUtil }) => {

  let testName = await data.getValueOfTheParameter('testID');
  //navigate to CC page
  await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
  //search and click created test
  await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
  //get current page url
  let getCurrentPageUrl = await baseTestUtil.getUrl();
  //as per testcase replacing test id with '--'
  let urlAfterManipulation = getCurrentPageUrl.replace(testName, '--');
  await util.delay(1000);
  //open the manipulated url
  await page.goto(urlAfterManipulation);
  //again fetch current page url
  let getCurrentPageUrlAfterManuipulation = await baseTestUtil.getUrl();
  let testListPageUrl = await data.getValueOfTheParameter('testListPageUrl');
  //validation
  await verification.verifySoftAssertTrue(getCurrentPageUrlAfterManuipulation === testListPageUrl, 'testList page url after manipulation is not matching.');


});

/*
CP-12776 : Bug 125031 Active Tests are Changing to Inactive once wehe refresh the Page
*/

test("ActiveTestsAreChangingToInactiveOnceWehenRefreshPage  @ProductionDefect@SyntheticControlCenter", async ({ page, verification, syntheticTestDetailPage, sideNavigationBar, testUtilility,synCCPage, util, baseTestUtil }) => {

  let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
  let testName = await testUtilility.getTestName();
  let url = await data.getValueOfTheParameter('url');
  let endDate = await syntheticTestDetailPage.EndDateAndStartDateForTestDetailPage(2);
  //navigate to cc
  await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
  //create web test
  await syntheticTestDetailPage.createTestWithEndDate(prodForTestCreate, testName, url, endDate);
  //save test
  await syntheticTestDetailPage.clickSaveButton();
  await util.delay(500);
  //search and click created test
  await synCCPage.clickOnSearchedItemInCC(testName);
  //clear end date
  await synCCPage.clearTextField(syntheticTestDetailPage.endDateValue);
  await util.delay(1000);
  //click on save
  await syntheticTestDetailPage.clickSaveButton();
  //reload page
  await page.reload();
  //navigate to CC page
  await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
  //search and click created test
  await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
  //fetch end date
  await util.delay(1000);
  let endDateAfterSavingDate = await syntheticTestDetailPage.fetchEndDate();
  //validation
  await verification.verifySoftAssertTrue(endDateAfterSavingDate === "", 'end date should be null after removeing it.');
  //close test property page by clicking on cross icon
  await syntheticTestDetailPage.closePropertyPage();
  //In script its metion to wait for sometime, so adding wait for 15 sec
  await util.delay(15000);
  //search test
  await syntheticTestDetailPage.clickOnSearchedItemInCC(testName);
  //validation for active status
  await verification.verifySoftAssertForTextOfAnElement(synCCPage.getStatusText,'Active',"Test got inactive after removing end date");





});



