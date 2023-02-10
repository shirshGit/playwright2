import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();

/*
    CP-32507 : Verify search on labels works on contains
*/

<<<<<<< HEAD
test("SearchBylabel   @Smoke@SyntheticControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar, verification, util}) => {
=======
test("SearchByLabel @Smoke@SyntheticControlCenter@ControlCenter", async({baseTestUtil, syntheticTestDetailPage, sideNavigationBar, verification, util}) => {
>>>>>>> 08cebc9627e4d078d0d75219d95155c31cb6e3c7
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    let prodForTestCreate = await data.getValueOfTheParameter('productForJunkItems');
    let testName = 'Automation_Delete_UI' + await util.generateRandomText(5);
    let labelKey = 'AutoKey';
    let labelVal ='AutoVal';
    await syntheticTestDetailPage.createWebChromeTestInAProdWithLabels(prodForTestCreate, testName, labelKey, labelVal);
    await syntheticTestDetailPage.clickSaveButton();
    await util.delay(2000);
    await syntheticTestDetailPage.searchByLabel(labelVal);
    let serrchedItems = await syntheticTestDetailPage.getElementTextFromElements(syntheticTestDetailPage.firstRowSearchResultLocator);
    await verification.verifySoftAssertTrue(serrchedItems.includes(testName), 'Created Test which includes Index is not found');
    await util.delay(1000);
    await syntheticTestDetailPage.deleteItemFromThreeDotMenu(testName);

})