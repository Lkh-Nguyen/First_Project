
import { moderateScale, scale, verticalScale } from '../libs/reactSizeMatter/scalingUtils'

//Permission
export const FUNCTIONS = {
    CREATE_HOUSE_HOLD: 'FNC17005', //tạo hộ đơn từ
    REQUEST_LIST_BY_USER: 'FNC17002', // Xem đơn từ của bạn
    REQUEST_APPROVE_LIST_BY_USER: 'SRC17003', // Đơn từ bạn duyệt
    REQUEST: 'FNC17008',
    VIEW_ALL_REQUEST: 'FNC17001', //xem tất cả đơn từ
    VIEW_ALL_REQUEST_OF_BRAND: 'FNC17006', //xem được tất cả các cửa hàng,
    VIEW_ALL_REQUEST_OF_REGION: 'FNC17007', //xem đơn từ theo vùng
    APPROVER_REQUEST: 'FNC17008', //phê duyệt đơn từ
    WATCH_REPORT_MODULE: 'FNC11001',
    WATCH_ALL_BRANCH: 'FNC11007',
    WATCH_ORIGIN_PRIVE_AND_PROFIT: 'FNC11019'
}

// Border Radius
export const BR_BUTTON = scale(12)
export const BR_POPUP = scale(4)
export const BR_MODEL = scale(4)
export const BR_INPUT = scale(4)

// ======== PRODUCT DOMAIN ===========
// export const BASE_API_URL_FM = 'http://192.168.1.17:6868/api/1.0';
export const BASE_API_URL = 'http://192.168.1.17:6868/api/1.0';
// export const SIGNALR_URL = 'http://192.168.1.17:6868';

export const BASE_API_URL_FM = 'http://103.228.75.60:6868/api/1.0'
// export const BASE_API_URL = 'http://103.228.75.60:6868/api/1.0'
export const SIGNALR_URL = 'http://103.228.75.60'
//
export const API_KEY = 'PnVdWXApSHQlUiJDey14aFU4TVVROT1aP0tAOVhwSGE'
export const ONE_SIGNAL_APP_ID = '0945e291-1580-4c11-a991-d898c4286d01'
export const BASE_MEDIA_API_URL = 'https://media.fmplus.com.vn'

// ======== STAGING DOMAIN ===========
// export const BASE_API_URL_FM = 'https://api.fmplus.com.vn/api/1.0';
// export const BASE_API_URL = 'https://erp-stg.api.fm.com.vn/api/1.0';
// export const SIGNALR_URL = 'https://erp-stg.api.fm.com.vn';
// export const API_KEY = 'X2geZ7rDEDI73K1vqwEGStqGtR90JNJ0K4sQHIrbUI3YISlv';
// export const ONE_SIGNAL_APP_ID = '52108bd7-10d4-4ba9-9c6b-65323006cdd6';
// export const BASE_MEDIA_API_URL = 'https://media.fmplustest.xyz';

// ======== DEV ===========
// export const BASE_API_URL_FM = 'https://api.fmplustest.xyz/api/1.0';
// export const BASE_API_URL = 'https://erp.api.fmplustest.xyz/api/1.0';
// export const SIGNALR_URL = 'https://erp.api.fmplustest.xyz';
// export const API_KEY = 'PnVdWXApSHQlUiJDey14aFU4TVVROT1aP0tAOVhwSGE';
// export const ONE_SIGNAL_APP_ID = '52108bd7-10d4-4ba9-9c6b-65323006cdd6';
// export const BASE_MEDIA_API_URL = 'https://media.fmplustest.xyz';

