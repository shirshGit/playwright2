import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
import { ControlCenter } from '@objects/ControlCenter';

let cc = new ControlCenter();
let data = new DataForEnv();

test.beforeEach(async ({ baseTestUtil }) => {
});


test("@Smoke @SyntheticControlCenter Create a Synthetic Product in CC", async ({ page, verification, syntheticControlCenter }) => {
  await syntheticControlCenter.navigateToSyntheticCCFromSideNavigation();
  await syntheticControlCenter.goToNewProductCreate();
  let productName: string = await syntheticControlCenter.randomItemName(5);
  let nodeName = await data.getValueOfTheParameter('node');
  await syntheticControlCenter.createAProductWithBasicSettings(productName, nodeName);
  await syntheticControlCenter.searchItem(productName);
  await verification.verifySoftAssertForTextOfAnElement(cc.FIRST_ROW_SEARCH_RESULT, productName, 'Product is not found');
  await syntheticControlCenter.deleteItemFromThreeDotMenu(productName);

});


test("@Smoke @SyntheticControlCenter Verify all existing Test data webhook is displayed in Product detail blade", async ({ page, verification, syntheticControlCenter }) => {
  var webhookToSelect = 'DNDCookieTestWebhook';
  await syntheticControlCenter.navigateToSyntheticCCFromSideNavigation();
  await syntheticControlCenter.goToNewProductCreate();
  await syntheticControlCenter.selectTestDataWebhookDuringItemCreation(webhookToSelect);
  await verification.verifySoftAssertForTextOfAnElement(cc.GET_SELECTED_WEBHOOK_TEXT, webhookToSelect, 'Choosen Webhook is not selected');
  await syntheticControlCenter.clickOnToogleButtonForTestDataWebhook();
  await verification.verifyElementIsNotPresent(cc.NEW_DATAWEBHOOK_DROPDOWN, 'Test Data Webhook DD is present', false);

});

  