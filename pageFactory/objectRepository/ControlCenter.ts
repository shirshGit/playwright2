export class ControlCenter{
    NEW_ITEM_CREATION = '//button[text()="New"]';
    NEW_PRODUCT_ITEM = '//p[text()="Product"]';
    NEW_FOLDER_ITEM = '//p[text()="Folder"]';
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
    GET_SELECTED_WEBHOOK_TEXT = '//div[@data-testid = "test-webhook-dropdown"]/span/div/span';
    LOCATOR_TO_CLICK_ON_SEARCHED_ITEM = '//div[@data-testid = "table_row"]//div[@data-automationid = "DetailsRowCell"]//a';
    DEACTIVATE_BUTTON_IN_CONTAINER = '//button[text()="Deactivate"]/..';
    ADD_ADVANCE_SETTING_TITLE = '//button[@title = "Add Advanced Setting"]';
    CHECKBOX_FOR_ALL_ADVANCE_SETTINGS = '//div[@data-testid = "advancedsettingsblade"]//span//div[@data-automationid = "DetailsRowCheck"]//i[@data-icon-name="StatusCircleCheckmark"]';
    THREE_DOT_MENU_OF_SEARCHED_ITEM = '//div[@data-testid="icon-menu-cell"]//i';
    PROPERTIES_AFTER_THREE_DOT_MENU = '//i[@data-icon-name="properties"]';
    COMMON_LOCATOR_FOR_ALL_ADVNC_SETTINGS = 'div[class*="AdvancedSettingsCells_container"]';
    COMMON_LOCATOR_TO_GET_SELECTED_NODES = '//div[contains(@class, "NodeRow__StyledNameRow")]';
    APPLY_BUTTON = '//button[@data-testid="primary-button"]//span[text()="Apply"]';
    INCREASE_PING_COUNT_TEXT_BOX = '//div[text()="Increase Ping Count"]//input';
    INCREASE_HOP_FAILURE_COUNT = '//div[text()="Increase Failure Hop Count"]//input';
    MQTT_SUBNET_CLIENTID_TXT_BOX = '//div[text()="MQTT Client ID"]//input';
    EDNS_SUBNET_TXT_BOX = '//div[text()="EDNS Subnet"]//input';
    VIEWPORT_WIDTH_TXT_BOX = 'input#widthTextbox';
    VIEWPORT_LENGTH_TXT_BOX = 'input#heightTextbox';
    COLLAPSIBLE_ADVANCE_SETTINGS_LOCATOR = '//span[(contains(@class,"CollapsibleContainer_clickable")) and (text() = "Advanced Settings")]';
    PROPERTIES_BLADE_CANCEL_BUTTUON = '//div[@data-testid="cancel-icon"]';
    DELETE_OPTION_AFTER_THREE_DOT_MENU = '//i[@data-icon-name="delete"]';
    SYNTHETIC_LOCATION_BLADE_TITILE = 'div[class*="Blade_header"]';
    LOCATION_BLADE_NAVIGATION_TREE_TITLE = 'div[class*="NavigationTree_navGroupWrapper"]';
    LOCATION_BLADE_NAV_ITEM_HEADER = 'div[class*="Blade_contentWithHeaderAndFooter"] div[data-testid = "navigation"] ul';

}