import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import AppConfig from '../utils/AppConfig';
import { API_KEY } from '../utils/Consts';

export function initConfigAxios(){
    axios.interceptors.request.use(
    async function (config) {
        if (
            config.url ==
            'https://erp.api.fmplustest.xyz/api/1.0/hrm/employees-management'
        ) {
            return config;
        }
        config.headers['x-requestid'] = uuidv4();
        config.headers['x-apikey'] = API_KEY;
        config.headers['x-serial-number'] = AppConfig.SERIAL_NUMBER;
        config.headers.phone_ip = AppConfig.IP;
        config.headers.Authorization = `Bearer ${AppConfig.ACCESS_TOKEN}`;
        return config;
    },
    function (error) {
        // if (typeof window !== 'undefined') {
            // console.log("interceptors: ", error);
        // }
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log('err common:', error);
        // Nếu status code == 401
        switch (error?.response?.status) {
            case 401:
                if (AppConfig.isLogin()) {
                    // AppPreferences.removeAccessToken();
                    // store.dispatch({ type: AuthActions.LOGOUT_SUCCESS });
                    // store.dispatch({ type: UserActions.RESET_USER });
                    // resetStackHome('Login');
                    //Close popup
                    // EventRegister.emit(CLOSE_POPUP_WHEN_LOGOUT, {});
                }
                break;
            case 404:
                // if (AppConfig.isLogin()) {
                //     AppPreferences.removeAccessToken();
                //     // store.dispatch({ type: AuthActions.LOGOUT_SUCCESS });
                //     // store.dispatch({ type: UserActions.RESET_USER });
                //     resetStackHome('Welcome');
                //     //Close popup
                //     // EventRegister.emit(CLOSE_POPUP_WHEN_LOGOUT, {});
                // }
                break;
            case 406:
                // Utils.showToast({});
                break;
            default:
                break;
        }
        return Promise.reject(error?.response);
    },
);
}


