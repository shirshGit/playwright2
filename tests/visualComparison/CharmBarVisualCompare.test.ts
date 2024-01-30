import test from "@lib/BaseTest"
import { DefaultDashboardPage } from "@pageobjects/OverviewDashboard/DefaultDashboardPage";

/*
    CP-84765 : Verify CharmBar ScreenShot
*/
test("VerifyCharmBarScreenShot @ScreenshotVerification", async ({ baseTestUtil, page, screenShotVerification, util, defaultDashboardPage }, testInfo) => {
    await util.delay(5000);
    await screenShotVerification.verifyScreenShotOfAComponent(defaultDashboardPage.charmBarLocator, testInfo.title + '-screenshot.png');
})