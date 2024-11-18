import { DeviceEventEmitter, Platform } from 'react-native';

const DEVELOPMENT = true;
export default class AppConfig {
    static API_VERSION = 'v1';

    static ACCESS_TOKEN = '';

    static IS_SAVE_ACCOUNT = false;

    static TOKEN_SECRET = '';

    static SERIAL_NUMBER = '';

    static PLAYER_ID = '';

    static BROWER = '';

    static IP = '';

    static FULLNAME = '';

    static PHONE = '';

    static BLACK_LIST_STRING = '';

    static MIN_AGE = 11;

    static _eventEmitter = DeviceEventEmitter;

    static TIMEOUT_SCREEN = 300;

    static SIGNALR_TIMEOUT = 8 * 60 * 60;

    static COUNTDOWN_RESEND_IF_ERROR = 10;

    static COUNTDOWN_RESEND_OTP = 300;

    static ANDROID_VERSION = '1.0.1';

    static IOS_VERSION = '1.0.1';

    static SHOW_MODAL_SAVE_ACCOUNT = true;

    static CAPTCHA_SITE_KEY = '';

    static CAPTCHA_BASE_URL = '';

    static LAT = '';

    static LON = '';

    static MAX_FILE_UPLOAD = 0;

    static MAX_SIZE_UPLOAD = 0;

    static REVIEW_CONTENT_LENGTH = 0;

    static TEMP_TOKEN = '';

    static MAX_MONEY_FILTER = 1000000;

    static TIME_WAITING_LOGIN_FAILED = 10;

    static IS_ON_CHAT_SCREEN = false;

    static FACE_BOOK_APP_ID = '1108262250008334';
    static GOOGLE_CLIENT_ID =
        '444862113080-fs7pml4cj4u61c6e5i1fov6i1jc2a8pg.apps.googleusercontent.com';

    static dev() {
        return __DEV__;
    }

    static isLogin() {
        return !!AppConfig.ACCESS_TOKEN;
    }

    static isDev() {
        return DEVELOPMENT;
    }

    static getApiVersion() {
        return AppConfig.API_VERSION;
    }
    static listenEvent(key, callback) {
        AppConfig._eventEmitter.addListener(key, callback);
    }
    static emit(key, params) {
        AppConfig._eventEmitter.emit(key, params);
    }

    static getAppVersion() {
        return Platform.OS === 'ios'
            ? AppConfig.IOS_VERSION
            : AppConfig.ANDROID_VERSION;
    }

    // ROLE
    // 0 : Nhân viên
    // 1 : Quản lý
    // 2 : Nhân sự
    static ROLE = 0;

    static AREA_MANAGER = false;

    static typeOfShift = 0;

    static MESSAGE_ERROR = [
        {
            Id: "E336",
            Content: 'Người tạo đơn và người duyệt không được trùng nhau'
        },
        {
            Id: "E344",
            Content: 'Bạn không nằm trong thời gian chấm công của ca'
        },
        {
            Id: "E339",
            Content: 'Thời gian trong đơn đã được tạo'
        },
        {
            Id: "E0001",
            Content: 'Thời gian trong đơn đã được tạo'
        },
    ];

    static BLOCK_CODE = 0;

    static IS_FUNCTION_WATCH_REPORT = false;
    static IS_WATCH_ALL_BRANCH = false;
    static IS_WATCH_ORIGIN_PRICE_AND_PROFIT = false;

    // define role
}
