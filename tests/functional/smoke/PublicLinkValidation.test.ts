import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment"
import { ExplorerPage } from "@pageobjects/Explorer/ExplorerPage"
import { SourceSelectorExplorer } from "@pageobjects/Explorer/SourceSelectorExplorer"
import { InstantTestPage } from "@pageobjects/InstantTest/InstantTestPage"
import { CustomDBPage } from "@pageobjects/OverviewDashboard/CustomDBPage"
import { RecordsPage } from "@pageobjects/Records/RecordsPage"
import { SourceSelectorPage } from "@pageobjects/Records/SourceSelecterPage"
import { SyntheticSmartboardPage } from "@pageobjects/Smartboard/SyntheticSmartboardPage"



/*
    CP-68028 : Verify Create And Navigate Smartboard Public Link
*/
test("VerifySmartboardPublicLink @ProductionSmoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, context, syntheticSmartboardPage, sbPublicLinkPage, sbSharedLinkPage, util }) => {
    let data = new DataForEnv()
    let webTestID = await data.getValueOfTheParameter('webTestForSmoke')
    //navigate to SB 
    await sideNavigationBar.navigateToSmartboardFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(webTestID, 'Tests')
    await util.delay(4000)
    //fetch test name
    let fectTestName = await syntheticSmartboardPage.getElementText(syntheticSmartboardPage.gettestNameFromSourceSelectorBoxLocator)
    //click on share button
    await syntheticSmartboardPage.click(syntheticSmartboardPage.commonLocator('Share'))
    //click generate button
    await syntheticSmartboardPage.click(sbSharedLinkPage.generateLinkButtonLocator)
    //fetch public link url
    let publicLinkUrl = await syntheticSmartboardPage.getElementText(sbSharedLinkPage.fristPublicLinkLocator)
    //click on first link
    let getNewPage = await syntheticSmartboardPage.getNewWindow(context, sbSharedLinkPage.fristPublicLinkLocator)
    await util.delay(3000)
    let publicLinkPage = new SyntheticSmartboardPage(getNewPage)
    //fetch url name
    let publicLinkPageUrl = await publicLinkPage.getUrl()
    //verification
    await verification.verifySoftAssertTrue(publicLinkPageUrl === publicLinkUrl, 'url is not matching')
    //validation for errors
    await verification.validationsForPage()
    //fetch source name
    let fetchSourceName = await syntheticSmartboardPage.getElementText(sbPublicLinkPage.getSourceNameFromPublicLinkPageLocator)
    //verification
    await verification.verifySoftAssertTrue(fectTestName === fetchSourceName, 'source name is not matching')
})

/*
    CP-68031 : Verify Create And Navigate Explorer Public Link 
*/
test("VerifyExplorerPublicLink @ProductionSmoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorExplorer, context, explorerPage, explorerSharedLinkPage, explorerPublicLinkPage, util }) => {
    let data = new DataForEnv()
    let webTestID = await data.getValueOfTheParameter('webTestForSmoke')
    //navigate to Explorer 
    await sideNavigationBar.navigateToExplorerFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //select test
    await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(webTestID)
    await util.delay(4000)
    //fetch test name
    let fectTestName = await explorerPage.getElementText(explorerPage.gettestNameFromSourceSelectorBoxLocator)
    //click on share button
    await explorerPage.click(explorerPage.commonLocator('Share'))
    //click generate button
    await explorerPage.click(explorerSharedLinkPage.generateLinkButtonLocator)
    //click on created link
    await explorerPage.click(explorerSharedLinkPage.createdLinksTextInShareExplorer)
    //fetch public link url
    let publicLinkUrl = await explorerPage.getElementText(explorerSharedLinkPage.fristPublicLinkLocator)
    //click on first link
    let getNewPage = await explorerPage.getNewWindow(context, explorerSharedLinkPage.fristPublicLinkLocator)
    await util.delay(3000)
    let publicLinkPage = new ExplorerPage(getNewPage)
    //fetch url name
    let publicLinkPageUrl = await publicLinkPage.getUrl()
    //verification
    await verification.verifySoftAssertTrue(publicLinkPageUrl === publicLinkUrl, 'url is not matching')
    //validation for errors
    await verification.validationsForPage()
    //fetch source name
    let fetchSourceName = await explorerPage.getElementText(explorerPublicLinkPage.getSourceNameFromPublicLinkPageLocator)
    //verification
    await verification.verifySoftAssertTrue(fectTestName === fetchSourceName, 'source name is not matching')
})

