import test from "@lib/BaseTest"

/*
    CP-84908 : Verify Web Instant Test Screenshot 
*/
test("VerifyWebInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84909 : Verify Transaction Instant Test Screenshot 
*/
test("VerifyTransactionInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Transaction');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
     CP-84910 : Verify Playwright Instant Test Screenshot 
*/
test("VerifyPlaywrightInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Playwright');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
     CP-84911 : Verify Puppeteer Instant Test Full page Screenshot
*/
test("VerifyPuppeteerInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Puppeteer');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
     CP-84912 : Verify Traceroute Instant Test Full page Screenshot
*/
test("VerifyTracerouteInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Traceroute');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84913 : Verify API Instant Test Full page Screenshot
*/
test("VerifyAPIInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.clickOnAPITestTypeInInstantTestDD();
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84914 : Verify Ping Instant Test Full page Screenshot 
*/
test("VerifyPingInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Ping');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
     CP-84915 : Verify DNS Instant Test Full page Screenshot 
*/
test("VerifyDNSInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('DNS');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84916 : Verify HTML Code Instant Test Full page Screenshot 
*/
test("VerifyHTMLInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('HTML Code');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
     CP-84917 : Verify FTP Instant Test Full page Screenshot 
*/
test("VerifyFTPInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('FTP');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84918 : Verify IMAP Instant Test Full page Screenshot
*/
test("VerifyIMAPInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('IMAP');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
     CP-84919 : Verify SMTP Instant Test Full page Screenshot
*/
test("VerifySMTPInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('SMTP');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84920 : Verify SSL Instant Test Full page Screenshot 
*/
test("VerifySSLInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('SSL');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84921 : Verify MQTT Instant Test Full page Screenshot 
*/
test("VerifyMQTTInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('MQTT');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84922 : Verify NTP Instant Test Full page Screenshot
*/
test("VerifyNTPInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('NTP');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84923 : Verify Custom Instant Test Full page Screenshot
*/
test("VerifyCustomInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Custom')
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
     CP-84924 : Verify Streaming Instant Test Full page Screenshot
*/
test("VerifyStreamingInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Streaming');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84925 : Verify WebSocket Instant Test Full page Screenshot 
*/
test("VerifyWebSocketInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Web Socket');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
/*
    CP-84926 : Verify Transport Instant Test Full page Screenshot
*/
test("VerifyTransportInstantTestScreenshot @Screenshot", async ({page, screenShotVerification, util, instantTest }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    await instantTest.LoginToNewInstantTestPage();
    await instantTest.selectTestTypeInInstantTestPage('Transport');
    await util.delay(3000)
    await screenShotVerification.verifyScreenShotOfFullPage(screenShotName + '.png');
})
