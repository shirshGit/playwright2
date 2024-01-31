import test from "@lib/BaseTest"
/*
    CP-84742 : Verify Test Alerts Page Screenshot navigating by URL
*/
test("VerifyTestAlertsPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,alertLogPage}, testInfo) => {
    await alertLogPage.navigateToTestAlertsPageByURL();
    const maskedElement1 = await page.locator(alertLogPage.alertLogListLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84744 : Verify Rum Alerts Page Screenshot navigating by URL
*/
test("VerifyRumAlertsPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,rumAlertLogPage}, testInfo) => {
    await rumAlertLogPage.navigateToRUMAlertsTestPageByURL();
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');

})
/*
    CP-84745 : Verify InternetSonar Alerts Page Screenshot navigating by URL
*/
test("VerifyInternetSonarAlertsPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,internetSonarAlertLogPage}, testInfo) => {
    await internetSonarAlertLogPage.navigateToInternetSonarAlertsTestPageByURL();
    const maskedElement1 = await page.locator(internetSonarAlertLogPage.internetSonarAlertLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})

/*
    CP-84782 : Verify Test Alerts Page Screenshot navigating by left navigation
*/
test("VerifyTestAlertsPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,alertLogPage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    await util.delay(2000);
    const maskedElement1 = await page.locator(alertLogPage.alertLogListLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84783 : Verify Rum Alerts Page Screenshot navigating by left navigation
*/
test("VerifyRumAlertsPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,sideNavigationBar,alertLogPage}, testInfo) => {
    await sideNavigationBar.navigateToAlertLogFromSideNavigation()
    await alertLogPage.clickOnRumTab()
    await util.delay(2000);
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');

})
/*
    CP-84784 : Verify InternetSonar Alerts Page Screenshot navigating by left navigation
*/
test("VerifyInternetSonarAlertsPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,internetSonarAlertLogPage,sideNavigationBar,alertLogPage}, testInfo) => {
    await sideNavigationBar.navigateToAlertLogFromSideNavigation();
    await alertLogPage.clickOnInternetSonarTab()
    await util.delay(2000);
    const maskedElement1 = await page.locator(internetSonarAlertLogPage.internetSonarAlertLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})