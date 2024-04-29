import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { SignUpPage } from "@pageobjects/WptOrg/WPTSignUpPage";


/*
    CP-9428 : Verify Fields on Sign up page 
*/

test("VerifyFieldsOnSignPage @WPTOrg", async ({ wptOrgLoginPage, page, util, testUtility, wptLoginPage, verification, wptPage,signUpPage }) => {
    await util.delay(3000)
    await wptPage.clickItem(wptPage.threeLineLocator)
    await util.delay(2000)
    await wptPage.clickItem(signUpPage.signUpPageLinkLocator)
    await util.delay(1000)
    await wptPage.clickItem(signUpPage.freeStarterPlanLocator)
    await util.delay(2000)
    let url = await signUpPage.getUrl()
    await verification.verifySoftAssertTrue(url.includes('webpagetest.org/signup/2'), 'not navigating to sign up page after clicking on starter plan')
    await util.delay(2000)
    //verification when user is in sign up page
    await verification.verifyIfElementIsPresent(signUpPage.firstNameLocator, 'first name input box is not present')
    await verification.verifyIfElementIsPresent(signUpPage.lastNameLocator, 'last name input box is not present')
    await verification.verifyIfElementIsPresent(signUpPage.companyNameLocator, 'company name input box is not present')
    await verification.verifyIfElementIsPresent(signUpPage.emailLocator, 'email input box is not present')
    await verification.verifyIfElementIsPresent(signUpPage.pwLocator, 'pw input box is not present')
    await verification.verifyIfElementIsPresent(signUpPage.confirmPwLocator, 'confirm pw input box is not present')
    await verification.verifyIfElementIsPresent(signUpPage.signUpButtonLocator, 'sign up button is not present')
    await verification.verifyIfElementIsPresent(signUpPage.checkBoxLocator, 'check box is not present')

})

/*
    CP-9432 : Verify Annual /Monthly plan dropdown button in Signup page
*/
test("VerifyAnnualMonthlyPlanDDInSignUpPage @WPTOrg", async ({ wptOrgLoginPage, page, util, testUtility, wptLoginPage, verification, wptPage,signUpPage }) => {
    await util.delay(4000)
    await wptPage.clickItem(wptPage.threeLineLocator)
    await util.delay(2000)
    await wptPage.clickItem(signUpPage.signUpPageLinkLocator)
    await util.delay(2000)
    await wptPage.clickItem(signUpPage.billingCyclePlanLocator)
    await verification.verifyIfElementIsPresent(signUpPage.annualPlanLocator, 'first name input box is not present')
    await verification.verifyIfElementIsPresent(signUpPage.monthlyPlanLocator, 'last name input box is not present')
    await util.delay(1000)
    //click on monthly plan 
    await signUpPage.clickItem(signUpPage.monthlyPlanLocator)
    let getText = await signUpPage.getElementText(signUpPage.monthlyPlanCycleLocator)
    //verification for monthly plan
    await verification.verifySoftAssertTrue(getText.includes('/month'), 'plan is not updated')
    //click on annual plan 
    await wptPage.clickItem(signUpPage.billingCyclePlanLocator)
    await signUpPage.clickItem(signUpPage.annualPlanLocator)
    let getText2 = await signUpPage.getElementText(signUpPage.monthlyPlanCycleLocator)
    //verification for annual plan
    await verification.verifySoftAssertTrue(getText2.includes('/year'), 'plan is not updated')
    
})


/*
    CP-9435 : Verify Requirements for the password field 
*/
test("VerifyRequirmentsForPasswordField @WPTOrg", async ({ wptOrgLoginPage, page, util, testUtility, wptLoginPage, verification, wptPage,signUpPage }) => {
    await util.delay(4000)
    await wptPage.clickItem(wptPage.threeLineLocator)
    await util.delay(2000)
    await wptPage.clickItem(signUpPage.signUpPageLinkLocator)
    await util.delay(2000)
    await wptPage.clickItem(signUpPage.freeStarterPlanLocator)
    await signUpPage.fillSignUpDetails('firstName','lastName','abc@gmail.com','cp','qwe123','qwe123')
    await verification.verifyIsDisabled(signUpPage.signUpButtonLocator)
    
})

