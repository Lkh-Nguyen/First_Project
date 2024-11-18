import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import Factories from './factories';
import LoginAction, { signInSuccess } from './action';
import AppConfig from '../../utils/AppConfig';
import AppPreferences from '../../utils/AppPreferences';

  
const handleToken = async (token: string, refresh_token: string) => {
    // Save token
    AppConfig.ACCESS_TOKEN = token;
    // await AppPreferences.saveAccessToken(token);
    // await AppPreferences.set('refresh_token', refresh_token);
};


export function* signIn() {
    yield takeEvery(LoginAction.SIGN_IN, function* (payload: any) {
        const { data, callback } = payload;
        try {
            const response = yield call(() => Factories.signIn(data));
            if (response?.data?.Code == 200) {
                handleToken(
                    response.data?.Data?.Token,
                    response.data?.Data?.RefreshToken,
                );
                const autho = {
                    token: response?.data?.Data?.Token,
                    refreshToken: response?.data?.Data?.RefreshToken
                }
                callback(response?.data?.Code);
                yield put(signInSuccess(autho));

            } else {
                yield put(signInSuccess({}));
                if (callback) {
                    if (response?.data?.MsgNo == 'E014') {
                        callback(response?.data?.MsgNo);
                    } else {
                        callback(response?.data?.MsgNo);
                    }
                }
            }
        } catch (error) {
            console.log('xxxx error', error);
        }
    });
}
export default function* loginSaga() {
    yield all([fork(signIn)]);
}
