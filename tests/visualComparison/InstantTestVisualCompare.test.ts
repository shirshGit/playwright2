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
  await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');

})
/*
  CP-84755 : Verify Endpoint InstantTest Page Screenshot navigating by URL
*/
test("VerifyEndpointInstantTestPageScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, endpointInstantTestPage }, testInfo) => {
  await endpointInstantTestPage.navigateToEndpointInstantTestPageByURL();
  await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})