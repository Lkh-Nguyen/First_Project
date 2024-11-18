import { all } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import LoginSaga from './login/saga';

export default function* rootSaga(getState: any) {
    yield all([
        LoginSaga(),
    ]);
}
