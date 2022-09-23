import { Utility } from '@util/Utility';

let util = new Utility();

export class TestUtility{

    

    async getProductName(){
        return 'AutomationDeleteUIProduct' + await util.generateRandomText(5);
    }
   
    async getFolderName(){
        return 'AutomationDeleteUIFolder' + await util.generateRandomText(5);
    }
   
    async getTestName(){
        return 'AutomationDeleteUITest' + await util.generateRandomText(5);
    }

    async getNodeName(){
        return 'AutomationDeleteUINode' + await util.generateRandomText(5);
    }

    async getInstanceName(){
        return 'AutomationDeleteUIInstance' + await util.generateRandomText(5);
    }
    async getDashboardName(){
        return 'AutomationDeleteUIDashboard' + await util.generateRandomText(5);
    }
    async getWidgetName(){
        return 'AutomationDeleteUIWidget' + await util.generateRandomText(5);
    }
    async getLocationName(){
        return 'AutomationDeleteUILocation' + await util.generateRandomText(5);
    }
    async getNetworkDeviceName(){
        return 'AutomationDeleteUINetworkDevice' + await util.generateRandomText(5);
    }
    async getEmployeeAppName(){
        return 'AutomationDeleteUIEmployeeApp' + await util.generateRandomText(5);
    }
    async getEndpointAlertName(){
        return 'AutomationDeleteUIEndpointAlert' + await util.generateRandomText(5);
    }
    async getEndpointTestName(){
        return 'AutomationDeleteUIEndpointTest' + await util.generateRandomText(5);
    }
    async getTestTemplatesName(){
        return 'AutomationDeleteUITemplates' + await util.generateRandomText(5);
    }
    async getcontactName(){
        return 'AutomationDeleteUIContact' + await util.generateRandomText(5);
    }
    async getContactGroupName(){
        return 'AutomationDeleteUIContactGroup' + await util.generateRandomText(5);
    }
    async getDivisionName(){
        return 'AutomationDeleteUIDivision' + await util.generateRandomText(5);
    }
    async getScheduleName(){
        return 'AutomationDeleteUISchedule' + await util.generateRandomText(5);
    }
    async getIndexName(){
        return 'AutomationDeleteUIIndex' + await util.generateRandomText(5);
    }
    async getUserroleName(){
        return 'AutomationDeleteUIUserrole' + await util.generateRandomText(5);
    }
    async getZoneName(){
        return 'AutomationDeleteUIZone' + await util.generateRandomText(5);
    }
   
   
}