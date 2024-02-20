import test from "@lib/BaseTest";
/*
  CP-44186 : Verify Synthetic alert log page load properly
*/
test("VerifySyntheticAlertLgPageLoads @PageNavigation@ProductionSmoke@Smoke", async ({ instantTestHistoryPage, sideNavigationBar, verification, alertLogPage, util }) => {
  //login to instant test history page 
  await instantTestHistoryPage.LoginToInstantTestHistoryPage();
  //navigate to alerts page by left nav
  await sideNavigationBar.navigateToAlertLogFromSideNavigation();
  //validation for errors
  await verification.validationsForPage();
  await verification.verifyIfElementIsPresent(alertLogPage.alertLogListLocator, 'test Id header is not present');
})

/*
  CP-44187 : Verify RUM alert log page load properly
*/
test("VerifyRumAlertLgPageLoads @PageNavigation@ProductionSmoke@Smoke", async ({ instantTestHistoryPage, sideNavigationBar, verification, rumAlertLogPage, util }) => {
  //login to instant test history page 
  await instantTestHistoryPage.LoginToInstantTestHistoryPage();
  //navigate to alerts page by left nav
  await sideNavigationBar.navigateToRumAlertLogFromSideNavigation();
  //validation for errors
  await verification.validationsForPage();
  //await verification.verifyIfElementIsPresent(rumAlertLogPage.rumAlertsListLocator, 'RUM Alert Section is not present');
  })
