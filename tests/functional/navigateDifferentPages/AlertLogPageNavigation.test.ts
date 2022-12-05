import test from "@lib/BaseTest";

test("VerifyAlertLgPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, sideNavigationBar, verification,alertLogPage, util}) => {
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    await util.delay(2000);
    await verification.verifyIfElementIsPresent(alertLogPage.alertSectionForTestsLocator, 'Alert Log Create is not present');
    await verification.verifyIfElementIsPresent(alertLogPage.alertSectionForRumLocator,'RUM Alert Section is not present');
    await verification.verifyIfElementIsPresent(alertLogPage.testIDHeaderInAlertLogListLocator, 'Report List Create is not present');
})