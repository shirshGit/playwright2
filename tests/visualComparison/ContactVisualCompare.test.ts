import test from "@lib/BaseTest"

test("VerifyContactPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,contactsPage}, testInfo) => {
    await contactsPage.navigateToContactsPageByURL();
    const maskedElement1 = await page.locator(contactsPage.contactTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})

// test("VerifyContactGroupsPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,contactGroupPage}, testInfo) => {
//     await contactGroupPage.navigateToContactsGroupPageByURL();
//     const maskedElement1 = await page.locator(contactGroupPage.contactGroupLocator);
//     const maskedElements = [maskedElement1];
//     await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
// })