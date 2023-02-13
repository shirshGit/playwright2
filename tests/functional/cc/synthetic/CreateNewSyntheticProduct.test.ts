import test from '@lib/BaseTest';
import { DataForEnv } from '@lib/DataForEnvironment';
import { ControlCenter } from '@objects/ControlCenter';
let data = new DataForEnv();

test.beforeEach(async ({ baseTestUtil }) => {
});

/*
  CP-30507 : Verify User can create a product with all settings and configuration using Control Center
*/

<<<<<<< HEAD
test("CreateASyntheticProductInCC   @Smoke@SyntheticControlCenter@Test", async ({baseTestUtil, verification, syntheticProductDetailPage, sideNavigationBar, util  }) => {
=======
test("CreateASyntheticProductInCC @Smoke@SyntheticControlCenter", async ({baseTestUtil, verification, syntheticProductDetailPage, sideNavigationBar, util  }) => {
>>>>>>> 08cebc9627e4d078d0d75219d95155c31cb6e3c7
  await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
  await syntheticProductDetailPage.goToNewProductCreate();
  let productName: string = 'Automation_Delete_UI' + await util.generateRandomText(5);
  let nodeName = await data.getValueOfTheParameter('node');
  await syntheticProductDetailPage.createAProductWithBasicSettings(productName, nodeName);
  await syntheticProductDetailPage.searchItem(productName);
  await verification.verifySoftAssertForTextOfAnElement(syntheticProductDetailPage.firstRowSearchResultLocator, productName, 'Product is not found');
  await syntheticProductDetailPage.deleteItemFromThreeDotMenu(productName);

});

/*
  CP-6801 : Verify all existing Test data webhook is displayed in Product detail blade
*/

<<<<<<< HEAD
test("VerifyAllExistingTestDataWebhookIsDisplayedInProductDetailBlade    @Smoke@SyntheticControlCenter", async ({ util, verification, syntheticProductDetailPage, sideNavigationBar }) => {
=======
test("VerifyAllExistingTestDataWebhookIsDisplayedInProductDetailBlade @Smoke@SyntheticControlCenter@ControlCenter", async ({ util, verification, syntheticProductDetailPage, sideNavigationBar }) => {
>>>>>>> 08cebc9627e4d078d0d75219d95155c31cb6e3c7
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

  