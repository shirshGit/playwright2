import test from "@lib/BaseTest"
/*
    CP-84746 : Verify Contact Page Screenshot navigating by URL
*/
test("VerifyContactPageScreenshot @ScreenshotVerification", async({page, screenShotVerification, util,contactsPage}, testInfo) => {
    await contactsPage.LoginToContactsPage();
    const maskedElement1 = await page.locator(contactsPage.contactTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84747 : Verify ContactGroups Page Screenshot navigating by URL
*/
test("VerifyContactGroupsPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,contactGroupPage}, testInfo) => {
    await contactGroupPage.navigateToContactsGroupPageByURL();
    const maskedElement1 = await page.locator(contactGroupPage.contactGroupLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
     CP-84785 : Verify Contact Page Screenshot navigating by left navigation
*/
test("VerifyContactPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,contactsPage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    await util.delay(2000)
    const maskedElement1 = await page.locator(contactsPage.contactTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84786 : Verify ContactGroups Page Screenshot navigating by left navigation
*/
test("VerifyContactGroupsPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,contactGroupPage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToContactGroupPageFromSideNavigation();
    await util.delay(2000)
    const maskedElement1 = await page.locator(contactGroupPage.contactGroupLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})