export const DARK_MODE = 'DARK_MODE'
export const LIGHT_MODE = 'LIGHT_MODE'
export const PRIMARY = 'PRIMARY'
export const SECONDARY = 'SECONDARY'
export const CANCEL = 'CANCEL'
export const DANGER = 'DANGER'
export const INIT_FIRST_LOAD = 'INIT_FIRST_LOAD'
export const BLACK_LIST_STRING = 'KimHoangVu,Fm,FmStyle,Fmkid,FmMen,Fmkids'
export const CURRENCY = 'VND'
export const CAPTCHA_SITE_KEY = '6LdAA9UaAAAAAExxWr_rzIQ'
export const CAPTCHA_BASE_URL = 'https://fmplus.com.vn'
export const TEMP_LOCK = 10
export const LOCK = 20
export const DEAULT_LIMIT = 12
export const FROM_HISTORY_ORDER = 1
export const FROM_HISTORY_POINT = 2
// ======== SIGNALR ===========
export const SHOW_MODAL_EXPIRE = 'SHOW_MODAL_EXPIRE'
export const SHOW_MODAL_WARNING_LOGIN = 'SHOW_MODAL_WARNING_LOGIN'
export const SHOW_MODAL_REGISTER_SUCCESS = 'SHOW_MODAL_REGISTER_SUCCESS'
// ======== Font size =========
export const FONT_TITLE = moderateScale(18)
export const FONT_SUB_TITLE = moderateScale(16)
export const FONT_NORMAL = moderateScale(14)
export const FONT_SMALL = moderateScale(12)
export const PADDING_POPUP_VERTICAL = verticalScale(20)
export const PADDING_POPUP_HORIZONTAL = verticalScale(16)
export const LINE_HEIGHT_POPUP = moderateScale(20)
export const SEPARATOR_WIDTH = 0.7
export const PADDING_HORIZONTAL = scale(16)
export const PADDING_VERTICAL = scale(16)
export const PADDING_HORIZONTAL_HOME = scale(5)
export const MARGIN_BETWEEN_SECTION = verticalScale(5)

// ======== POPUP ===========
export const POPUP_BUY_POINT = 1

export const HEIGHT_BUTTON_POPUP = 32
// ========= GENDER ==========
export const GENDER_MALE = 'M'
export const GENDER_FEMALE = 'F'
export const GENDER_OTHER = 'S'
// ========= FAQ ==========
export const FAQ_MEMBERSHIP = '1'
export const FAQ_ACCOUNT = '2'
export const FAQ_PAYMENT = '3'
// export const FAQ_WALLET = '4';
export const FAQ_BUY_ONLINE = '4'

// ======== Separator Type ==========
export const SEPARATOR_BOTH = 1
export const SEPARATOR_PADDINGLEFT = 2

// ============ image product =========
export const IMAGE_PRODUCT = 'https://cf.shopee.vn/file/af44fa8f8f99a5ed49af72e922420bd7_tn'
// ============ MAT =========
export const MAT_INPUT_HEIGHT = verticalScale(30)
export const MAT_INPUT_MARGIN_TOP = verticalScale(5)
// ======== Display Name ==========
export const SHOW_FULL_NAME = 1
export const SHOW_USER_NAME = 2
export const SHOW_INCOGNITO = 3

// ======== Border Radius ==========
export const BORDER_RADIUS = scale(12)
export const BORDER_RADIUS_FORM = scale(8)
// ======== TimeKeeping Status =====
export const TIME_KEEPING_STATUS = {
    10: 'Đã check in',
    20: 'Đi trễ',
    30: 'Đã checkout',
    40: 'Về sớm',
    50: 'Vắng',
    90: 'Xác nhận'
}

export const POPUP_REPORT_POST = 46

export const PURCHASE_TYPE = {
    ONLINE_WEB: '3',
    ONLINE_APP: '2',
    POS: '1'
}
export const SHIFT_TYPE = {
    SHIFT_MAIN: 1,
    SHIFT_PART_TIME: 3,
    SHIFT_FREE: 2
}

export const NO_IMAGE_DEFAULT =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'

