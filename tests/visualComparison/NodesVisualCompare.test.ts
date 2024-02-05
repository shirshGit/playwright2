import test from "@lib/BaseTest"
/*
    CP-84756 : Verify Node Page Screenshot navigating by URL -
*/
test.skip("VerifyNodePageScreenshot @Screenshot", async({page, screenShotVerification, util,nodeListPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await nodeListPage.LoginToNodeListPage();
    const maskedElements = [await page.locator(nodeListPage.nodeTableLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84757 : Verify Node Groups Page Screenshot navigating by URL 
*/
test.skip("VerifyNodeGroupsPageScreenshot @Screenshot", async({page, screenShotVerification, util,nodeGroupPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await nodeGroupPage.LoginToNodeGroupPage();
    const maskedElements = [await page.locator(nodeGroupPage.nodeGroupTableLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
     CP-84758 : Verify Node Instance Page Screenshot navigating by URL
*/
test.skip("VerifyNodeInstancePageScreenshot @Screenshot", async({page, screenShotVerification, util,nodeInstancePage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await nodeInstancePage.LoginToInstancePage();
    const maskedElements = [await page.locator(nodeInstancePage.instanceTableLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84756 : Verify Node Page Screenshot navigating by URL
*/
test.skip("VerifyNodeMapPageScreenshot @Screenshot", async({page, screenShotVerification, util,nodeMapPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await nodeMapPage.LoginToNodeMapPage();
    const maskedElements = [await page.locator(nodeMapPage.mapLocator )];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84773 : Verify Node Page Screenshot navigating by left navigation
*/
test.skip("VerifyNodePageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,nodeListPage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await util.delay(3000);
    await sideNavigationBar.navigateToNodeFromNodeSideNavigation();
    const maskedElements = [await page.locator(nodeListPage.nodeTableLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84774 : Verify Node Groups Page Screenshot navigating by left navigation
*/
test.skip("VerifyNodeGroupsPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,nodeGroupPage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await util.delay(3000);
    await sideNavigationBar.navigateToGroupsFromNodeSideNavigation();
    const maskedElements = [await page.locator(nodeGroupPage.nodeGroupTableLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84775 : Verify Node Instance Page Screenshot navigating by left navigation
*/
test.skip("VerifyNodeInstancePageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,nodeInstancePage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await util.delay(3000);
    await sideNavigationBar.navigateToInstancesFromNodeSideNavigation();
    const maskedElements = [await page.locator(nodeInstancePage.instanceTableLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84776 : Verify Node Map Page Screenshot navigating by left navigation
*/
test("VerifyNodeMapPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,nodeMapPage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await util.delay(3000);
    await sideNavigationBar.navigateToMapFromNodeSideNavigation();
    const maskedElements = [await page.locator(nodeMapPage.mapLocator )];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})