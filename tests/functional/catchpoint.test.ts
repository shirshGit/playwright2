import test from '@lib/BaseTest';
import { ElementHandle } from 'playwright';
import { LoginPageObjects } from "@objects/LoginPageObjects";
import { NewTabInstatntTest } from '@pages/InstantTestNewWindow';



test(`@Smoke @Login Test1`, async ({ context, loginPage, instantTabWindow }) => {
    
    var loginPageObjects = new LoginPageObjects();
    await loginPage.navigateToCPUrl();
    await loginPage.loginToCP();
    
    let newPage = await loginPage.newWindowHandle(context, loginPageObjects.CP_INSTANT_TEST_ID);

    let instantTest = new NewTabInstatntTest(newPage);

    await instantTest.typeUrlInInstantTest();

    await instantTest.clickOnInstantTestRun();

    

    //instantTabWindow.typeUrlInInstantTest();
    //newPage.type(loginPageObjects.CP_INSTANT_TEST_SYNTHETIC_URL, 'https://www.google.com');
});


test(`@Smoke Test2`, async ({ context, loginPage, instantTabWindow }) => {
    
    var loginPageObjects = new LoginPageObjects();
    await loginPage.navigateToCPUrl();
    await loginPage.loginToCP();
    
    let newPage = await loginPage.newWindowHandle(context, loginPageObjects.CP_INSTANT_TEST_ID);

    let instantTest = new NewTabInstatntTest(newPage);

    await instantTest.typeUrlInInstantTest();

    await instantTest.clickOnInstantTestRun();

    //instantTabWindow.typeUrlInInstantTest();
    //newPage.type(loginPageObjects.CP_INSTANT_TEST_SYNTHETIC_URL, 'https://www.google.com');
});


test(`@Login Test3`, async ({ context, loginPage, instantTabWindow }) => {
    
    var loginPageObjects = new LoginPageObjects();
    await loginPage.navigateToCPUrl();
    await loginPage.loginToCP();
    
    let newPage = await loginPage.newWindowHandle(context, loginPageObjects.CP_INSTANT_TEST_ID);

    let instantTest = new NewTabInstatntTest(newPage);

    await instantTest.typeUrlInInstantTest();

    await instantTest.clickOnInstantTestRun();

    //instantTabWindow.typeUrlInInstantTest();
    //newPage.type(loginPageObjects.CP_INSTANT_TEST_SYNTHETIC_URL, 'https://www.google.com');
});

test(`@Login Test4`, async ({ context, loginPage, instantTabWindow }) => {
    
    var loginPageObjects = new LoginPageObjects();
    await loginPage.navigateToCPUrl();
    await loginPage.loginToCP();
    
    let newPage = await loginPage.newWindowHandle(context, loginPageObjects.CP_INSTANT_TEST_ID);

    let instantTest = new NewTabInstatntTest(newPage);

    await instantTest.typeUrlInInstantTest();

    await instantTest.clickOnInstantTestRun();

    //instantTabWindow.typeUrlInInstantTest();
    //newPage.type(loginPageObjects.CP_INSTANT_TEST_SYNTHETIC_URL, 'https://www.google.com');
});