// request type
export const CHECKIN_OUT = 10
export const LEAVE_APPLICATION = 20
export const ABSENCE_APPLICATION = 30
export const OVERTIME_DETAIL = 40
export const REMOTE_REQUEST = 50
export const CHANGE_SHIFT_TIME_DETAIL = 60
export const BUSINESS_REQUEST = 70
export const RESIGNATION_REQUEST = 80
export const MODE_REQUEST = 90

export const BORDER_RADIUS_POPUP = scale(1)
export const BORDER_RADIUS_BUTTON = scale(1)

export const STATUS_PROJECT_HISTORY_TASK = [
    {
        key: 10,
        value: 10,
        label: 'đã tạo mới'
    },
    {
        key: 20,
        value: 20,
        label: 'đã cập nhật'
    }
]
export const TYPE_PROJECT_HISTORY_TASK = [
    {
        key: 1,
        value: 1,
        label: 'Trạng thái'
    },
    {
        key: 2,
        value: 2,
        label: 'Độ ưu tiên'
    },
    {
        key: 3,
        value: 3,
        label: 'Tiến độ'
    },
    {
        key: 4,
        value: 4,
        label: 'Người thực hiện'
    },
    {
        key: 5,
        value: 5,
        label: 'Ngày bắt đầu'
    },
    {
        key: 6,
        value: 6,
        label: 'Kết thúc'
    }
]

export const REQUEST_TYPE = {
    LEAVE: 20,
    ABSENCE: 30,
    CHECKIN_OUT: 10,
    OVERTIME: 40,
    ADDITIONAL_TIME: 60
}

export const REQUEST_STATUS = {
    PENDING: 10,
    APPROVED: 20,
    DENIED: 30
}

export const TYPE_LETTERS = [
    {
        value: 20,
        label: 'Đơn xin nghỉ',
        router: 'LETTERS_ON_LEAVE_DETAIL',
        key: 20,
        class: 'border-grey'
    },
    {
        value: 10,
        label: 'Đơn quên chấm công',
        router: 'LETTERS_CHECKIN_DETAILS',
        key: 10,
        class: 'border-green'
    },
    {
        value: 30,
        key: 30,
        label: 'Đơn vắng mặt',
        router: 'LETTERS_ABSENCE_DETAIL',
        class: 'border-grey'
    },
    {
        value: 50,
        key: 50,
        router: 'LETTERS_REMOTE_DETAIL',
        label: 'Đơn làm việc từ xa',
        class: 'border-grey'
    },
    {
        value: 60,
        key: 60,
        router: 'DETAIL_LETTERS_SHIFT_CHANGE',
        label: 'Đơn đổi ca',
        class: 'border-grey'
    },
    {
        value: 90,
        key: 90,
        router: 'LETTERS_MODE_DETAIL',
        label: 'Đơn làm theo chế độ',
        class: 'border-grey'
    },
    {
        value: 40,
        key: 40,
        router: 'LETTERS_OVERTIME_DETAIL',
        label: 'Đơn tăng ca',
        class: 'border-grey'
    },
    {
        value: 70,
        key: 70,
        router: 'LETTERS_BUSINESS_TRIP_DETAIL',
        label: 'Đơn công tác',
        class: 'border-grey'
    },
  
    // {
    //     value: 80,
    //     key: 80,
    //     router: 'LETTERS_RESIGNATION_DETAIL',
    //     label: 'Đơn xin nghỉ việc',
    //     class: 'border-grey'
    // },
  
]
export const REPORT_LINEAR_CODE_COLOR = [
    {
        gradientFrom: '#FFD9A8',
        gradientTo: '#FFFCF9',
        textColor: '#D27800'
    },
    {
        gradientFrom: '#BDFFB6',
        gradientTo: '#FAFFFA',
        textColor: '#37AC00'
    },
    {
        gradientFrom: '#C3FBED',
        gradientTo: '#F9FFFF',
        textColor: '#009571'
    },
    {
        gradientFrom: '#3750B2',
        gradientTo: '#FFFFFF',
        textColor: '#0054E1'
    },
    {
        gradientFrom: '#FFF59A',
        gradientTo: '#FFFEF9',
        textColor: '#9F7C00'
    },
    {
        gradientFrom: '#FFB2B2',
        gradientTo: '#FFFCFC',
        textColor: '#FF2C00'
    },

    {
        gradientFrom: '#CBC2FF',
        gradientTo: '#FBFBFF',
        textColor: '#5C00FF'
    },
    {
        gradientFrom: '#FFD9A8',
        gradientTo: '#FFFCF9',
        textColor: '#D27800'
    },
    {
        gradientFrom: '#BDFFB6',
        gradientTo: '#FAFFFA',
        textColor: '#37AC00'
    }
]

