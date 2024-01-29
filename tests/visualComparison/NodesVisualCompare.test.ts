import test from "@lib/BaseTest"
/*
    CP-84756 : Verify Node Page Screenshot navigating by URL -
*/
test("VerifyNodePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeListPage}, testInfo) => {
    await nodeListPage.navigateToNodesPageByURL();
    const maskedElement1 = await page.locator(nodeListPage.nodeTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84757 : Verify Node Groups Page Screenshot navigating by URL 
*/
test("VerifyNodeGroupsPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeGroupPage}, testInfo) => {
    await nodeGroupPage.navigateToNodeGroupPageByURL();
    const maskedElement1 = await page.locator(nodeGroupPage.nodeGroupTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
     CP-84758 : Verify Node Instance Page Screenshot navigating by URL
*/
test("VerifyNodeInstancePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeInstancePage}, testInfo) => {
    await nodeInstancePage.navigateToNodeInstancePageByURL();
    const maskedElement1 = await page.locator(nodeInstancePage.instanceTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84756 : Verify Node Page Screenshot navigating by URL -
*/
test("VerifyNodeMapPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeMapPage}, testInfo) => {
    await nodeMapPage.navigateToNodeMapPageByURL();
    const maskedElement1 = await page.locator(nodeMapPage.mapLocator );
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})