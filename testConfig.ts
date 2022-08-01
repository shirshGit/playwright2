// import { qadata } from "resources/qadata"
// import { stagedata } from "resources/stagingdata";

// testData = (val) => {
//     var data = qadata;
//     if(process.env.ENV === 'qa')
//     {
//         data = qadata;
//     }
//     else{
//         data = stagedata;
//     }

//     return data;
// }


export const testConfig = {
    qa: `https://qaportal.catchpoint.com/ui/`,
    stage: `https://portalstage.catchpoint.com/ui/Symphony/`,
    cpun:`qaautomationxclient-clientadministrator@catchpoint.com`,
    cppwd : `Password123!`,
    waitTimeForElement : 5000,
    waitTimeForPageLoad : 20000,
    password: 'Test',
}