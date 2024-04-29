import test from "@lib/BaseTest"
import { SynControlCenterPage } from "@pageobjects/ControlCenter/SyntheticControlCenter";
import { SyntheticDetailPage } from "@pageobjects/ControlCenter/SyntheticDetailsPage";
import { DefaultDashboardPage } from "@pageobjects/OverviewDashboard/DefaultDashboardPage";
import { SyntheticProductDetailPage } from "@pageobjects/ControlCenter/SyntheticProductDeatils";
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
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
CP-88546 : Take a screenhot for Endpoint Section in Master create blade by clicking on left navigation 
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
 CP-88547 : Take a screenshot for RUM Section in Master create blade by clicking on left navigation 
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
CP-88548 : Take a screenshot for Library Section in Master create blade by clicking on left navigation

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
CP-88569 : Take a screenshot for Tracing Section in Master create blade by clicking on left navigation
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
CP-88572 : Take a screenhot for Test Section in Master create blade by clicking on left navigation 

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
CP-88573 : Take a screenshot for Script Template Section in Master create blade by clicking on left navigation
   
*/
test("VerifyControlCenterNewTemplateScreenshot @Screenshot", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    await synCCPage.click(synCCPage.newItemCreationLocator);
    await synCCPage.click(synCCPage.ScriptTemplateButtonLocator);
    await util.delay(3000);
    const maskedElements = [await page.locator(synCCPage.ScriptTemplateListViewLocator)];
    await util.delay(3000);
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, screenShotName + '.png');
    
})

/*
    CP-88574 : Take a screenshot for Test Suite Section in Master create blade by clicking on left navigation
*/
test("VerifyControlCenterNewTestSuiteScreenshot @Screenshot", async({page, screenShotVerification, util,synCCPage}, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await synCCPage.LoginToCCPage();
    await synCCPage.click(synCCPage.newItemCreationLocator);
    await synCCPage.click(synCCPage.TestSuiteButtonLocator);
    await synCCPage.click(synCCPage.TestSuiteLocator);
    const componentScreenshot =(synCCPage.TestSuiteLocator);
    await util.delay(3000);
    await screenShotVerification.verifyScreenShotOfAComponent(componentScreenshot, screenShotName + '.png');
    
})

/*
  CP-88906 : Take Web Test with Adv setting Screenshot 
*/

test("WebChromeTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88907 : Take Transaction Test with Adv setting Screenshot 
*/

test("TransactionTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88908 : Take PlaywrightTest with Adv setting Screenshot 
*/

test("PlaywrightTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('playwrightTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
  CP-88909 : Take pupperteerTest with Adv setting Screenshot 
*/

test("PupperteerTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
  CP-88910 : Take HTML Test with Adv setting Screenshot
*/
test("HtmlTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
   CP-88911 : Take API Test with Adv setting Screenshot 
*/
test("ApiTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('aPITestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88912 : Take WebSocket Test with Adv setting Screenshot 
*/
test("WebSocketTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88913 : Take Streaming Test with Adv setting Screenshot 
*/
test("StreamingTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('streamingTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88914 : Take DNS Test with Adv setting Screenshot - 
*/
test("DnsTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('dnsTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88915 : Take FTP Test with Adv setting Screenshot 
*/
test("FtpTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('ftpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88916 : Take Transport Test with Adv setting Screenshot 
*/
test("TransportTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transportTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88917 : Take SMTP Test with Adv setting Screenshot 
*/
test("SmtpTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('smtpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
   CP-88918 : Take Ping Test with Adv setting Screenshot
*/
test("PingTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('pingTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
   CP-88919 : Take Traceroute Test with Adv setting Screenshot 
*/
test("TracerouteTestadvsettings @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  
*/
test("CustomTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('customTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88921 : Take NTP Test with Adv setting Screenshot 
*/
test("NtpTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('ntpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
   CP-88922 : Take IMAP Test with Adv setting Screenshot 
*/
test("ImapTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('imapTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88923 : Take MQTT Test with Adv setting Screenshot 
*/
test("MqttTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('mqttTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
  CP-88924 : Take SSL Test with Adv setting Screenshot 
*/
test("SslTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('sslTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
 CP-88961 : Take CustomTest with Adv setting Screenshot 
*/
test("CustomMonitorTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('customMonitorTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-88962 : Take DNS Experience Test with Adv setting Screenshot
*/
test("DnsexperienceTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('dnsexperienceTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-88963 : Take Html Emulated Test with Adv setting Screenshot
*/
test("HtmlEmulatedTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('hTMLEmulatedTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
 CP-88964 : Take Html IE Test with Adv setting Screenshot
*/
test("HtmlIETestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('hTMLIETestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
  CP-88965 : Take Html Mobile Test with Adv setting Screenshot 
*/
test("HtmlMobileTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('hTMLMobileTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
  CP-88966 : Take Ping TCP Test with Adv setting Screenshot -
*/
test("PingTCPTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('pingTCPTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
 CP-88967 : Take Playwright EdgeTest with Adv setting Screenshot
*/
test("PlaywrightEdgeTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('playwrightEdgeTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-88968 : Take Ping UDP Test with Adv setting Screenshot 
*/
test("PingUDPTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('pingUDPTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
 CP-88969 : Take Web Edge Test with Adv setting Screenshot
*/
test("WebEdgeTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webEdgeTestWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
 CP-88970 : Take Web Emulated Test with Adv setting Screenshot 
*/
test("WebEmulatedTestadvsettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webEmulatedTestWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})
/*
  CP-88971 : Take Web IE Test with Adv setting Screenshot 
*/
test("WebIETestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webEmulatedTestWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-88972 : Take Web Mobile Test with Adv setting Screenshot 
*/
test("WebMobileTestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webMobileTestWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-88973 : Take Web Mobile Playback Test with Adv setting Screenshot
*/
test("WebMobilePlaybackTestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webMobilePlaybackTestWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-88974 : Take Web Playback Test with Adv setting Screenshot -
*/
test("WebPlaybackTestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webPlaybackTestWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-88975 : Take Web Obj Test with Adv setting Screenshot
*/
test("WebObjTestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webObjTestWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-88976 : Take traceroute Insession Test with Adv setting Screenshot 
*/
test("TracerouteInsessionTestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('tracerouteInsessionTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})


/*
 CP-88977 : Take traceroute Quick Test with Adv setting Screenshot
*/
test("TracerouteQuickTestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('tracerouteQuickTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})


/*
 CP-88978 : Take traceroute TCP Test with Adv setting Screenshot 
*/
test("TracerouteTCPTestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('tracerouteTCPTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-89123 : Take traceroute UDP Test with Adv setting Screenshot -
*/
test("TracerouteUDPWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('tracerouteUDPTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
  CP-89124 : Take transaction Emulated Test with Adv setting Screenshot 
*/
test("TransactionEmulatedWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionEmulatedTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-89125 : Take transaction IE Test with Adv setting Screenshot -
*/
test("TransactionIETestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionIETestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
 CP-89126 : Take transaction Mobile Test with Adv setting Screenshot 
*/
test("TransactionMobileTestWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionMobileTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})

/*
  CP-89127 : Take Transport UDP Test with Adv setting Screenshot
*/
test("TransportUdpWithAdvsSettings @Screenshot@show123", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transportUdpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await synCCPage.click(synCCPage.NewAdvancesettingSectionLocator);
    await screenShotVerification.verifyScreenShotOfAComponent(synCCPage.AdvsettingSectionLocator, screenShotName + '.png');
})


