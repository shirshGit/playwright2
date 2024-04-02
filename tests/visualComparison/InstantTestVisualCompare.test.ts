import test from "@lib/BaseTest"
import { expect } from "@playwright/test";
/*
  CP-84753 : Verify Instant Test History Page Screenshot navigating by URL
*/
test("VerifyInstantTestHistoryPageScreenshot @Screenshot", async ({ page, screenShotVerification, util, instantTestHistory,alertLogPage }, testInfo) => {
  let stringArray = testInfo.title.split(" ");
  let screenShotName = stringArray[0];
  await instantTestHistory.LoginToInstantTestHistoryPage();
  const maskedElement1 = await page.locator(instantTestHistory.instantTestHistoryListLocator);
  const maskedElements = [maskedElement1];
  await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
})
/*
  CP-84754 : Verify Node InstantTest Page Screenshot navigating by URL
*/
test("VerifyNodeInstantTestPageScreenshot @Screenshot", async ({ page, screenShotVerification, util, instantTest }, testInfo) => {
  let stringArray = testInfo.title.split(" ");
  let screenShotName = stringArray[0];
  await instantTest.LoginToNewInstantTestPage();
  await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');

})
/*
  CP-84755 : Verify Endpoint InstantTest History Page Screenshot navigating by URL
*/
test("VerifyEndpointInstantTestHistoryPageScreenshot @Screenshot", async ({ page, screenShotVerification, util, endpointInstantTestPage,instantTestHistory }, testInfo) => {
  let stringArray = testInfo.title.split(" ");
  let screenShotName = stringArray[0];
  await endpointInstantTestPage.LoginToEndpointInstantTestHistoryPage();
  await util.delay(3000);
  await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
  CP-84928 : Verify Endpoint Instant Test Create Page Screenshot by URL
*/
test("VerifyEndpointInstantTestCreatePageScreenshot @Screenshot", async ({ page, screenShotVerification, util, endpointInstantTestPage,instantTestHistory }, testInfo) => {
  let stringArray = testInfo.title.split(" ");
  let screenShotName = stringArray[0];
  await endpointInstantTestPage.LoginToEndpointInstantTestHistoryPage();
  await util.delay(2000);
  await endpointInstantTestPage.clickOnCreateInstantTest()
  await util.delay(1000);
  await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})

/*
  CP-84770 : Verify Instant Test History Page Screenshot navigating by left navigation
*/
test("VerifyInstantTestHistoryPageScreenshotByLeftNav @Screenshot", async ({ page, screenShotVerification, util, instantTestHistory,sideNavigationBar,alertLogPage }, testInfo) => {
  let stringArray = testInfo.title.split(" ");
  let screenShotName = stringArray[0];
  await alertLogPage.LoginToAlertsPage();
  await sideNavigationBar.navigateToInstantTestHistoryFromSideNavigation();
  const maskedElements = [await page.locator(instantTestHistory.instantTestHistoryListLocator)];
  await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
})
/*
   CP-84771 : Verify Node InstantTest Page Screenshot navigating by left navigation
*/
test("VerifyNodeInstantTestPageScreenshotByLeftNav @Screenshot", async ({ page, screenShotVerification, util,sideNavigationBar,alertLogPage }, testInfo) => {
  let stringArray = testInfo.title.split(" ");
  let screenShotName = stringArray[0];
  await alertLogPage.LoginToAlertsPage();
  await sideNavigationBar.navigateToNewInstantTestFromSideNavigation();
  await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');

})
/*
  CP-84772 : Verify Endpoint InstantTest Page Screenshot navigating by left navigation
*/
test("VerifyEndpointInstantTestHistoryPageScreenshotByLeftNav @Screenshot", async ({ page, screenShotVerification, util,sideNavigationBar ,alertLogPage}, testInfo) => {
  let stringArray = testInfo.title.split(" ");
  let screenShotName = stringArray[0];
  await alertLogPage.LoginToAlertsPage();
  await sideNavigationBar.navigateToEndpointInstantTestHistoryFromSideNavigation();
  await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
  CP-84927 : Verify Endpoint Instant Test Create Page Screenshot by left nav
*/
test("VerifyEndpointInstantTestCreatePageScreenshotByLeftNav @Screenshot", async ({ page, screenShotVerification, util, endpointInstantTestPage ,alertLogPage,sideNavigationBar}, testInfo) => {
  let stringArray = testInfo.title.split(" ");
  let screenShotName = stringArray[0];
  await alertLogPage.LoginToAlertsPage();
  await sideNavigationBar.navigateToEndpointInstantTestHistoryFromSideNavigation();
  await util.delay(1000);
  await endpointInstantTestPage.clickOnCreateInstantTest();
  await endpointInstantTestPage.waitForElement(endpointInstantTestPage.endpointInputBoxLocator);
  await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})