import { combineReducers } from 'redux'

// import EmployeeReducer from './employee/reducer';
import LoginReducer from './login/reducer'

const rootReducer = combineReducers({
    Login: LoginReducer,
})

export default rootReducer
