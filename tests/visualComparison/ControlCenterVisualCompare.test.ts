import test from "@lib/BaseTest"
/*
    CP-84748 : Verify CC Page Screenshot navigating by URL 
*/
test("VerifyCCPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,synCCPage}, testInfo) => {
    await synCCPage.navigateToCCPageByURL();
    const maskedElement1 = await page.locator(synCCPage.synNavigationTreeLocator);
    const maskedElement2 = await page.locator(synCCPage.synDetailListLocator);
    const maskedElements = [maskedElement1,maskedElement2];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84749 : Verify Endpoint Page Screenshot navigating by URL
*/
test("VerifyEndpointPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,endpointControlCenter}, testInfo) => {
    await endpointControlCenter.navigateToEndpointsPageByURL();
    const maskedElement1 = await page.locator(endpointControlCenter.endPointNavigationTreeLocator);
    const maskedElement2 = await page.locator(endpointControlCenter.endpointsListLocator);
    const maskedElements = [maskedElement1,maskedElement2];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84750 : Verify Rum Page Screenshot navigating by URL
*/
test("VerifyRumPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,rumControCenter}, testInfo) => {
    await rumControCenter.navigateToRUMPageByURL();
    const maskedElement1 = await page.locator(rumControCenter.rumListLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84751 : Verify Library Page Screenshot navigating by URL
*/
test("VerifyLibraryPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,libraryControlCenter}, testInfo) => {
    await libraryControlCenter.navigateToLibraryPageByURL();
    const maskedElement1 = await page.locator(libraryControlCenter.librarkListLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84752 : Verify InternetSonar Page Screenshot navigating by URL
*/
test("VerifyInternetSonarPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,internetSonarCenterPage}, testInfo) => {
    await internetSonarCenterPage.navigateToInternetSonarPageByURL()
    const maskedElement1 = await page.locator(internetSonarCenterPage.internetSonarListLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})