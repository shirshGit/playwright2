import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    CP-84975 : Web Test Point Est
*/
test("WebTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84976 : Transaction Test Point Est 
*/
test("TransactionTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transactionTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84977 : Playwright Test Point Est
*/
test("PlaywrightTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('playwrightTestIDWitoutMonitor');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84978 : Puppeteer Test Point Est
*/
test("PuppeteerTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84979 : HTML Test Point Est 
*/
test("HTMLTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84980 : API Test Point Est 
*/
test("APITestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('aPITestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84981 : WebSocket Test Point Est 
*/
test("WebSocketTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84982 : Streaming Test Point Est -
*/
test("StreamingTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('streamingTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84983 : DNS Test Point Est
*/
test("DNSTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('dnsTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84985 : FTP Test Point Est
*/
test("FTPTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ftpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
     CP-84984 : Transport Test Point Est -
*/
test("TransportTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transportTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84986 : SMTP Test Point Est 
*/
test("SMTPTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('smtpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
     CP-84987 : Ping Test Point Est 
*/
test("PingTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pingTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
     CP-84988 : Traceroute Test Point Est
*/
test("TracerouteTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84989 : Custom Test Point Est 
*/
test("CustomTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('customTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84990 : NTP Test Point Est 
*/
test("NTPTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84991 : IMAP Test Point Est
*/
test("IMAPTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('imapTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84992 : MQTT Test Point Est 
*/
test("MQTTTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('mqttTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84993 : SSL Test Point Est
*/
test("SSLTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('sslTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84994 : BGP Test Point Est 
*/
test("BGPTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('bgpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})
/*
    CP-84995 : NTN Test Point Est
*/
test("NTNTestPointEst @Screenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntnTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '.png');
})


