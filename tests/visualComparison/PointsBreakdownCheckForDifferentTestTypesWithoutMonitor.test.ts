import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    
*/
test("VerifyWebTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webTestIDWithoutAdvsSettings');
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(5000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(7000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
// /*
    
// */
// test("VerifyTransactionTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('transactionTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyPlaywrightTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('playwrightTestIDWitoutMonitor');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyPuppeteerTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('pupperteerTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyWPTTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('wPTTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// visualViewport/*
    
// */
// test("VerifyHTMLTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('hTMLTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyAPITestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('aPITestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyWebSocketTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('webSocketTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyStreamingTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('streamingTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyDNSTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('dnsTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyFTPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('ftpTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyTransportTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('transportTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifySMTPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('smtpTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyPingTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('pingTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyTracerouteTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('tracerouteTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyCustomTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('customTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyNTPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('ntpTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyIMAPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('imapTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyMQTTTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('mqttTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifySSLTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('sslTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyBGPTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('bgpTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })
// /*
    
// */
// test("VerifyNTNTestPointBreakdownScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
//     let testID = await data.getValueOfTheParameter('ntnTestIDWithoutAdvsSettings');
//     await synCCPage.navigateToTestPropertiesPage(testID);
//     await util.delay(5000)
//     await syntheticTestDetailPage.clickOnPointBreakDown();
//     await util.delay(2000)
//     await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
// })


