import test from "@lib/BaseTest"
import { ReportListPage } from "@pageobjects/Reports/ReportsPage";
import { ReportTemplatePage } from "@pageobjects/Reports/ReportTemplatePage";
import { Verification } from "@verification/verification";
//import { SideNavBar } from "@pageobjects/SideNavBar/SideNavigationBar";

test.skip("VerifyReportListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, context, sideNavigationBar, verification, reportListPage, util}) => {
    await sideNavigationBar.clickOnReportSideNavigation();
    await util.delay(2000);
    let getNewPage = await sideNavigationBar.getNewWindow(context, sideNavigationBar.reportPageLinkSideNavBarLocator);
    let reportPage = new ReportListPage(getNewPage);
    let verification1 = new Verification(getNewPage);
    //await reportPage
    await verification1.verifyIfElementIsPresent(reportPage.reportCreateLinkLocator, 'Report List Create is not present');
    await verification1.verifyIfElementIsPresent(reportPage.batchReportActiveTopLocator,'Report Active Create is not present')
})

test("VerifyReportTemplateListPageLoads @PageNavigation@ProductionSmoke@Smoke", async({baseTestUtil, context, sideNavigationBar, verification, reportTemplatePage, util}) => {
    await sideNavigationBar.clickOnReportSideNavigation();
    await util.delay(2000);
    let getNewPage = await sideNavigationBar.getNewWindow(context, sideNavigationBar.reportTemplateSideNavLocator);
    let reportTemplatePageInNewTab = new ReportTemplatePage(getNewPage);
    let verification1 = new Verification(getNewPage);
    //await reportPage
    await verification1.verifyIfElementIsPresent(reportTemplatePageInNewTab.reportTeamplateCreateLinkLocator, 'Report List Create is not present');
    
})