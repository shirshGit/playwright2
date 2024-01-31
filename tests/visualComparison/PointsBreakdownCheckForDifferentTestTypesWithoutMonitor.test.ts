import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    
*/
test("VerifyWebTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
 */
test("VerifyTransactionTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transactionTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
 /*
    
*/
test("VerifyPlaywrightTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('playwrightTestIDWitoutMonitor');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPuppeteerTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pupperteerTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyWPTTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('wPTTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyHTMLTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('hTMLTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyAPITestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('aPITestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyWebSocketTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('webSocketTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyStreamingTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('streamingTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyDNSTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('dnsTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyFTPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ftpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTransportTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('transportTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifySMTPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('smtpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyPingTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('pingTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyTracerouteTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('tracerouteTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyCustomTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('customTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyNTPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyIMAPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('imapTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyMQTTTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('mqttTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifySSLTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('sslTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyBGPTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('bgpTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})
/*
    
*/
test("VerifyNTNTestPointBreakdownScreenshot @ScreenshotVerification@PointEstScreenshot", async ({  page, screenShotVerification, util, synCCPage,syntheticTestDetailPage }, testInfo) => {
    let testID = await data.getValueOfTheParameter('ntnTestIDWithoutAdvsSettings');
    await synCCPage.LoginToContactsPage()
    await synCCPage.navigateToTestPropertiesPage(testID);
    await util.delay(20000)
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await util.delay(20000)
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, testInfo.title + '-screenshot.png');
})


