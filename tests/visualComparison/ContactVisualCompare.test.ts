import test from "@lib/BaseTest"
/*
    CP-84746 : Verify Contact Page Screenshot navigating by URL
*/
test("VerifyContactPageScreenshot @Screenshot", async({page, screenShotVerification, util,contactsPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await contactsPage.LoginToContactsPage();
    const maskedElements = [await page.locator(contactsPage.contactTableLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84747 : Verify ContactGroups Page Screenshot navigating by URL
*/
test("VerifyContactGroupsPageScreenshot @Screenshot", async({page, screenShotVerification, util,contactGroupPage,contactsPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await contactGroupPage.LoginToContactGroupPage();
    const maskedElements = [await page.locator(contactGroupPage.contactGroupLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84785 : Verify Contact Page Screenshot navigating by left navigation
*/
test("VerifyContactPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,contactsPage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await sideNavigationBar.navigateToContactPageFromSideNavigation();
    await util.delay(3000);
    const maskedElements = [await page.locator(contactsPage.contactTableLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84786 : Verify ContactGroups Page Screenshot navigating by left navigation
*/
test("VerifyContactGroupsPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,contactGroupPage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await sideNavigationBar.navigateToContactGroupPageFromSideNavigation();
    await util.delay(3000);
    const maskedElements = [await page.locator(contactGroupPage.contactGroupLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})

/*
CP-88751 : Take a screenshot for Create Contact page
*/
test("VerifyCreateContactPageScreenshot @Screenshot", async({page, screenShotVerification, util,contactsPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await contactsPage.LoginToContactsPage();
    await contactsPage.Click(contactsPage.createButtonLocator);
    const componentScreenshot = (contactsPage.createcontactPageLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})
