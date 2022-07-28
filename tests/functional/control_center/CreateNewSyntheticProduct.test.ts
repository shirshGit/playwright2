import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
import { ControlCenter } from '@objects/ControlCenter';
import { SyntheticControlCenter } from '@pages/SyntheticControlCenter';

let data = new DataForEnv();

test.beforeEach(async ({ baseTestUtil }) => {
});

/*
  CP-30507 : Verify User can create a product with all settings and configuration using Control Center
*/

test("@Smoke @SyntheticControlCenter Create a Synthetic Product in CC", async ({baseTestUtil, verification, syntheticProductDetailPage, sideNavigationBar, util  }) => {
  await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
  await syntheticProductDetailPage.goToNewProductCreate();
  let productName: string = await util.generateRandomText(5);
  let nodeName = await data.getValueOfTheParameter('node');
  await syntheticProductDetailPage.createAProductWithBasicSettings(productName, nodeName);
  await syntheticProductDetailPage.searchItem(productName);
  await verification.verifySoftAssertForTextOfAnElement(syntheticProductDetailPage.firstRowSearchResult, productName, 'Product is not found');
  await syntheticProductDetailPage.deleteItemFromThreeDotMenu(productName);

});

/*
  CP-6801 : Verify all existing Test data webhook is displayed in Product detail blade
*/

test("@Smoke @SyntheticControlCenter Verify all existing Test data webhook is displayed in Product detail blade", async ({ util, verification, syntheticProductDetailPage, sideNavigationBar }) => {
  var webhookToSelect = 'DNDCookieTestWebhook';
  await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
  await syntheticProductDetailPage.goToNewProductCreate();
  await util.delay(3000);
  await syntheticProductDetailPage.enableTestDataWebhookToggleButton();
  await syntheticProductDetailPage.selectTestDataWebhookDuringItemCreation(webhookToSelect);
  await verification.verifySoftAssertForTextOfAnElement(syntheticProductDetailPage.getSelectedWebhookText, webhookToSelect, 'Choosen Webhook is not selected');
  await syntheticProductDetailPage.disableTestDataWebhookToggleButton();
  await verification.verifyElementIsNotPresent(syntheticProductDetailPage.newDataWebhookDropdown, 'Test Data Webhook Dropdown is present', false);

});

  