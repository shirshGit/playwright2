import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();

/*
    CP-4556 : Verify autocomplete contacts
*/

test("VerifyContactAutocompleteForAlertRecepient  @Smoke@SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar, verification}) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    let prodForTestCreate =await data.getValueOfTheParameter('productForJunkItems');
    let alertRecipientName = await data.getValueOfTheParameter('alertRecipientName');
    await syntheticTestDetailPage.clickOnSearchedItemInCC(prodForTestCreate);
    await syntheticTestDetailPage.goToNewWebChromeTestCreate();
    await syntheticTestDetailPage.alertToggleButtonToOverrideAlertSettings();
    await syntheticTestDetailPage.typeRecipientsNameInAlertReceipientBox(alertRecipientName);
    await verification.verifySoftAssertForTextOfAnElement(syntheticTestDetailPage.alertReceipientSuggestedContactsLocator, alertRecipientName, 'Suggested contact not matching with the Entered Receipient name');

})