import test from "@lib/BaseTest"
import { SynControlCenterPage } from "@pageobjects/ControlCenter/SyntheticControlCenter";
import { DefaultDashboardPage } from "@pageobjects/OverviewDashboard/DefaultDashboardPage";
/*
    CP-84748 : Verify CC Page Screenshot navigating by URL 
*/
test("VerifyCCPageScreenshot @Screenshot", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    const maskedElements = [await page.locator(synCCPage.synNavigationTreeLocator),await page.locator(synCCPage.synDetailListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84749 : Verify Endpoint Page Screenshot navigating by URL
*/
test("VerifyEndpointPageScreenshot @Screenshot", async({page, screenShotVerification, util,endpointControlCenter,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await endpointControlCenter.LoginToEndpointCCPage();
    const maskedElements = [await page.locator(endpointControlCenter.endPointNavigationTreeLocator),await page.locator(endpointControlCenter.endpointsListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84750 : Verify Rum Page Screenshot navigating by URL
*/
test("VerifyRumPageScreenshot @Screenshot", async({page, screenShotVerification, util,rumControCenter,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await rumControCenter.LoginToRUMCCPage();
    const maskedElements = [await page.locator(rumControCenter.rumListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84751 : Verify Library Page Screenshot navigating by URL
*/
test("VerifyLibraryPageScreenshot @Screenshot", async({page, screenShotVerification, util,libraryControlCenter,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await libraryControlCenter.LoginToLibraryCCPage();
    const maskedElements = [await page.locator(libraryControlCenter.libraryListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84752 : Verify InternetSonar Page Screenshot navigating by URL
*/
test("VerifyInternetSonarPageScreenshot @Screenshot", async({page, screenShotVerification, util,internetSonarCenterPage,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    await internetSonarCenterPage.LoginToInternetSonarCCPage();
    const maskedElements = [await page.locator(internetSonarCenterPage.internetSonarListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})

/*
    CP-84787 : CC Page Screenshot navigating by left navigation
*/
test("VerifyCCPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,synCCPage,sideNavigationBar,alertLogPage}, testInfo) => {
    await alertLogPage.LoginToAlertsPage()
    let screenShotName = testInfo.title.split(" ")[0];
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    const maskedElements = [await page.locator(synCCPage.synNavigationTreeLocator),await page.locator(synCCPage.synDetailListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84766 : Verify Endpoint Page Screenshot navigating by left navigation
*/
test("VerifyEndpointPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,endpointControlCenter,sideNavigationBar,synCCPage,alertLogPage}, testInfo) => {
    await alertLogPage.LoginToAlertsPage()
    let screenShotName = testInfo.title.split(" ")[0];
    await sideNavigationBar.navigateToEndpointCCFromSideNavigation();
    await util.delay(2000);
    const maskedElements = [await page.locator(endpointControlCenter.endPointNavigationTreeLocator),await page.locator(endpointControlCenter.endpointsListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84767 : Verify Rum Page Screenshot navigating by left navigation
*/
test("VerifyRumPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,rumControCenter,sideNavigationBar,synCCPage,alertLogPage}, testInfo) => {
    await alertLogPage.LoginToAlertsPage()
    let screenShotName = testInfo.title.split(" ")[0];
    await sideNavigationBar.navigateToRUMFromSideNavigation();
    const maskedElements = [await page.locator(rumControCenter.rumListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84768 : Verify Library Page Screenshot navigating by left navigation
*/
test("VerifyLibraryPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,libraryControlCenter,sideNavigationBar,synCCPage,alertLogPage}, testInfo) => {
    await alertLogPage.LoginToAlertsPage()
    let screenShotName = testInfo.title.split(" ")[0];
    await sideNavigationBar.navigateToLibraryCCFromSideNavigation();
    const maskedElements = [await page.locator(libraryControlCenter.libraryListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})
/*
    CP-84769 : Verify InternetSonar Page Screenshot navigating by left navigation 
*/
test("VerifyInternetSonarPageScreenshotByLeftNav @Screenshot", async({page, screenShotVerification, util,internetSonarCenterPage,sideNavigationBar,synCCPage,alertLogPage}, testInfo) => {
    await alertLogPage.LoginToAlertsPage();
    let screenShotName = testInfo.title.split(" ")[0];
    await sideNavigationBar.navigateToInternetSonarCCFromSideNavigation();
    const maskedElements = [await page.locator(internetSonarCenterPage.internetSonarListLocator)];
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})

/*

*/

test("VerifyControlCenterNewEndpointScreenshot @Screenshot", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    await synCCPage.click(synCCPage.newItemCreationLocator);   
    await synCCPage.click(synCCPage.endpointcreateButtonLocator);
    const componentScreenshot =(synCCPage.endpointcreateBladeLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})


/*

*/

test("VerifyControlCenterNewRUMScreenshot @Screenshots", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    await synCCPage.click(synCCPage.newItemCreationLocator);   
    await synCCPage.click(synCCPage.RUMcreateButtonLocator);
    const componentScreenshot =(synCCPage.RUMcreateBladeLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})
/*

*/

test("VerifyControlCenterNewLibraryScreenshot @Screenshot", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    await synCCPage.click(synCCPage.newItemCreationLocator);   
    await synCCPage.click(synCCPage.LibrarycreateButtonLocator);
    const componentScreenshot =(synCCPage.LibrarycreateBladeLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})

/*

*/

test("VerifyControlCenterNewTracingScreenshot @Screenshot", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    await synCCPage.click(synCCPage.newItemCreationLocator);   
    await synCCPage.click(synCCPage.TracingcreateButtonLocator);
    const componentScreenshot =(synCCPage.TracingcreateBladeLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})

/*

*/

test("VerifyControlCenterNewTestScreenshot @Screenshot", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    await synCCPage.click(synCCPage.newItemCreationLocator);   
    await synCCPage.click(synCCPage.TestcreateButtonLocator);
    const componentScreenshot =(synCCPage.TestcreateBladeLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})

/*
   
*/
test("VerifyControlCenterNewTemplateScreenshot @Screenshot@P22", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    await synCCPage.click(synCCPage.newItemCreationLocator);
    await synCCPage.click(synCCPage.ScriptTemplateButtonLocator);
    await util.delay(3000);
    //await synCCPage.hover(synCCPage.ScriptTemplateBladeLocator);
    const maskedElements = [await page.locator(synCCPage.ScriptTemplateListViewLocator)];
    await util.delay(3000);
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})