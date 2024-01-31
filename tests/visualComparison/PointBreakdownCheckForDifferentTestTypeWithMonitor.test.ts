import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    
*/
test("VerifyWebTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTransactionTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transactionTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPlaywrightTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('playwrightTestIDWitoutMonitor');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPuppeteerTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyWPTTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('wPTTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
visualViewport/*
    
*/
test("VerifyHTMLTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyAPITestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('aPITestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyWebSocketTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyStreamingTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('streamingTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyDNSTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('dnsTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyFTPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ftpTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTransportTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transportTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifySMTPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('smtpTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPingTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pingTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTracerouteTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyCustomTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('customTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyNTPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntpTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyIMAPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('imapTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyMQTTTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('mqttTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifySSLTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('sslTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyBGPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('bgpTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyNTNTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntnTestIDWithAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(2000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})


