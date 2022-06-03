import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import { ControlCenter } from '@objects/ControlCenter';


test.beforeEach(async ({ loginPage }) => {
});


test("@Smoke @SyntheticControlCenter Create a Synthetic Product in CC", async ({ page, syntheticControlCenter }) => {
  await syntheticControlCenter.navigateToSyntheticCCFromSideNavigation();
  await syntheticControlCenter.goToNewProductCreate();
  let productName: string = await syntheticControlCenter.randomProductName(5);
  await syntheticControlCenter.createAProductWithBasicSettings(productName, 'Dallas-Linux IPV4 / IPV6');
  await syntheticControlCenter.verifyIfSearchProductFound(productName);
  await syntheticControlCenter.deleteProduct(productName);

});


test("@Smoke @SyntheticControlCenter Verify all existing Test data webhook is displayed in Product detail blade", async ({ page, syntheticControlCenter }) => {
  var webhookToSelect = 'DNDCookieTestWebhook';
  await syntheticControlCenter.navigateToSyntheticCCFromSideNavigation();
  await syntheticControlCenter.goToNewProductCreate();
  await syntheticControlCenter.selectTestDataWebhookDuringItemCreation(webhookToSelect);
  await syntheticControlCenter.verifyAParticularWebhookSelectedFromWebhookDropDown(webhookToSelect);
  await syntheticControlCenter.clickOnToogleButtonForTestDataWebhook();
  await syntheticControlCenter.verifyTestDataWebhookElementIsNotDisplayed();

});

  