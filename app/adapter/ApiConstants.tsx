const POS_PREFIX = 'pos';
const STK_PREFIX = 'stk';
const HRM_PREFIX = 'hrm';
const PRD_PREFIX = 'prd';
const BASE_PREFIX = 'base';
const WA_PREFIX = 'wa';
const ISN_PREFIX = 'isn';
const RPT_PREFIX = 'rpt';
const ODR_PREFIX = 'odr';
const SLR_PREFIX = 'slr';

const ApiConstants = {
    // AUTH
    LOGIN: `${BASE_PREFIX}/auth/login`,
    LOGOUT: `${BASE_PREFIX}/auth/login/logout`,
    REFRESH_TOKEN: `${BASE_PREFIX}/auth/login/refresh-token`,
    CHANGE_PASSWORD: `${BASE_PREFIX}/auth/change-password`,
    GET_EMPLOYEE_INFOR: `${HRM_PREFIX}/employees-management`,
    GET_USER_INFOR: `${BASE_PREFIX}/auth/me`,
    REGISTER_USER: `${HRM_PREFIX}/employees-management`,
    DELETE_ACCOUNT: `${HRM_PREFIX}/employees-management`,

    // project //
    GET_TASK_TODO: `${HRM_PREFIX}/project/task/user`,
    GET_PROJECT: `${HRM_PREFIX}/project`,
    GET_PROJECT_GROUP_TASK: `${HRM_PREFIX}/project/group-task`,
    GET_PROJECT_TASK: `${HRM_PREFIX}/project/task`,
    GET_PROJECT_HISTORY_TASK: `${HRM_PREFIX}/project/history-task`,
    UPDATE_STATUS_PROJECT_TASK: `${HRM_PREFIX}/project/task/update-status`,

    GET_TIME_SHEET_OF_EMPLOYEE: `${HRM_PREFIX}/time-sheet/shift-date`,
    // TIME KEEPING
    GET_TIME_SHEET: `${HRM_PREFIX}/time-sheet/time-sheet-date-new`,
    // CHECKIN: `${HRM_PREFIX}/time-keeping/checkin`,
    CHECKIN: `${HRM_PREFIX}/time-sheet/check-in-app`,
    // CHECKOUT: `${HRM_PREFIX}/time-keeping/checkout`,
    CHECKOUT: `${HRM_PREFIX}/time-sheet/check-out-web`,
    TIME_KEEPING: `${HRM_PREFIX}/time-sheet/time-sheet-date`,
    TIME_KEEPING_HISTORY: `${HRM_PREFIX}/time-keeping/histories`,
    TIME_SHEET_DATE: `${HRM_PREFIX}/time-sheet`,
    TIME_SHEET_OVERVIEW: `${HRM_PREFIX}/time-sheet/overview`,
    CHECKIN_OT: `${HRM_PREFIX}/time-sheet/check-in-web`,
    CHECKOUT_OT: `${HRM_PREFIX}/time-keeping/checkoutOT`,
    CHECKIN_INVENTORY: `${HRM_PREFIX}/time-sheet/check-in-web`,
    CHECKOUT_INVENTORY: `${HRM_PREFIX}/time-keeping/checkout-inventory`,
    TIMESHEET_DETAIL: `${HRM_PREFIX}/timesheet-management/timeSheet-detail`,
    // GET NOTIFICATION
    GET_NOTIFICATION: `${ISN_PREFIX}/notification`,
    GET_NOTIFICATION_HRM: `${HRM_PREFIX}/notification`,
    READ_NOTIFYCATIONHRM: `${HRM_PREFIX}/notification/is-read`,
    GET_NOTI_DONTREAD: `${HRM_PREFIX}/notification/unread`,
    RESET_NOTI_DONTREAD: `${HRM_PREFIX}/notification/reset`,

    // CATELOGY
    GET_CATEGORY_MAIN: `${ISN_PREFIX}/post/filter`,
    LIKE_POST: `${ISN_PREFIX}/post`,
    UPLOAD_AVATAR: `${ISN_PREFIX}/user/upload/avatar`,
    UPLOAD_COVER: `${ISN_PREFIX}/user/upload/cover`,

    // GROUP
    GET_GROUP_USER: `${ISN_PREFIX}/group`,
    CREATE_NEW_GROUP: `${ISN_PREFIX}/group`,

    // GET USER EMPLOYEE INFO
    GET_INFO_EMPLOYEE: `${ISN_PREFIX}/user`,

    // get master
    GET_BRANCH: `${BASE_PREFIX}/master/branches`,
    GET_WEATHER: `${ISN_PREFIX}/weather`,
    GET_MESSAGE_ERROR: `${BASE_PREFIX}/master/system-message`,
    GET_MASTER_DATA: `${HRM_PREFIX}/employees-management/data/master`,
    GET_TABLE_COMPARE_INVENTORY: `${BASE_PREFIX}/master/screens/SRC16005`,
    GET_TABLE_COMPARE_SALE_RATE_BY_BRANCH: `${BASE_PREFIX}/master/screens/SRC11028`,
    SAVE_SORT_TABLE: `${BASE_PREFIX}/master/screens/save-sort-table`,

    // get report
    GET_REPORT_OVER_VIEW: `${RPT_PREFIX}/orders/overview`,
    GET_DATA_CHART_ORDER: `${RPT_PREFIX}/orders/overview2`,
    GET_DATA_CHART_SALE: `${RPT_PREFIX}/orders/sale-report`,
    GET_DATA_ORDER_REPORT: `${RPT_PREFIX}/orders/order-report`,
    // stock
    GET_DATA_STOCKS_REPORT: `${RPT_PREFIX}/stocks/overview`,
    GET_DATA_STOCKS_LIST: `${STK_PREFIX}/stocks/list`,
    GET_DATA_STOCKS_PRODUCT: `${RPT_PREFIX}/stocks/v2/products`,
    GET_DATA_STOCKS_GENDER: `${RPT_PREFIX}/stocks/gender`,
    GET_DATA_STOCKS_BRANCH: `${RPT_PREFIX}/stocks/v2/branches`,
    GET_DATA_STOCKS_VENDOR: `${RPT_PREFIX}/stocks/v2/vendor`,
    GET_DATA_STOCKS_CATEGORY: `${RPT_PREFIX}/stocks/v2/category`,
    GET_DATA_STOCKS_IMPORT_STOCK: `${RPT_PREFIX}/stocks/importStock`,
    GET_DATA_STOCKS_EXPORT_STOCK: `${RPT_PREFIX}/stocks/exportStock`,
    GET_DATA_STOCKS_INVENTORY: `${RPT_PREFIX}/stocks/inventory/categories/V2`,
    GET_DATA_STOCKS_TRANSFER: `${RPT_PREFIX}/stocks/transferStock`,
    GET_DATA_SEARCH_BRANCH: `${RPT_PREFIX}/stocks/v2/search-branch`,
    GET_DATA_SEARCH_AREA: `${RPT_PREFIX}/stocks/v2/search-area`,
    GET_COMPARE_INVENTORY: `${RPT_PREFIX}/stocks/v2/compare`,
    GET_COMPARE_SALE_RATE_BY_BRANCH: `${RPT_PREFIX}/sale-rate/compare/branch`,
    GET_COMPARE_PRODUCT: `${RPT_PREFIX}/product/compare`,
    GET_DATA_LIFE_CYCLE: `${RPT_PREFIX}/product/life-cycle`,
    GET_DATA_SALE_COMPARE: `${RPT_PREFIX}/sale-compare/branch`,

    GET_LIST_TOP_PRODUCT: `${RPT_PREFIX}/orders/top-products`,
    GET_LIST_STAFF: `${RPT_PREFIX}/orders/top-staff`,
    GET_LIST_CUSTOMER: `${RPT_PREFIX}/orders/top-customer`,
    GET_ORDER_TIME: `${RPT_PREFIX}/orders/order-time`,
    GET_LIST_PROFIT_BRANCH: `${POS_PREFIX}/manage/report/report-of-branch`,
    GET_ORDER_DETAIL: `${ODR_PREFIX}/orders`,
    GET_LIST_ORDER: `${ODR_PREFIX}/orders/filter`,
    GET_ORDER_REVENUE: `${RPT_PREFIX}/orders/order-revenue`,
    GET_ORDER_PROFIT: `${RPT_PREFIX}/orders/order-profit`,

    // - report - revenue
    GET_REVENUE_DATE: `${RPT_PREFIX}/revenue/date-all`,
    // get report with brand
    GET_REVENUE_BRAND: `${RPT_PREFIX}/revenue/branch`,
    // get report with product
    GET_REVENUE_PRODUCT: `${RPT_PREFIX}/revenue/product-all`,
    // get report group insdustry
    GET_REVENUE_GROUP_INDUSTRY: `${RPT_PREFIX}/revenue/categories`,
    GET_REVENUE_INDUSTRY: `${RPT_PREFIX}/revenue/gender`,
    // get report vender
    GET_REVENUE_VENDOR: `${RPT_PREFIX}/revenue/vendor`,
    // get report oder:
    GET_REVENUE_ODER: `${RPT_PREFIX}/revenue/order`,
    // get report employee
    GET_REVENUE_EMPLOYEE: `${RPT_PREFIX}/revenue/employee`,
    // get region
    GET_REGION: `${RPT_PREFIX}/revenue/region`,
    // get wholesale
    GET_WHOLESALE: `${RPT_PREFIX}/revenue/wholesale`,

    // report-offline
    GET_OFFLINE_DATE: `${RPT_PREFIX}/revenue/date`,
    // get report with brand
    GET_OFFLINE_BRANCH: `${RPT_PREFIX}/revenue/branch-v2`,
    GET_OFFLINE_BRANCH_V1: `${RPT_PREFIX}/revenue/branch`,
    // get report with product
    GET_OFFLINE_PRODUCT: `${RPT_PREFIX}/revenue/product`,
    // get report with gender
    GET_OFFLINE_INDUSTRY: `${RPT_PREFIX}/revenue/gender`,
    // get_report with categories
    GET_OFFLINE_CATEGORIES: `${RPT_PREFIX}/revenue/categories`,
    // get_repor with order
    GET_OFFLINE_ORDER: `${RPT_PREFIX}/revenue/order`,
    // get_repor with whosale
    GET_OFFLINE_WHOSALES: `${RPT_PREFIX}/revenue/wholesale`,
    // get_repor with employee
    GET_OFFLINE_EMPLOYESS: `${RPT_PREFIX}/revenue/employee`,
    // get_repor with area
    GET_OFFLINE_AREA: `${RPT_PREFIX}/revenue/region`,

    // sale-rate invenotry
    GET_SALE_RATE_PRODUCT: `${RPT_PREFIX}/sale-rate/product`,
    GET_SALE_RATE_GENDER: `${RPT_PREFIX}/sale-rate/category`,
    GET_SALE_RATE_INDUSTRY: `${RPT_PREFIX}/sale-rate/gender`,

    // master_product_management
    GET_DATA_MASTER_PRODUCT: `${PRD_PREFIX}/products-management/data/master`,

    // get hand discount
    GET_HAND_DISCOUNT: `${RPT_PREFIX}/revenue/order-detail`,
    // Product
    GET_LIST_PRODUCT: `${PRD_PREFIX}/products-management/barcode`,

    // permission
    GET_PERMISSION: `${BASE_PREFIX}/permission/decentralization`,

    // Request
    YOUR_REQUEST_LIST: `${HRM_PREFIX}/request/my-request`,
    MY_APPROVE_LIST: `${HRM_PREFIX}/request/my-approved`,
    CREATE_REQUEST_LEAVE: `${HRM_PREFIX}/request/leave`,
    CREATE_REQUEST_REMOTE: `${HRM_PREFIX}/request/remote`,
    CREATE_REQUEST_OVERTIME: `${HRM_PREFIX}/request/overtime`,
    CREATE_REQUEST_MODE: `${HRM_PREFIX}/request/regime`,
    CREATE_REQUEST_BUSINESS: `${HRM_PREFIX}/request/business`,
    CREATE_REQUEST_ABSENCE: `${HRM_PREFIX}/request/absence`,
    CREATE_REQUEST_IN_OUT: `${HRM_PREFIX}/request/in-out`,
    CREATE_REQUEST_CHANGE_SHIFT: `${HRM_PREFIX}/request/change-shift`,
    CREATE_REQUEST_RESIGNATION: `${HRM_PREFIX}/request/resignation`,
    APPROVE_REQUEST_LEAVE: `${HRM_PREFIX}/request/leave/approved`,
    APPROVE_REQUEST_ABSENCE: `${HRM_PREFIX}/request/absence/approved`,
    APPROVE_REQUEST_OVERTIME: `${HRM_PREFIX}/request/overtime/approved`,
    APPROVE_REQUEST_BUSINESS: `${HRM_PREFIX}/request/business/approved`,
    APPROVE_REQUEST_REMOTE: `${HRM_PREFIX}/request/remote/approved`,
    APPROVE_REQUEST_RESIGNATION: `${HRM_PREFIX}/request/resignation/approved`,
    APPROVE_REQUEST_IN_OUT: `${HRM_PREFIX}/request/in-out/approved`,
    APPROVE_REQUEST_CHANGE_SHIFT: `${HRM_PREFIX}/request/change-shift/approved`,
    APPROVE_REQUEST_REGIME: `${HRM_PREFIX}/request/regime/approved`,

    GET_TYPE_REQUEST: `${HRM_PREFIX}/working-requisition/shift-work-by-empId`,
    GET_EMPLOYEE_MASTER: `${HRM_PREFIX}/working-requisition/requistion/data-master`,
    DELETE_REQUEST: `${HRM_PREFIX}/working-requisition/requistion/delete-many`,
    // Admin
    CHECKED_REQUEST: `${HRM_PREFIX}/working-requisition/requistion/approve`,
    NOT_CHECKED_REQUEST: `${HRM_PREFIX}/working-requisition/requistion/not-approve`,
    UN_APPROVE: `${HRM_PREFIX}/working-requisition/requistion/undo-approve`,
    // CHECKED_REQUEST_V2: `${HRM_PREFIX}/working-requisition/requistion/approve-v2`,
    CHECKED_REQUEST_V2: `${HRM_PREFIX}/working-requisition/requistion/approve-v3`,
    // Superior
    CHECKED_REQUEST_SUPERIOR: `${HRM_PREFIX}/working-requisition/requistion/approve-superior`,
    NOT_CHECKED_REQUEST_SUPERIOR: `${HRM_PREFIX}/working-requisition/requistion/notapprove-superior`,
    UN_APPROVE_SUPERIOR: `${HRM_PREFIX}/working-requisition/requistion/undo-approve-superior`,

    GET_DETAIL_PAID_LEAVE: `${HRM_PREFIX}/paid-leave`,
    GET_DETAIL_REQUEST: `${HRM_PREFIX}/request`,
    DB_TIMESHEET: `${HRM_PREFIX}/time-sheet`,
    DB_SHIFT_WORKING: `${HRM_PREFIX}/shift-working`,
    TYPE_REGIME: `${HRM_PREFIX}/request/type-regime`,

    // data master
    GET_DATA_MASTER_EMPLOYEE: `${HRM_PREFIX}/employees-management`,
    GET_EMPLOYEE_MANAGER: `${HRM_PREFIX}/employees-management/manager`,
    // Requistion
    GET_YOUR_REQUISITION: `${HRM_PREFIX}/working-requisition/requistion/your-requisition`,
    // get detail request

    // shift
    SHIFT_EMPLOYEE: `${HRM_PREFIX}/working-requisition/shift-of-employee`,
    SHIFT_WORK: `${HRM_PREFIX}/working-requisition/shift-work`,
    DELETE_SHIFT_EMPLOYEE: `${HRM_PREFIX}/working-requisition/delete-shift-of-employee`,

    // media
    MEDIA_SYSTEM: 'el-finder-file-system/connector',

    // revenue online
    REVENUE_ONLINE_DATE: `${RPT_PREFIX}/revenue-online/revenue-by-date`,
    REVENUE_ONLINE_TEAM: `${RPT_PREFIX}/revenue-online/revenue-by-team-V2`,
    REVENUE_ONLINE_EMPLOYEE: `${RPT_PREFIX}/revenue-online/employee`,
    REVENUE_ONLINE_ORDER: `${RPT_PREFIX}/revenue-online/order`,

    GET_MASTER_DATA_REPORT: `${RPT_PREFIX}/stocks/data-master`,
    GET_CATEGORY_TREE: `${RPT_PREFIX}/stocks/v2/category-tree`,

    GET_MASTER_GEOGRAPHY: `${BASE_PREFIX}/master/branches/with-managed-group`,
    GET_MASTER_PROVINCE: `${STK_PREFIX}/stocks-export/data/master`,

    CREATE_NEW_POST: `${ISN_PREFIX}/post`,
    GET_DATA_COMMENT: `${ISN_PREFIX}/comment`,

    // SALARY
    GET_SALARY_ADVANCE: `${SLR_PREFIX}/payroll/advance-salary`,

    /// add
    ADD_SALARY_ADVANCE: `${SLR_PREFIX}/payroll/advance-salary`,
    CHANGE_STATUS_SALARY_ADVANCE: `${SLR_PREFIX}/payroll/advance-salary/status`,

    GET_SALARY_PAYROLL: `${SLR_PREFIX}/payroll`,
    GET_HISTORY_SALARY: `${SLR_PREFIX}/payroll/payroll-item-history`,

    GET_SALARY_PAYROLL_DETAIL: `${SLR_PREFIX}/payroll/payroll-item`,

    GET_INVENTORY_BY_STOCK: `${RPT_PREFIX}/stocks/v2/products`,
    GET_SURVEY_QUESTION: `${HRM_PREFIX}/survey-management/survey-question`,
    GET_SURVEY_QUESTION_V2: `${HRM_PREFIX}/survey-management/survey-question-v2`,
    GET_SURVEY_QUESTION_CHECKOUT: `${HRM_PREFIX}/survey-management/survey-question-checkout`,
    GET_SURVEY_QUESTION_CHECKOUT2: `${HRM_PREFIX}/survey-management/survey-question-checkout2`,
    GET_SURVEY_QUESTION_CHECKOUT3: `${HRM_PREFIX}/survey-management/survey-question-checkout3`,
    ANSWER_QUESTION: `${HRM_PREFIX}/survey-management/answer-question`,
    RESULT_QUESTION: `${HRM_PREFIX}/survey-management/survey-result`,
    CHECK_SURVEY: `${HRM_PREFIX}/survey-management/check-survey`,
    CHECK_SURVEY_V2: `${HRM_PREFIX}/survey-management/check-survey-v2`,
    CHECK_SURVEY_V3: `${HRM_PREFIX}/survey-management/check-survey-v3`,

    GET_DETAIL_CLOSING_SALARY: `${SLR_PREFIX}/payroll/closing-salary-detail`,
    GET_PRODUCT_IN_STOCK: `${POS_PREFIX}/sales/products`,
    SURVEY_TIME_KEEPING_CHECKIN: `${HRM_PREFIX}/survey-management/list-result-by-employee`,

    SURVEY_RESULT_DETAIL: `${HRM_PREFIX}/survey-management/survey-result`,
};

export default ApiConstants;

export {
    BASE_PREFIX,
    HRM_PREFIX,
    ISN_PREFIX,
    POS_PREFIX,
    PRD_PREFIX,
    RPT_PREFIX,
    SLR_PREFIX,
    STK_PREFIX,
    WA_PREFIX,
};
