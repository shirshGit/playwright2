import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();

/*
CP-84996 : Web Test Point Est
*/
test("WebTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})

/*
    CP-84997 : Transaction Test Point Est -
*/
test("TransactionTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
   CP-84998 : Playwright Test Point Est
*/
test("PlaywrightTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('playwrightTestIDWitoutMonitor');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84999 : Puppeteer Test Point Est 
*/
test("PuppeteerTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
   CP-85000 : WPT Test Point Est  
*/
test("WPTTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    if (process.env.ENV === 'stage') {
        let screenShotName = testInfo.title.split(" ")[0]
        let testID = await data.getValueOfTheParameter('wptFolderID');
        await synCCPage.LoginToCCPage()
        await synCCPage.navigateToWPTTestPropertiesPage(testID);
        await syntheticTestDetailPage.clickOnPointBreakDown();
        await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
    }
})
/*
   CP-85001 : HTML Test Point Est 
*/
test("HTMLTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85002 : API Test Point Est 
*/
test("APITestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('aPITestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85003 : Web Socket Test Point Est  
*/
test("WebSocketTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85004 : Streaming Test Point Est 
*/
test("StreamingTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('streamingTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
     CP-85005 : DNS Test Point Est
*/
test("DNSTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('dnsTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85006 : FTP Test Point Est 
*/
test("FTPTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('ftpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85007 : Transport Test Point Est 
*/
test("TransportTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transportTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85008 : SMTP Test Point Est
*/
test("SMTPTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('smtpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85009 : Ping Test Point Est
*/
test("PingTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('pingTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85010 : Traceroute Test Point Est 
*/
test("TracerouteTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85011 : Custom Test Point Est
*/
test("CustomTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    let testID = await data.getValueOfTheParameter('customTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85012 : NTP Test Point Es
*/
test("NTPTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    let testID = await data.getValueOfTheParameter('ntpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85013 : IMAP Test Point Est
*/
test("IMAPTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    let testID = await data.getValueOfTheParameter('imapTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85014 : MQTT Test Point Est
*/
test("MQTTTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    let testID = await data.getValueOfTheParameter('mqttTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85015 : SSL Test Point Est
*/
test("SSLTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    let testID = await data.getValueOfTheParameter('sslTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
   CP-85016 : BGP Test Point Est  
*/
test("BGPTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    let testID = await data.getValueOfTheParameter('bgpTest');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-85017 : NTN Test Point Est
*/
test("NTNTestPointEst @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0];
    let testID = await data.getValueOfTheParameter('ntnTest');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})


