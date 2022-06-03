export class ControlCenter{
    NEW_ITEM_CREATION = '//button[text()="New"]';
    NEW_PRODUCT_ITEM = '//p[text()="Product"]';
    PRODUCT_NAME_FIELD = '#name-input';
    ADD_NODES_FIELD = '//input[contains(@placeholder ,"Add Node")]';
    SAVE_BUTTON = '//span[text()="Save"]';
    SEARCH_BOX = '//div[@id = "callOutTarget"]//input[@id ="fabric-search-box"]';
    FIRST_ROW_SEARCH_RESULT = '//div[@data-testid = "table_row"]//a';
    FIRST_ROW_CHECKBOX_SELECTION = '//div[@data-testid = "table_row"]//i[@data-icon-name = "StatusCircleCheckmark"]';
    DELETE_BUTTON = '//button[text()="Delete"]';
    POPUP_DELETE_BUTTON = '//div[contains(@class, "DialogPopup")]//button[text()="Delete"]';
    TESTDATA_WEBHOOK_TOOGLE_BUTTON = '#test-webhook-toggle';
    NEW_DATAWEBHOOK_DROPDOWN = '//span[text() = "New Webhook"]';
    COMMON_LOCATOR_DATA_WEBHOOK_SELECTION = (text : string) => {return  `//span[text()="${text}"]`};
    GET_SELECTED_WEBHOOK_TEXT = '//div[@data-testid = "test-webhook-dropdown"]/span/div/span'
    
}