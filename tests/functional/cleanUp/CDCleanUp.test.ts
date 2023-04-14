import test from "@lib/BaseTest"

test("deleteFolder @CleanUp", async({baseTestUtil,sideNavigationBar,defaultDashboardPage, dashboardBlade}) => {
    await defaultDashboardPage.clickOnOverviewdashboard();
    await dashboardBlade.deleteBulkFolder('DashboardFolderAutomation');
})

test("deleteDB @CleanUp", async({baseTestUtil,sideNavigationBar,defaultDashboardPage, dashboardBlade}) => {
    await defaultDashboardPage.clickOnOverviewdashboard();
    await dashboardBlade.deleteBulkDBItems('AutomationDeleteUI');
})
