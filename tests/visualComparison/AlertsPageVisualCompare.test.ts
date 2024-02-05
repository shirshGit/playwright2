import test from "@lib/BaseTest"
/*
    CP-84742 : Verify Test Alerts Page Screenshot navigating by URL
*/
test("VerifyTestAlertsPageScreenshot @Screenshot", async({page, screenShotVerification, util,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await alertLogPage.LoginToAlertsPage();
    await util.delay(9000);
    const maskedElements = [await page.locator(alertLogPage.alertLogListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName+ '.png');
    
})

/*
    CP-84744 : Verify Rum Alerts Page Screenshot navigating by URL
*/
test("VerifyRumAlertsPageScreenshot @Screenshot", async({page, screenShotVerification, util,rumAlertLogPage,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await rumAlertLogPage.LoginToRumAlertsPage();
    await util.delay(4000);
    const maskedElements = [await page.locator(rumAlertLogPage.rumAlertsListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName+ '.png');
    
})
/*
    CP-84745 : Verify InternetSonar Alerts Page Screenshot navigating by URL
*/
test("VerifyInternetSonarAlertsPageScreenshot @Screenshot", async({page, screenShotVerification, util,internetSonarAlertLogPage,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await internetSonarAlertLogPage.LoginToInternetSonarAlertsPage();
    await util.delay(4000);
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');

})

/*
    CP-84782 : Verify Test Alerts Page Screenshot navigating by left navigation
*/
test("VerifyTestAlertsPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,alertLogPage,sideNavigationBar,instantTestHistoryPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    await util.delay(9000);
    const maskedElements = [await page.locator(alertLogPage.alertLogListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84783 : Verify Rum Alerts Page Screenshot navigating by left navigation
*/
test("VerifyRumAlertsPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,sideNavigationBar,rumAlertLogPage,instantTestHistoryPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    await sideNavigationBar.navigateToRumAlertLogFromSideNavigation();
    await util.delay(4000);
    const maskedElements = [await page.locator(rumAlertLogPage.rumAlertsListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName+ '.png');
    
})
/*
    CP-84784 : Verify InternetSonar Alerts Page Screenshot navigating by left navigation
*/
test("VerifyInternetSonarAlertsPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,internetSonarAlertLogPage,sideNavigationBar,alertLogPage,instantTestHistoryPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await instantTestHistoryPage.LoginToInstantTestHistoryPage();
    await sideNavigationBar.navigateToInternetSonarAlertLogFromSideNavigation();
    await util.delay(4000);
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');

})