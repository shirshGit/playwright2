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
    
*/
test("VerifyTestAlertsPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,alertLogPage}, testInfo) => {
    await alertLogPage.navigateToTestAlertsPageByURL();
    const maskedElement1 = await page.locator(alertLogPage.alertLogListLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    
*/
test("VerifyRumAlertsPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,rumAlertLogPage}, testInfo) => {
    await rumAlertLogPage.navigateToRUMAlertsTestPageByURL();
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');

})
/*
    
*/
test("VerifyInternetSonarAlertsPageScreenshotByLeftBav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,internetSonarAlertLogPage}, testInfo) => {
    await internetSonarAlertLogPage.navigateToInternetSonarAlertsTestPageByURL();
    const maskedElement1 = await page.locator(internetSonarAlertLogPage.internetSonarAlertLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})