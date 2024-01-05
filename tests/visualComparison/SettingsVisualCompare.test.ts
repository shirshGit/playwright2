import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

test("VerifyDivisionPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,divisionPage}, testInfo) => {
    await divisionPage.navigateToDivisionPageByURL();
    const maskedElement1 = await page.locator(divisionPage.divisionTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})

test("VerifySchedulePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,schedulePage}, testInfo) => {
    await schedulePage.navigateToSchedulePageByURL();
    const maskedElement1 = await page.locator(schedulePage.scheduleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
// test("VerifyUserrolePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,userrolePage}, testInfo) => {
//     await userrolePage.navigateToUserrolePageByURL();
//     const maskedElement1 = await page.locator(userrolePage.userroleTableLocator);
//     const maskedElements = [maskedElement1];
//     await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
// })
// test("VerifyIndexPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,indexPage}, testInfo) => {
//     await indexPage.navigateToIndexPageByURL();
//     const maskedElement1 = await page.locator(indexPage.indexTableLocator);
//     const maskedElements = [maskedElement1];
//     await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
// })
// test("VerifyZonePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,zonePage}, testInfo) => {
//     await zonePage.navigateToZonePageByURL();
//     const maskedElement1 = await page.locator(zonePage.zonesTableLocator);
//     const maskedElements = [maskedElement1];
//     await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
// })