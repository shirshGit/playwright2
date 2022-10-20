import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment";
import { SyntheticTestDetailPage } from "@pageobjects/ControlCenter/SyntheticTestDetail";
import { RecordsPage } from "@pageobjects/Records/RecordsPage";
import { SmartboardPage } from "@pageobjects/Smartboard/SmartboardPage";

let data = new DataForEnv();


/*
   19205 DES Records Blade Shows No Data For Traceroute and Ping Test Types
*/
test.skip("VerifyDataInRecordsListPageForTransactionTest  @Records", async ({ baseTestUtil, sideNavigationBar, loginPage, util, syntheticTestDetailPage, synCCPage, page, verification }) => {
    let TransactionTestID = await data.getValueOfTheParameter('TransactionTestWithMultipleStepAndStepName');
    //navigate to CC page
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation();
    //click on three dot menu and navigate recoeds page
    await synCCPage.navigateFromThreeDotMenu(TransactionTestID,'Records');
    //validation for data
    await verification.verifyIfElementIsPresent(syntheticTestDetailPage.firstSearchRowInRecordsListPage,'Data is not present in records property page.');

})

/*
   CP-21779 : DES: Selected run is not displayed in Records when we navigate from errors tab
*/
test("VerifyNavigateFromErrorTab  @Records", async ({ baseTestUtil, sideNavigationBar,context, loginPage, util, sourceSelectorExplorer,recordsPage, explorerPage, page, verification }) => {
    let TransactionTestID = await data.getValueOfTheParameter('TransactionTestId');
    //navigate to CC page
    await sideNavigationBar.navigateToExplorerFromSideNavigation();
    //select item from explorer selector
    await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(TransactionTestID);
    await util.delay(3000);
    //click on error tab
    await explorerPage.clickOnErrorTab();
    //get first row time
    let time = await explorerPage.getErrorTabRowTime(0);
    //click on records page
    await explorerPage.firstRowRecordNavigationFromThreeDotMenu();
    let getNewPage = await explorerPage.getNewWindow(context,explorerPage.recordInThreeDotMenuInErrorTab);
    await util.delay(3000);
    let recordPage = new RecordsPage(getNewPage);
     //get url of records page
     let getCurrentPageUrl = await recordPage.getUrl();
     await util.delay(3000);
    
})