export const STATUS_REQUEST = {
    10: 'Chờ duyệt',
    20: 'Đã duyệt',
    30: 'Không duyệt',
    21: 'Chờ NS duyệt',
    22: 'Đơn đã duyệt',
    91: 'Đơn không duyệt',
    92: 'Đơn không duyệt'
}
export const TASK_PRIORITY = [
    {
        key: 10,
        value: 10,
        label: 'Khẩn cấp',
        class: 'sttRed'
    },
    {
        key: 20,
        value: 20,
        label: 'Cao',
        class: 'sttOrange'
    },
    {
        key: 30,
        value: 30,
        label: 'Trung bình',
        class: 'sttYellow'
    },
    {
        key: 40,
        value: 40,
        label: 'Bình thường',
        class: 'sttBlue'
    },
    {
        key: 50,
        value: 50,
        label: 'Thấp',
        class: 'sttGreen'
    }
]
export const TYPE_LEAVE = [
    {
        key: 1,
        id: 1,
        //   value: 1,
        value: 'Nghỉ một ngày'
    },
    {
        id: 2,
        key: 2,
        //   value: 2,
        value: 'Nghỉ buổi sáng'
    },
    {
        id: 3,
        key: 3,
        //   value: 3,
        value: 'Nghỉ buổi chiều'
    },
    {
        id: 4,
        key: 4,
        //   value: 4,
        value: 'Nghỉ nhiều ngày'
    }
]

export const TYPE_OF_WORKING = [
    {
        id: 1,
        value: 'Làm 1 ngày'
    },
    {
        id: 2,
        value: 'Làm buổi sáng'
    },
    {
        id: 3,
        value: 'Làm buổi chiều'
    },
    {
        id: 4,
        value: 'Làm nhiều ngày'
    }
]
// using above
export const SHIFT_CHANGE_TYPE = [
    {
        id: 10,
        value: 'Đổi cho bản thân'
    },
    {
        id: 20,
        value: 'Đổi cho người khác'
    }
]
export const STATUS_REQUEST_V2 = {
    WAITING: '10', // 10 chờ duyệt
    APPROVED: '20', //20 duyệt
    NOT_APPROVED: '90' //90 không duyệt
}

export const STATUS_REQUEST_APPROVE = {
    WAITING: 10, // 10 chờ duyệt
    APPROVED: 20, // 20 duyệt
    CONFIRM: 15,
    NOT_APPROVED: 30, //90 không duyệt

    APPROVED_BY_LEADER: 21, // 21 duyệt bởi CHT
    APPROVED_BY_ADMIN: 22, // 22 duyệt bởi admin, level 2
    NOT_APPROVED_LEADER: 91, // 91 không duyệt bởi CHT
    NOT_APPROVED_ADMIN: 92 // 92 không duyệt bởi admin, level 2
}

//Block Code
export const BLOCK_CODE = {
    SUPPORT: 'KHT',
    PERSONNEL: 'KNS',
    BUSINESS_ONLINE: 'KDONLINE',
    BUSINESS_OFFLINE: 'KDOFFLINE'
}

// ROLES
export const ROLES = {
    EMPLOYEE: 0,
    LEADER: 1,
    PERSONNEL: 2,
    AREA_MANAGER: 3
}

export const REQUEST_BOTTOM_TAB = {
    YOUR_REQUEST: 1,
    YOU_APPROVE: 2,
    ALL_REQUEST: 3
}

