import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";

let data = new DataForEnv();

/*
     CP-12699 : Bug 129625 Script field missing for Transaction tests in the new UI 
*/

test("VerifyTransactionScriptFieldIsPresent @SyntheticControlCenter@ControlCenter", async ({ baseTestUtil, verification, syntheticProductDetailPage, sideNavigationBar, util,testUtility, syntheticTestDetailPage, page }) => {
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    let url: string = ' https://heycar-uk-prod-res.cloudinary.com/image/upload/t_with-stock-placeholder/$aspratio_1.33/t_fit-to-aspect-ratio-blur,f_auto,q_auto,w_1000';
    let prodName = await data.getValueOfTheParameter('productForJunkItems');
    let testName = await testUtility.getTestName();
    await syntheticTestDetailPage.goToNewTransactionChromeTestCreate();
    await verification.verifyIfElementIsPresent(syntheticTestDetailPage.transactionTestScriptEditorFieldLocator, 'Transaction Editor Field Not Present');
    
});
