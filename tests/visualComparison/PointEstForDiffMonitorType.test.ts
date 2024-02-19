import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();
/*
    
*/
test("WebObject @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webObjectTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("WebEmulated @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webEmulatedTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("WebPlayback @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webPlaybackTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("WebMobilePlayback @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webMobilePlaybackTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("WebIE @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webIETest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("WebMobile @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webMobileTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("WebEdge @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webEdgeTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("WebChrome @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('webChromeTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("TransactionEmulated @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionEmulatedTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("TransactionIE @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionIETest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("TransactionChrome @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionChromeTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("TransactionMobile @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('transactionMobileTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("PlaywrightEdge @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('playwrightEdgeTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("PlaywrightChrome @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('playwrightChromeTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("DNSExperience @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('dnsExperienceTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("DNSDirect @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('dnsDirectTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("CustomTestWithCustomMonitor @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('customTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("CustomSSHTest @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('customSSHTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("BGPBasic @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('bgpBasicTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("BGPStandard @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('bgpStandardTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("NTNWithTracerouteMonitors @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('ntnWithTracerouteMonitorTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("NTNWithPingMonitors @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('ntnWithPingMonitorTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("HTMLEmulated @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('htmlEmulatedTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("HTMLMobile @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('htmlMobileTest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("HTMLIE @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('htmlIETest');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})
test("HTMLChrome @Screenshot@PointEst", async ({ page, screenShotVerification, util, synCCPage, syntheticTestDetailPage }, testInfo) => {
    let screenShotName = testInfo.title.split(" ")[0]
    let testID = await data.getValueOfTheParameter('htmlChrome');
    await synCCPage.LoginToCCPage();
    await synCCPage.navigateToTestPropertiesPage(testID);
    await syntheticTestDetailPage.clickOnPointBreakDown();
    await screenShotVerification.verifyScreenShotOfAComponent(syntheticTestDetailPage.propertiesBladeLocator, screenShotName + '.png');
})