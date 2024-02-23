import test from "@lib/BaseTest"
import { ReportListPage } from "@pageobjects/Reports/ReportsPage";
import { ReportTemplatePage } from "@pageobjects/Reports/ReportTemplatePage";
import { Verification } from "@verification/verification";

/*
    CP-44556 : Verify if user is able to navigate to report page from left navigation 
*/
test.skip("VerifyReportListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, context, sideNavigationBar, verification, reportListPage, util}) => {
    await util.delay(4000);
    await sideNavigationBar.clickOnReportSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    let getNewPage = await sideNavigationBar.getNewWindow(context, sideNavigationBar.reportPageLinkSideNavBarLocator);
    let reportPage = new ReportListPage(getNewPage);
    let verification1 = new Verification(getNewPage);
    //verification reportPage
    await verification1.verifyIfElementIsPresent(reportPage.reportCreateLinkLocator, 'Report List Create is not present');
    await verification1.verifyIfElementIsPresent(reportPage.batchReportActiveTopLocator,'Report Active Create is not present')
    
})

/*
     CP-39722 : Verify if user is able to navigate reports templates page from side navigation 
*/
test.skip("VerifyReportTemplateListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, context, sideNavigationBar, verification, reportTemplatePage, util}) => {
    await util.delay(5000);
    await sideNavigationBar.clickOnReportSideNavigation();
    await util.delay(2000);
    //validation for errors
    await verification.validationsForPage();
    let getNewPage = await sideNavigationBar.getNewWindow(context, sideNavigationBar.reportTemplateSideNavLocator);
    let reportTemplatePageInNewTab = new ReportTemplatePage(getNewPage);
    let verification1 = new Verification(getNewPage);
    //verification
    await verification1.verifyIfElementIsPresent(reportTemplatePageInNewTab.reportTeamplateCreateLinkLocator, 'Report template Create link is not present');
    
})