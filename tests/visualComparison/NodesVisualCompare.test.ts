// import test from "@lib/BaseTest"

// test("VerifyNodePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeListPage}, testInfo) => {
//     await nodeListPage.navigateToNodesPageByURL();
//     const maskedElement1 = await page.locator(nodeListPage.nodeTableLocator);
//     const maskedElements = [maskedElement1];
//     await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
// })

// test("VerifyNodeGroupsPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeGroupPage}, testInfo) => {
//     await nodeGroupPage.navigateToNodeGroupPageByURL();
//     const maskedElement1 = await page.locator(nodeGroupPage.nodeGroupTableLocator);
//     const maskedElements = [maskedElement1];
//     await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
// })