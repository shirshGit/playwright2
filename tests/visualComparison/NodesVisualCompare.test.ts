import test from "@lib/BaseTest"
/*
    CP-84756 : Verify Node Page Screenshot navigating by URL -
*/
test("VerifyNodePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeListPage}, testInfo) => {
    await nodeListPage.navigateToNodesPageByURL();
    await util.delay(20000)
    const maskedElement1 = await page.locator(nodeListPage.nodeTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84757 : Verify Node Groups Page Screenshot navigating by URL 
*/
test("VerifyNodeGroupsPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeGroupPage}, testInfo) => {
    await nodeGroupPage.navigateToNodeGroupPageByURL();
    await util.delay(20000)
    const maskedElement1 = await page.locator(nodeGroupPage.nodeGroupTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
     CP-84758 : Verify Node Instance Page Screenshot navigating by URL
*/
test("VerifyNodeInstancePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeInstancePage}, testInfo) => {
    await nodeInstancePage.navigateToNodeInstancePageByURL();
    await util.delay(20000)
    const maskedElement1 = await page.locator(nodeInstancePage.instanceTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84756 : Verify Node Page Screenshot navigating by URL
*/
test("VerifyNodeMapPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeMapPage}, testInfo) => {
    await nodeMapPage.navigateToNodeMapPageByURL();
    const maskedElement1 = await page.locator(nodeMapPage.mapLocator );
    await util.delay(3000)
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84773 : Verify Node Page Screenshot navigating by left navigation
*/
test("VerifyNodePageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeListPage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToNodeFromNodeSideNavigation();
    await util.delay(5000);
    const maskedElement1 = await page.locator(nodeListPage.nodeTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84774 : Verify Node Groups Page Screenshot navigating by left navigation
*/
test("VerifyNodeGroupsPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeGroupPage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToGroupsFromNodeSideNavigation();
    await util.delay(3000)
    const maskedElement1 = await page.locator(nodeGroupPage.nodeGroupTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84775 : Verify Node Instance Page Screenshot navigating by left navigation
*/
test("VerifyNodeInstancePageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeInstancePage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToInstancesFromNodeSideNavigation();
    await util.delay(3000)
    const maskedElement1 = await page.locator(nodeInstancePage.instanceTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84776 : Verify Node Map Page Screenshot navigating by left navigation
*/
test("VerifyNodeMapPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,nodeMapPage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToMapFromNodeSideNavigation();
    await util.delay(3000)
    const maskedElement1 = await page.locator(nodeMapPage.mapLocator );
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})