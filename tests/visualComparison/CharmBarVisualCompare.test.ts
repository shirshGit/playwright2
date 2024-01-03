import test from "@lib/BaseTest"
import { expect } from "@playwright/test";

test("VerifyCharmBarScreenShot @ScreenshotVerification", async({baseTestUtil,page, screenShotVerification, util}, testInfo) => {
     await util.delay(5000);
    // const maskedEle1 = 
    // await screenShotVerification.verifyScreenShotOfAComponent('//div[@class = "CharmBar__PrimaryContent-v3ktet-3 jwlbaS"]', 'scr.png');
    // await screenShotVerification.verifyScreenShotOfAComponent('//div[@class = "CharmBar__PrimaryContent-v3ktet-3 jwlbaS"]', 'scr2.png');

    await page.goto("https://portalstage.catchpoint.com/ui/Symphony/Administration/Zones?lui=1");
    await util.delay(5000);
    const maskedElement1 = await page.locator("//div[@class='ms-List-page']");
    const maskedElements = [maskedElement1];
    //expect(await page.screenshot({ mask: [maskedElement1] })).toMatchSnapshot(testInfo.title + '-screenshot.png');
    await screenShotVerification.verifyScreenShotOfAPageWithMaskedElement(maskedElements, testInfo.title + '-screenshot.png');
    
})