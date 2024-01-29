import test from "@lib/BaseTest"

/*
    CP-84908 : Verify Web Instant Test Screenshot 
*/
test("VerifyWebInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL()
    await instantTest.clickOnRequestSection
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84909 : Verify Transaction Instant Test Screenshot 
*/
test("VerifyTransactionInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Transaction')
    await instantTest.clickOnRequestSection
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
     CP-84910 : Verify Playwright Instant Test Screenshot 
*/
test("VerifyPlaywrightInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Playwright')
    await instantTest.clickOnRequestSection
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
     CP-84911 : Verify Puppeteer Instant Test Full page Screenshot
*/
test("VerifyPuppeteerInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Puppeteer')
    await instantTest.clickOnRequestSection
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
     CP-84912 : Verify Traceroute Instant Test Full page Screenshot
*/
test("VerifyTracerouteInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Traceroute')
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84913 : Verify API Instant Test Full page Screenshot
*/
test("VerifyAPIInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.clickOnAPITestTypeInInstantTestDD()
    await instantTest.clickOnRequestSection
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84914 : Verify Ping Instant Test Full page Screenshot 
*/
test("VerifyPingInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Ping')
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
     CP-84915 : Verify DNS Instant Test Full page Screenshot 
*/
test("VerifyDNSInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('DNS')
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84916 : Verify HTML Code Instant Test Full page Screenshot 
*/
test("VerifyHTMLInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('HTML Code')
    await instantTest.clickOnRequestSection
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
     CP-84917 : Verify FTP Instant Test Full page Screenshot 
*/
test("VerifyFTPInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('FTP')
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84918 : Verify IMAP Instant Test Full page Screenshot
*/
test("VerifyIMAPInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('IMAP')
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
     CP-84919 : Verify SMTP Instant Test Full page Screenshot
*/
test("VerifySMTPInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('SMTP')
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84920 : Verify SSL Instant Test Full page Screenshot 
*/
test("VerifySSLInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('SSL')
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84921 : Verify MQTT Instant Test Full page Screenshot 
*/
test("VerifyMQTTInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('MQTT')
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84922 : Verify NTP Instant Test Full page Screenshot
*/
test("VerifyNTPInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('NTP')
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84923 : Verify Custom Instant Test Full page Screenshot
*/
test("VerifyCustomInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Custom')
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
     CP-84924 : Verify Streaming Instant Test Full page Screenshot
*/
test("VerifyStreamingInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Streaming')
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84925 : Verify WebSocket Instant Test Full page Screenshot 
*/
test("VerifyWebSocketInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Web Socket')
    await instantTest.clickOnRequestSection
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
/*
    CP-84926 : Verify Transport Instant Test Full page Screenshot
*/
test("VerifyTransportInstantTestScreenshot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, instantTest }, testInfo) => {
    await instantTest.navigateToInstantTestPageByURL();
    await instantTest.selectTestTypeInInstantTestPage('Transport')
    await instantTest.clickOnInsightSection
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(testInfo.title + '-screenshot.png');
})
