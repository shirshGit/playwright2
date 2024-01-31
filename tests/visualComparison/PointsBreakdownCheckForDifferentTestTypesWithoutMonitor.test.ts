import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    
*/
test("VerifyWebTestPointBreakdownScreenshot @PointEstScreenshot", async ({page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
 */
test("VerifyTransactionTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transactionTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
 /*
    
*/
test("VerifyPlaywrightTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('playwrightTestIDWitoutMonitor');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPuppeteerTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyWPTTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('wPTTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyHTMLTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyAPITestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('aPITestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyWebSocketTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyStreamingTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('streamingTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyDNSTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('dnsTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyFTPTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ftpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTransportTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transportTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifySMTPTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('smtpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPingTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pingTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTracerouteTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyCustomTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('customTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyNTPTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyIMAPTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('imapTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyMQTTTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('mqttTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifySSLTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('sslTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyBGPTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('bgpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyNTNTestPointBreakdownScreenshot @PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntnTestIDWithoutAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(5000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})


