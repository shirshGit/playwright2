import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";


/*
    CP-9200 : Verify WPT Login Page 
*/

test("VerifyWPTLoginPage @WPTOrg", async ({ wptOrgLoginPage, page, util, testUtility, wptLoginPage, verification, wptPage }) => {
    await wptPage.clickItem(wptPage.threeLineLocator)
    await util.delay(2000)
    await wptPage.clickItem(wptPage.loginPageLinkLocator)
    await util.delay(4000)
    //verification when user is in login page
    await verification.verifyIfElementIsPresent(wptLoginPage.wptLogoLocator, 'Wpt logo is not present')
    await verification.verifyIfElementIsPresent(wptLoginPage.emailFieldLocator, 'Wpt email input is not present')
    await verification.verifyIfElementIsPresent(wptLoginPage.pwFieldLocator, 'Wpt password input is not present')
    await verification.verifyIfElementIsPresent(wptLoginPage.loginLocator, 'Wpt login button is not present')
    await verification.verifyIfElementIsPresent(wptLoginPage.forgotPWLinkLocator, 'Wpt forgot pw link is not present')
    await wptLoginPage.clickItem(wptLoginPage.forgotPWLinkLocator)
    await verification.verifyIfElementIsPresent(wptLoginPage.wptLogoLocator, 'Wpt forgot passowrd email is not present')
    await verification.verifyIfElementIsPresent(wptLoginPage.forgotPWButtonLocator, 'Wpt forgot passowrd button is not present')
})

/*
     CP-9482 : Verify Login and Log-out experience of the wpt app 
*/
test("VerifyWPTLoginAndLogOut @WPTOrg@W123", async ({ baseTestWPTUtil, page, util, testUtility, wptLoginPage, verification, wptPage,homePage }) => {
    await util.delay(4000);
    await homePage.clickItem(wptPage.threeLineLocator)
    await util.delay(2000)
    await verification.verifyIfElementIsPresent(homePage.myAccountLinkLocator, 'my account is not present')
    await verification.verifyIfElementIsPresent(homePage.logoutLinkLocator, 'logout link is not present')
    await homePage.clickItem(homePage.logoutLinkLocator)
    let url = await homePage.getUrl()
    await verification.verifySoftAssertTrue(url.includes('webpagetest.org'), 'after logout page is not redirecting to "webpagetest.org"')
})

/*
    CP-9202 : Verify WPT Home Screen
*/
test("VerifyWPTHomePage @WPTOrg", async ({ baseTestWPTUtil, page, util, testUtility, wptLoginPage, verification, wptPage,homePage }) => {
    await util.delay(4000);
    await verification.verifyIfElementIsPresent(homePage.threeLineLocator, 'hamburger is not present')
    await verification.verifyIfElementIsPresent(homePage.wptLogoLocator, 'wpt logo is not present')
    await verification.verifyIfElementIsPresent(homePage.simpleConfigTextLocator, 'simple config text is not present')
    await verification.verifyIfElementIsPresent(homePage.advanceConfigTextLocator, 'adv config text is not present')
    await verification.verifyIfElementIsPresent(homePage.startButtonLocator, 'start is not present')
    await verification.verifyIfElementIsPresent(homePage.repeatViewTextLocator, 'repeat view is not present')
    await verification.verifyIfElementIsPresent(homePage.lHTextLocator, 'LH text is not present')
    
})

/*
    CP-9205 : Verify Invalid User Name & Password for Login Page 
*/

test("VerifyInvalidUserNameAndPasswordInLoginPage @WPTOrg", async ({ wptOrgLoginPage, page, util, testUtility, wptLoginPage, verification, wptPage }) => {
    await wptPage.clickItem(wptPage.threeLineLocator)
    await util.delay(2000)
    await wptPage.clickItem(wptPage.loginPageLinkLocator)
    await util.delay(4000)
    await wptLoginPage.enterTextToField(wptLoginPage.emailFieldLocator,'pxxchourasia@catchpoint.com')
    await wptLoginPage.enterTextToField(wptLoginPage.pwFieldLocator,'xxxxxxx')
    await wptLoginPage.clickItem(wptLoginPage.loginLocator)
    //verification
    await verification.verifyIfElementIsPresent(wptLoginPage.errorMsgLocator, 'not getting "Unable to log in. Please verify the email and/or password provided." error msg')
})