import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

/*
    CP-84760 : Verify Division Page Screenshot navigating by URL
*/
test("VerifyDivisionPageScreenshot @Screenshot", async({page, screenShotVerification, util,divisionPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await divisionPage.LoginToDivisionsPage();
    const maskedElement1 = await page.locator(divisionPage.divisionTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84761 : Verify Schedule Page Screenshot navigating by URL
*/
test("VerifySchedulePageScreenshot @Screenshot", async({page, screenShotVerification, util,schedulePage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await schedulePage.LoginToSchedulePage();
    const maskedElement1 = await page.locator(schedulePage.scheduleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84762 : Verify Userrole Page Screenshot navigating by URL
*/
test("VerifyUserrolePageScreenshot @Screenshot", async({page, screenShotVerification, util,userrolePage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await userrolePage.LoginToUserrolePage();
    const maskedElement1 = await page.locator(userrolePage.userroleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84763 : Verify Index Page Screenshot navigating by URL
*/
test("VerifyIndexPageScreenshot @Screenshot", async({page, screenShotVerification, util,indexPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await indexPage.LoginToIndexPage();
    const maskedElement1 = await page.locator(indexPage.indexTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84764 : Verify Zone Page Screenshot navigating by URL 
*/
test("VerifyZonePageScreenshot @Screenshot", async({page, screenShotVerification, util,zonePage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await zonePage.LoginToZonePage();
    await zonePage.waitForElement(zonePage.commonLocator('Download'));
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement([await page.locator(zonePage.zonesTableLocator)], screenShotName + '.png');
    
})
/*
    CP-84777 : Verify Division Page Screenshot navigating by left navigation
*/
test("VerifyDivisionPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,divisionPage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await sideNavigationBar.navigateToDivisionFromSideNavigation();
    const maskedElement1 = await page.locator(divisionPage.divisionTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84778 : Verify Schedule Page Screenshot navigating by left navigation
*/
test("VerifySchedulePageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,schedulePage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await sideNavigationBar.navigateToSchedulesPageFromSideNavigation();
    const maskedElement1 = await page.locator(schedulePage.scheduleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84779 : Verify Userrole Page Screenshot navigating by left navigation
*/
test("VerifyUserrolePageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,userrolePage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation();
    const maskedElement1 = await page.locator(userrolePage.userroleTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84780 : Verify Index Page Screenshot navigating by left navigation
*/
test("VerifyIndexPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,indexPage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await sideNavigationBar.navigateToIndexesPageFromSideNavigation();
    await indexPage.waitForElement(indexPage.commonLocator('Download'));
    const maskedElement1 = await page.locator(indexPage.indexTableLocator);
    const maskedElements = [maskedElement1];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84781 : Verify Zone Page Screenshot navigating by left navigation
*/
test("VerifyZonePageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,zonePage,sideNavigationBar,alertLogPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await alertLogPage.LoginToAlertsPage();
    await sideNavigationBar.navigateToZoneFromSideNavigation();
    await zonePage.waitForElement(zonePage.commonLocator('Download'));
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement([await page.locator(zonePage.zonesTableLocator)], screenShotName + '.png');
    
})

/*
CP-88790 : Take a screenshot for Create User Role page

*/
    test("VerifyUserrolecreatePageScreenshot @Screenshot", async({page, screenShotVerification, util,userrolePage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await userrolePage.LoginToUserrolePage();
    await userrolePage.click(userrolePage.userroleTableLocator);
    await userrolePage.click(userrolePage.createIconLocator);
    await util.delay(3000);
    const componentScreenshot =(userrolePage.UserRolePropertiesBladeLoacator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})

/*
 CP-88791 : Take a screenshot for Create Index page 
*/
test("VerifyIndexcreatePageScreenshot @Screenshot", async({page, screenShotVerification, util,indexPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await indexPage.LoginToIndexPage();
    await indexPage.click(indexPage.NewButtonLocator);
    const componentScreenshot =(indexPage.NewindexBladeLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
 
})

/*
CP-88792 : Take a screenshot for Create Zone page 
*/
test("VerifyZoneCreatePageScreenshot @Screenshot", async({page, screenShotVerification, util,zonePage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await zonePage.LoginToZonePage();
    await zonePage.click(zonePage.zonesCreateButtonLocator);
    const componentScreenshot =(zonePage.zoneCreateBladeLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})