import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    
*/
test("VerifyWebTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTransactionTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transactionTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPlaywrightTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('playwrightTestIDWitoutMonitor');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPuppeteerTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyWPTTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('wPTTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
visualViewport/*
    
*/
test("VerifyHTMLTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyAPITestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('aPITestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyWebSocketTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyStreamingTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('streamingTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyDNSTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('dnsTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyFTPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ftpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTransportTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transportTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifySMTPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('smtpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPingTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pingTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTracerouteTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyCustomTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('customTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyNTPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyIMAPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('imapTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyMQTTTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('mqttTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifySSLTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('sslTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyBGPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('bgpTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyNTNTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntnTestIDWithAdvsSettings');
    await synCCPage.LoginToCCPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})


