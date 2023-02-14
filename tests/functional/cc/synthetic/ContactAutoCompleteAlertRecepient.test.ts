import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { Utility } from "@util/Utility";

let data = new DataForEnv();

/*
    CP-4556 : Verify autocomplete contacts
*/

<<<<<<< HEAD
test("VerifyContactAutocompleteForAlertRecepient @Smoke@SyntheticControlCenter@ControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar, verification,util}) => {
=======
test("VerifyContactAutocompleteForAlertRecepient @Smoke@SyntheticControlCenter@ControlCenter", async({baseTestUtil, syntheticTestDetailPage, util,sideNavigationBar, verification}) => {
>>>>>>> ee2ecf6e997abb012aac912283a8e6a4e087aa87
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    let prodForTestCreate =await data.getValueOfTheParameter('productForJunkItems');
    let alertRecipientName = await data.getValueOfTheParameter('alertRecipientName');
    await syntheticTestDetailPage.clickOnSearchedItemInCC(prodForTestCreate);
    await syntheticTestDetailPage.goToNewWebChromeTestCreate();
    await util.delay(2000);
    await syntheticTestDetailPage.clickOnAlertOverideButton();
    await util.delay(2000);
    await syntheticTestDetailPage.typeRecipientsNameInAlertReceipientBox(alertRecipientName);
    await verification.verifySoftAssertForTextOfAnElement(syntheticTestDetailPage.alertReceipientSuggestedContactsLocator, alertRecipientName, 'Suggested contact not matching with the Entered Receipient name');

})