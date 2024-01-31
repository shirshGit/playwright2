import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
/*
    CP-84760 : Verify Division Page Screenshot navigating by URL
*/
test("VerifyDivisionPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,divisionPage}, testInfo) => {
    await divisionPage.navigateToDivisionPageByURL();
    const maskedElement1 = await page.locator(divisionPage.divisionTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84761 : Verify Schedule Page Screenshot navigating by URL
*/
test("VerifySchedulePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,schedulePage}, testInfo) => {
    await schedulePage.navigateToSchedulePageByURL();
    const maskedElement1 = await page.locator(schedulePage.scheduleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84762 : Verify Userrole Page Screenshot navigating by URL
*/
test("VerifyUserrolePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,userrolePage}, testInfo) => {
    await userrolePage.navigateToUserrolePageByURL();
    const maskedElement1 = await page.locator(userrolePage.userroleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84763 : Verify Index Page Screenshot navigating by URL
*/
test("VerifyIndexPageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,indexPage}, testInfo) => {
    await indexPage.navigateToIndexPageByURL();
    const maskedElement1 = await page.locator(indexPage.indexTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84764 : Verify Zone Page Screenshot navigating by URL 
*/
test("VerifyZonePageScreenshot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,zonePage}, testInfo) => {
    await zonePage.navigateToZonePageByURL();
    const maskedElement1 = await page.locator(zonePage.zonesTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84777 : Verify Division Page Screenshot navigating by left navigation
*/
test("VerifyDivisionPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,divisionPage,sideNavigationBar}, testInfo) => {
    await util.delay(3000);
    await sideNavigationBar.navigateToDivisionFromSideNavigation();
    await util.delay(2000);
    const maskedElement1 = await page.locator(divisionPage.divisionTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84778 : Verify Schedule Page Screenshot navigating by left navigation
*/
test("VerifySchedulePageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,schedulePage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToSchedulesPageFromSideNavigation();
    await util.delay(3000);
    const maskedElement1 = await page.locator(schedulePage.scheduleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84779 : Verify Userrole Page Screenshot navigating by left navigation
*/
test("VerifyUserrolePageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,userrolePage,sideNavigationBar}, testInfo) => {
    await util.delay(3000);
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    await util.delay(1000);
    const maskedElement1 = await page.locator(userrolePage.userroleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84780 : Verify Index Page Screenshot navigating by left navigation
*/
test("VerifyIndexPageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,indexPage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToIndexesPageFromSideNavigation();
    await util.delay(3000);
    const maskedElement1 = await page.locator(indexPage.indexTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})
/*
    CP-84781 : Verify Zone Page Screenshot navigating by left navigation
*/
test("VerifyZonePageScreenshotByLeftNav @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util,zonePage,sideNavigationBar}, testInfo) => {
    await sideNavigationBar.navigateToZoneFromSideNavigation();
    await util.delay(3000);
    const maskedElement1 = await page.locator(zonePage.zonesTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})