export const TYPE_PAID_LEAVE = {
    HALF_DAY: 10,
    ONE_DAY: 20,
    MORE_DAY: 30,
    MORNING: 40,
    AFTERNOON: 50,
    PART_HEAD_ONE: 60,
    PART_AFTER_ONE: 70,
    PART_HEAD_TWO: 80,
    PART_AFTER_TWO: 90
}

// export const TYPE_LEAVE = {
//     ANNUAL_LEAVE: 10,
//     MONTHLY_LEAVE: 20,
// };

export const TYPE_DISPLAY = {
    ONLY_TITLE: 1,
    SUB_TITLE: 2,
    ONLY_TITLE_BLUE: 3
}

export const TYPE_TABLE_DISPLAY = {
    PROFIT: 1,
    NUMBER: 2
}
export const TOP_RENDER = {
    TOP_5: 5
}

export const TYPE_TABLE = {
    BRANCH_BY_INVENTORY: 1,
    BRANCH_BY_SALE_RATE: 2
}
export const COLOR_CHART = {
    color1: '#FCCD28',
    color2: '#81C784',
    color3: '#FFCEC8',
    color4: '#7AE0FF'
}

export const NUMBER_SURVEY = {
    VALUE: 5
}
export const MESSAGES_CHAT_STATUS = {
    NEW: 10,
    SENDING: 20,
    SENT: 30,
    RECEIVED: 40,
    READ: 50,
    ERROR: 60
}
export const CHAT_GROUP_NAME = 'SalaryChatGroup'

export const CHAT_HUB = {
    ERROR: 'Error',
    CONNECTED: 'Connected',
    DISCONNECTED: 'Disconnected',
    ADDED_TO_GROUP: 'AddedToGroup',
    REMOVED_FROM_GROUP: 'RemovedFromGroup',
    ON_SENT: 'OnSent',
    ON_RECEIVED: 'OnReceived',
    ON_SENT_ERROR: 'OnSentError',
    ON_READ: 'OnRead',
    ON_JOIN: 'OnJoin',
    ON_LEAVE: 'OnLeave',
    ON_FINISH: 'OnFinish',
    CUSTOMER_CARE_GROUP: 'CustomerCareGroup',
    ON_ASSIGN_TAG: 'OnAssignTag'
}
export const HUB_INVOKE = {
    ON_ASSIGN_TAG: 'OnAdminAssignTag',
    ON_ADMIN_SEND: 'OnAdminSent',
    ON_ADMIN_READ: 'OnAdminRead',
    ADD_TO_GROUP: 'AddToGroup'
}

export const PARAM_CHAT = {
    TYPE: 40,
    PAGE_SIZE: 30
}
export const STATUS_ADVANCE = {
    WAITING: 10,
    APPROVED: 20,
    NOT_APPROVED: 30,
    CLOSE: 40,
    WAIT_CLOSE: 50
}

export const STATUS_CLOSING = {
    WAIT_CLOSING: 50,
    CLOSING: 40
}

export const APPROVE_ADVANCE_SALARY = {
    FM5303: {
        id: 1623528,
        label: 'FM5303 - Trần Thị Kiều Anh'
    },
    FM0548: {
        id: 1623526,
        label: 'FM0548 - Nguyễn Thị Ý Nhi'
    }
}
export const CHAT_TYPE = {
    FEEDBACK: 10,
    CLAIM: 20,
    QA: 30,
    SALARY_CHAT: 40
}

export const SALARY_FEEDBACK_ROLE = {
    CB: '10',
    GROUP_LEADER: '20'
}

export const STATUS_CLOSING_SALARY = {
    SENDED: 120,
    NOT_SENDED: 110
}
export const CHECKOUT_SURVEY_ID = {
    Id: 21
}

export const TIME_SURVEY = {
    NOT_ESSAY: 5,
    HAVE_ESSAY: 15
}