/*
    CP-68034 : Verify Create And Navigate Records Public Link -
*/
test("VerifyRecordsPublicLink @ProductionSmoke", async ({ baseTestUtil, sideNavigationBar, verification, recordsPage, context, sourceSelectorPage, recordsPublicLinkPage, util }) => {
    let data = new DataForEnv()
    let webTestID = await data.getValueOfTheParameter('webTestForSmoke')
    //navigate to Records
    await sideNavigationBar.navigateToRecordsFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //select test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(webTestID)
    await util.delay(3000)
    //fetch test name
    let getTestName = await recordsPage.getElementText(recordsPage.gettestNameFromSourceSelectorBoxLocator)
    //fetch test name
    let getPublicLink = await recordsPage.getPublicLink()
    //click on share button
    let getNewPage = await recordsPage.getNewWindow(context, recordsPage.shareButtonLocator)
    await util.delay(3000)
    let publicLinkPage = new RecordsPage(getNewPage)
    //fetch url name
    let publicLinkPageUrl = await publicLinkPage.getUrl()
    //verification
    await verification.verifySoftAssertTrue(publicLinkPageUrl === getPublicLink, 'url is not matching')
    //validation for errors
    await verification.validationsForPage()
    //fetch source name
    let fetchSourceName = await recordsPage.getElementText(recordsPublicLinkPage.getSourceNameFromPublicLinkPageLocator)
    //verification
    await verification.verifySoftAssertTrue(getTestName === fetchSourceName, 'source name is not matching')



})

/*
     CP-68027 : Verify Create And Navigate DB Public Link
*/
test("VerifyDBPublicLink @ProductionSmoke", async ({ baseTestUtil, sideNavigationBar, verification, dashboardBlade, context, customDBPage, dbSharedLinkPage, dbPublicLinkPage, util }) => {

    //click on overview DB
    await dashboardBlade.clickOnOverviewDashboard();
    //open db
    await dashboardBlade.selectDashboard('UI ShareLinkAutomation Do not Delete')
    //fetch test name
    let fetchDBName = await customDBPage.getElementText(customDBPage.getDBNameLocator)
    //click on share DB
    await customDBPage.click(customDBPage.commomLocator('Share'))
    //generate link
    await dbSharedLinkPage.click(dbSharedLinkPage.generateLinkButtonLocator)
    //click on created link
    await dbSharedLinkPage.click(dbSharedLinkPage.createdLinksTextInShareExplorer)
    //fetch public link url
    let publicLinkUrl = await customDBPage.getElementText(dbSharedLinkPage.fristPublicLinkLocator)
    //click on first link
    let getNewPage = await customDBPage.getNewWindow(context, dbSharedLinkPage.fristPublicLinkLocator)
    await util.delay(3000)
    let publicLinkPage = new CustomDBPage(getNewPage)
    //fetch url name
    let publicLinkPageUrl = await publicLinkPage.getUrl()
    //verification
    await verification.verifySoftAssertTrue(publicLinkPageUrl === publicLinkUrl, 'url is not matching')
    //validation for errors
    await verification.validationsForPage()
    //fetch source name
    let fetchSourceName = await customDBPage.getElementText(dbPublicLinkPage.getSourceNameFromPublicLinkPageLocator)
    //verification
    await verification.verifySoftAssertTrue(fetchDBName === fetchSourceName, 'source name is not matching')

})

/*
    CP-68033 : Verify Create And Navigate To Instant Test Public Link
*/
test("VerifyInstantTestPublicLink @ProductionSmoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, context, syntheticSmartboardPage, instantTestPage, instantTestHistoryPage, instantTestPublicLinkPage, util }) => {
    let data = new DataForEnv();
    let nodeName = await data.getValueOfTheParameter('node')
    let nodeNaleList: string[] = [nodeName]
    let url = await data.getValueOfTheParameter('url')
    //navigate to instant history page
    await sideNavigationBar.navigateToInstantTestHistoryFromSideNavigation()
    //navigate to Instant test page
    await instantTestHistoryPage.clickOnNewInstantTestButton()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //enter url
    await instantTestPage.enterURL(url)
    //enter node
    await instantTestPage.enterNodes(nodeNaleList)
    //click on run test
    await instantTestPage.click(instantTestPage.commonLocator('Run Test'))
    //wait for result
    await util.delay(20000)
    await util.delay(10000)
    let condition = await instantTestPage.getResultStatus()
    if (condition == true) {
        await console.log('no data')
    }
    else {
        //get share link
        let link = await instantTestPage.getShareLink()
        //click on share button
        let getNewPage = await syntheticSmartboardPage.getNewWindow(context, instantTestPage.shareButtonLocator)
        await util.delay(3000)
        let publicLinkPage = new InstantTestPage(getNewPage)
        //fetch url name
        let publicLinkPageUrl = await publicLinkPage.getUrl()
        //verification
        await verification.verifySoftAssertTrue(publicLinkPageUrl === link, 'url is not matching')
        //validation for errors
        await verification.validationsForPage()
        await util.delay(3000)
        //fetch source name
        let fetchSourceName = await syntheticSmartboardPage.getElementText(instantTestPublicLinkPage.getSourceNameFromPublicLinkPageLocator)
        //verification
        await verification.verifySoftAssertTrue('Instant Test' === fetchSourceName, 'source name is not matching')
    }
})