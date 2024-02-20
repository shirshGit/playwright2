import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
import { ControlCenter } from '@objects/ControlCenter';
import { TestUtility } from '@util/TestUtility';
let data = new DataForEnv();

/*
  CP-30507 : Verify User can create a product with all settings and configuration using Control Center
*/

test("CreateASyntheticProductInCC @Smoke@SyntheticControlCenter", async ({testUtility, verification, syntheticProductDetailPage, synCCPage, util  }) => {
  //login to CC page[for saving login time we are directly login to CC page]
  await synCCPage.LoginToCCPage();
  await syntheticProductDetailPage.goToNewProductCreate();
  let productName = await testUtility.getProductName();
  let nodeName = await data.getValueOfTheParameter('node');
  await syntheticProductDetailPage.createAProductWithBasicSettings(productName, nodeName);
  await syntheticProductDetailPage.searchItem(productName);
  await verification.verifySoftAssertForTextOfAnElement(syntheticProductDetailPage.firstRowSearchResultLocator, productName, 'Product is not found');
  await syntheticProductDetailPage.deleteItemFromThreeDotMenu(productName);

});

/*
  CP-6801 : Verify all existing Test data webhook is displayed in Product detail blade
*/

test("VerifyAllExistingTestDataWebhookIsDisplayedInProductDetailBlade @Smoke@SyntheticControlCenter@ControlCenter", async ({synCCPage, util, verification, syntheticProductDetailPage }) => {
  //login to CC page[for saving login time we are directly login to CC page]
  await synCCPage.LoginToCCPage();
  var webhookToSelect = 'CP Endpoint_DoNotDelete';
  await syntheticProductDetailPage.goToNewProductCreate();
  await util.delay(3000);
  await syntheticProductDetailPage.enableTestDataWebhookToggleButton();
  await syntheticProductDetailPage.selectTestDataWebhookDuringItemCreation(webhookToSelect);
  await verification.verifySoftAssertForTextOfAnElement(syntheticProductDetailPage.getSelectedWebhookText, webhookToSelect, 'Choosen Webhook is not selected');
  await syntheticProductDetailPage.disableTestDataWebhookToggleButton();
  await verification.verifyElementIsNotPresent(syntheticProductDetailPage.newDataWebhookDropdown, 'Test Data Webhook Dropdown is present', false);

});

  