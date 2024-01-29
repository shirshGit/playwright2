import test from "@lib/BaseTest"

/*
    CP-84765 : Verify CharmBar ScreenShot
*/
test("VerifyCharmBarScreenShot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util}, testInfo) => {
    await util.delay(5000);
    await screenShotVerification.verifyScreenShotOfAComponent('//div[@class = "CharmBar__PrimaryContent-v3ktet-3 jwlbaS"]', 'scr.png');
   
})