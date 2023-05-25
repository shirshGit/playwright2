import test from "@lib/BaseTest"
import { DataForEnv } from "@lib/DataForEnvironment"
import { ContactsPage } from "@pageobjects/Contacts/ContactsPage"
import { ExplorerPage } from "@pageobjects/Explorer/ExplorerPage"
import { RecordsPage } from "@pageobjects/Records/RecordsPage"



/*
    CP-
*/
test("VerifyNavigationToDifferentPages @PageNavigation@ProductionSmoke", async ({ baseTestUtil, sideNavigationBar, verification, sourceSelectorSmartboard, sourceSelectorPage, sourceSelectorExplorer, synCCPage, contactsPage, contactGroupPage, syntheticSmartboardPage, instantTestHistoryPage, instantTestPage, alertLogPage, nodeMapPage, nodeGroupPage, nodeListPage, nodeInstancePage,userrolePage,divisionPage,schedulePage,indexPage,zonePage,explorerPage,recordsPage, util }) => {
    let data = new DataForEnv()
    let webTestID = await data.getValueOfTheParameter('webTestForSmoke')
    
    //navigate to CC
    await sideNavigationBar.navigateToSyntheticCCFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let ccPageUrl = await synCCPage.getUrl()
    await verification.verifySoftAssertTrue(ccPageUrl.includes('catchpoint.com/ui/Symphony/ControlCenter'), 'CC page navigation not working')

    //navigate to CC endpoint
    await synCCPage.clickOnEndpointTab()
    //validation for errors
    await verification.validationsForPage()
    //get url
    let endpointPageUrl = await synCCPage.getUrl()
    await verification.verifySoftAssertTrue(endpointPageUrl.includes('catchpoint.com/ui/Symphony/ControlCenter/Endpoint'), 'endpoint cc page navigation not working')

    //navigate to CC RUM
    await synCCPage.clickOnRUMTab()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let rumPageUrl = await synCCPage.getUrl()
    await verification.verifySoftAssertTrue(rumPageUrl.includes('catchpoint.com/ui/Symphony/ControlCenter/Rum'), 'rum page navigation not working')

    //navigate to CC Test Templated
    await synCCPage.clickOnTestTemplatesTab()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let testTemplatesPageUrl = await synCCPage.getUrl()
    await verification.verifySoftAssertTrue(testTemplatesPageUrl.includes('catchpoint.com/ui/Symphony/ControlCenter/TestTemplate'), 'testtemplates page navigation not working')

    //navigate to CC Library
    await synCCPage.clickOnLibraryTab()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let libraryPageUrl = await synCCPage.getUrl()
    await verification.verifySoftAssertTrue(libraryPageUrl.includes('catchpoint.com/ui/Symphony/ControlCenter/Library'), 'Library page navigation not working')


    //navigate to explorer 
    await sideNavigationBar.navigateToExplorerFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //select test
    await sourceSelectorExplorer.clickOnFirstSearchedItemInSelectorPage(webTestID)
    await util.delay(4000)
    await verification.verifyIfElementIsPresent(sourceSelectorExplorer.pillItem, 'test is not selected')
    //validation for errors
    await verification.validationsForPage()
    //get url
    let explorerPageUrl = await explorerPage.getUrl()
    await verification.verifySoftAssertTrue(explorerPageUrl.includes('catchpoint.com/ui/Symphony/Explorer'), 'Explorer page navigation not working')

    //navigate to SB 
    await sideNavigationBar.navigateToSmartboardFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //select test
    await sourceSelectorSmartboard.clickOnFirstSearchedItemInSelectorPage(webTestID, 'Tests')
    await util.delay(4000)
    await verification.verifyIfElementIsPresent(sourceSelectorSmartboard.pillItem, 'test is not selected')
    //get url
    let sbPageUrl = await syntheticSmartboardPage.getUrl()
    await verification.verifySoftAssertTrue(sbPageUrl.includes('catchpoint.com/ui/Symphony/Smartboard'), 'smartboard page navigation not working')


    //navigate to records 
    await sideNavigationBar.navigateToRecordsFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //select test
    await sourceSelectorPage.clickOnFirstSearchedTestInSelectorPage(webTestID)
    await util.delay(1000)
    await verification.verifyIfElementIsPresent(sourceSelectorPage.pillItem, 'test is not selected')
    //validation for errors
    await verification.validationsForPage()
    //get url
    let recordsPageUrl = await recordsPage.getUrl()
    await verification.verifySoftAssertTrue(recordsPageUrl.includes('catchpoint.com/ui/Symphony/Record'), 'Record page navigation not working')

    //navigate to Custom viz
    await sideNavigationBar.navigateToCustomVizFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let cvPageUrl = await syntheticSmartboardPage.getUrl()
    await verification.verifySoftAssertTrue(cvPageUrl.includes('catchpoint.com/ui/Symphony/CustomVisualization'), 'Custom viz page navigation not working')

    //navigate to Instant test history page
    await sideNavigationBar.navigateToInstantTestHistoryFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let instantTestHistoryPageUrl = await instantTestHistoryPage.getUrl()
    await verification.verifySoftAssertTrue(instantTestHistoryPageUrl.includes('catchpoint.com/ui/Symphony/InstantTest'), 'InstantTest page navigation not working')

    //navigate to Instant test page
    await instantTestHistoryPage.clickOnNewInstantTestButton()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let instantTestPageUrl = await instantTestPage.getUrl()
    await verification.verifySoftAssertTrue(instantTestPageUrl.includes('catchpoint.com/ui/Symphony/InstantTest/Tests/New'), 'InstantTest/Tests/New page navigation not working')

    //navigate to test alert page
    await sideNavigationBar.navigateToAlertLogFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let testAlertPageUrl = await alertLogPage.getUrl()
    await verification.verifySoftAssertTrue(testAlertPageUrl.includes('catchpoint.com/ui/Symphony/Alerts/Test'), 'synthetic alert page navigation not working')

    //navigate to rum alert page
    await alertLogPage.clickOnRumTab()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let rumAlertPageUrl = await alertLogPage.getUrl()
    await verification.verifySoftAssertTrue(rumAlertPageUrl.includes('catchpoint.com/ui/Symphony/Alerts/Rum'), 'rum alert page navigation not working')

    //navigate to contact page
    await sideNavigationBar.navigateToContactPageFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let contactPageUrl = await contactsPage.getUrl()
    await verification.verifySoftAssertTrue(contactPageUrl.includes('catchpoint.com/ui/Symphony/Contacts'), 'contact page navigation not working')

    //navigate to contact group page
    await sideNavigationBar.navigateToContactGroupPageFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let contactGroupPageUrl = await contactGroupPage.getUrl()
    await verification.verifySoftAssertTrue(contactGroupPageUrl.includes('catchpoint.com/ui/Symphony/ContactGroups'), 'ContactGroups page navigation not working')

    //navigate to node map page
    await sideNavigationBar.navigateToMapFromNodeSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let nodeMapPageUrl = await nodeMapPage.getUrl()
    await verification.verifySoftAssertTrue(nodeMapPageUrl.includes('catchpoint.com/ui/Symphony/Nodes/NodeInformation'), 'NodeInformation page navigation not working')

    //navigate to node group page
    await sideNavigationBar.navigateToGroupsFromNodeSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let nodeGroupPageUrl = await nodeGroupPage.getUrl()
    await verification.verifySoftAssertTrue(nodeGroupPageUrl.includes('catchpoint.com/ui/Symphony/Nodes/NodeGroups'), 'NodeGroups page navigation not working')

    //navigate to node page
    await sideNavigationBar.navigateToNodeFromNodeSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let nodePageUrl = await nodeListPage.getUrl()
    await verification.verifySoftAssertTrue(nodePageUrl.includes('catchpoint.com/ui/Symphony/Nodes/NodeList'), 'Nodes/NodeList page navigation not working')

    //navigate to instance page
    await sideNavigationBar.navigateToInstancesFromNodeSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let instancePageUrl = await nodeInstancePage.getUrl()
    await verification.verifySoftAssertTrue(instancePageUrl.includes('catchpoint.com/ui/Symphony/Instances/InstanceList'), 'InstanceList page navigation not working')

    //navigate to Division page
    await sideNavigationBar.navigateToDivisionFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let divisionPageUrl = await divisionPage.getUrl()
    await verification.verifySoftAssertTrue(divisionPageUrl.includes('catchpoint.com/ui/Symphony/Divisions'), 'InstanceList page navigation not working')

    //navigate to User role page
    await sideNavigationBar.navigateToUserrolePageFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let userRolePageUrl = await userrolePage.getUrl()
    await verification.verifySoftAssertTrue(userRolePageUrl.includes('catchpoint.com/ui/Symphony/Divisions'), 'Divisions page navigation not working')

    //navigate to schedule page
    await sideNavigationBar.navigateToSchedulesPageFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let schedulePageUrl = await schedulePage.getUrl()
    await verification.verifySoftAssertTrue(schedulePageUrl.includes('catchpoint.com/ui/Symphony/Schedules'), 'Schedules page navigation not working')

    //navigate to index page
    await sideNavigationBar.navigateToIndexesPageFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let indexPageUrl = await indexPage.getUrl()
    await verification.verifySoftAssertTrue(indexPageUrl.includes('catchpoint.com/ui/Symphony/Administration/Indexes'), 'Indexes page navigation not working')
    
    //navigate to zone page
    await sideNavigationBar.navigateToZoneFromSideNavigation()
    await util.delay(2000)
    //validation for errors
    await verification.validationsForPage()
    //get url
    let zonePageUrl = await zonePage.getUrl()
    await verification.verifySoftAssertTrue(zonePageUrl.includes('catchpoint.com/ui/Symphony/Administration/Zones'), 'Zones page navigation not working')


})