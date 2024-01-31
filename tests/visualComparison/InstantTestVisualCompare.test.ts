import test from "@lib/BaseTest"
import { expect } from "@playwright/test";
/*
  CP-84753 : Verify Instant Test History Page Screenshot navigating by URL
*/
test("VerifyInstantTestHistoryPageScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTestHistory }, testInfo) => {
  await instantTestHistory.navigateToInstantTestHistoryPageByURL();
  const maskedElement1 = await page.locator(instantTestHistory.instantTestHistoryListLocator);
  const maskedElements = [maskedElement1];
  await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
})
/*
  CP-84754 : Verify Node InstantTest Page Screenshot navigating by URL
*/
test("VerifyNodeInstantTestPageScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
  await instantTest.navigateToInstantTestPageByURL();
  await util.delay(4000)
  await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');

})
/*
  CP-84755 : Verify Endpoint InstantTest History Page Screenshot navigating by URL
*/
test("VerifyEndpointInstantTestHistoryPageScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, endpointInstantTestPage,instantTestHistory }, testInfo) => {
  await endpointInstantTestPage.navigateToEndpointInstantTestPageByURL();
  await instantTestHistory.clickOnEndpointTab()
  await util.delay(3000);
  await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
  CP-84928 : Verify Endpoint Instant Test Create Page Screenshot by URL
*/
test("VerifyEndpointInstantTestCreatePageScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, endpointInstantTestPage,instantTestHistory }, testInfo) => {
  await endpointInstantTestPage.navigateToEndpointInstantTestPageByURL();
  await util.delay(2000);
  await instantTestHistory.clickOnEndpointTab()
  await endpointInstantTestPage.clickOnCreateInstantTest()
  await util.delay(3000);
  await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})

/*
  CP-84770 : Verify Instant Test History Page Screenshot navigating by left navigation
*/
test("VerifyInstantTestHistoryPageScreenshotByLeftNav @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTestHistory,sideNavigationBar }, testInfo) => {
  await sideNavigationBar.navigateToInstantTestHistoryFromSideNavigation();
  await util.delay(5000);
  const maskedElement1 = await page.locator(instantTestHistory.instantTestHistoryListLocator);
  const maskedElements = [maskedElement1];
  await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
})
/*
   CP-84771 : Verify Node InstantTest Page Screenshot navigating by left navigation
*/
test("VerifyNodeInstantTestPageScreenshotByLeftNav @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util,sideNavigationBar }, testInfo) => {
  await util.delay(3000);
  await sideNavigationBar.navigateToNewInstantTestFromSideNavigation();
  await util.delay(5000);
  await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');

})
/*
  CP-84772 : Verify Endpoint InstantTest Page Screenshot navigating by left navigation
*/
test("VerifyEndpointInstantTestHistoryPageScreenshotByLeftNav @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util,sideNavigationBar }, testInfo) => {
  await util.delay(3000);
  await sideNavigationBar.navigateToEndpointInstantTestHistoryFromSideNavigation();
  await util.delay(5000);
  await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
  CP-84927 : Verify Endpoint Instant Test Create Page Screenshot by left nav
*/
test("VerifyEndpointInstantTestCreatePageScreenshotByLeftNav @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, endpointInstantTestPage ,instantTestHistory,sideNavigationBar}, testInfo) => {
  await sideNavigationBar.navigateToEndpointInstantTestHistoryFromSideNavigation();
  await util.delay(1000);
  await endpointInstantTestPage.clickOnCreateInstantTest()
  await util.delay(2000);
  await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})