import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    CP-84996 : Web Test Point Est
*/
test("WebTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84997 : Transaction Test Point Est -
*/
test("TransactionTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transactionTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
   CP-84998 : Playwright Test Point Est
*/
test("PlaywrightTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('playwrightTestIDWitoutMonitor');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84999 : Puppeteer Test Point Est 
*/
test("PuppeteerTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
   CP-85000 : WPT Test Point Est  
*/
test("WPTTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    if (process.env.ENV === 'stage') {
        let testID = await data.getValueOfTheParameter('wptFolderID');
        await synCCPage.LoginToCCPage()
        await synCCPage.navigateToWPTTestPropertiesPage(testID);
        await syntheticTestDetailPage.clickOnPointBreakDown();
        await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
    }
})
/*
   CP-85001 : HTML Test Point Est 
*/
test("HTMLTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85002 : API Test Point Est 
*/
test("APITestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('aPITestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85003 : Web Socket Test Point Est  
*/
test("WebSocketTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85004 : Streaming Test Point Est 
*/
test("StreamingTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('streamingTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
     CP-85005 : DNS Test Point Est
*/
test("DNSTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('dnsTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85006 : FTP Test Point Est 
*/
test("FTPTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ftpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85007 : Transport Test Point Est 
*/
test("TransportTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transportTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85008 : SMTP Test Point Est
*/
test("SMTPTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('smtpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85009 : Ping Test Point Est
*/
test("PingTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pingTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85010 : Traceroute Test Point Est 
*/
test("TracerouteTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85011 : Custom Test Point Est
*/
test("CustomTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('customTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85012 : NTP Test Point Es
*/
test("NTPTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85013 : IMAP Test Point Est
*/
test("IMAPTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('imapTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85014 : MQTT Test Point Est
*/
test("MQTTTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('mqttTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85015 : SSL Test Point Est
*/
test("SSLTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('sslTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
   CP-85016 : BGP Test Point Est  
*/
test("BGPTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('bgpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-85017 : NTN Test Point Est
*/
test("NTNTestPointEst @Screenshot", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntnTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})


