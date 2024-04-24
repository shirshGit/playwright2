import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    CP-84975 : Web Test Point Est
*/
test("WebTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})



/*
    CP-84976 : Transaction Test Point Est 
*/
test("TransactionTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84977 : Playwright Test Point Est
*/
test("PlaywrightTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('playwrightTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84978 : Puppeteer Test Point Est
*/
test("PuppeteerTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84979 : HTML Test Point Est 
*/
test("HTMLTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84980 : API Test Point Est 
*/
test("APITestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('aPITestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84981 : WebSocket Test Point Est 
*/
test("WebSocketTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84982 : Streaming Test Point Est -
*/
test("StreamingTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('streamingTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84983 : DNS Test Point Est
*/
test("DNSTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('dnsTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84985 : FTP Test Point Est
*/
test("FTPTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('ftpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
     CP-84984 : Transport Test Point Est -
*/
test("TransportTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transportTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84986 : SMTP Test Point Est 
*/
test("SMTPTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('smtpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
     CP-84987 : Ping Test Point Est 
*/
test("PingTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('pingTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
     CP-84988 : Traceroute Test Point Est
*/
test("TracerouteTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84989 : Custom Test Point Est 
*/
test("CustomTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('customTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84990 : NTP Test Point Est 
*/
test("NTPTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('ntpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84991 : IMAP Test Point Est
*/
test("IMAPTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('imapTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84992 : MQTT Test Point Est 
*/
test("MQTTTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('mqttTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
/*
    CP-84993 : SSL Test Point Est
*/
test("SSLTestPointEst @Screenshot@PointEst", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('sslTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})


