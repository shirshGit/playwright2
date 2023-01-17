import test from "@lib/BaseTest";
/*
  CP-44186 : Verify Synthetic alert log page load properly
*/
test("VerifySyntheticAlertLgPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,alertLogPage, util}) => {
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(alertLogPage.alertSectionForTestsLocator, 'Alert section for test is not present');
    await verification.verifyIfElementIsPresent(alertLogPage.testIDHeaderInAlertLogListLocator, 'test Id header is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    
})

/*
  CP-44187 : Verify RUM alert log page load properly
*/
test("VerifyRumAlertLgPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,alertLogPage, util}) => {
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(alertLogPage.alertSectionForRumLocator,'RUM Alert Section is not present');
    await verification.verifyIfElementIsPresent(alertLogPage.searchBoxLocator,'Search Box is not present');
    //validation for something went wrong
    await verification.verifyTextIsPresentInPage("'Something went wrong!'",'getting something went wrong message.');
    

})