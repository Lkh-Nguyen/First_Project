import LoginAction from "./action";

const initState = {
    Auth: {},
    inforVersion: {},
    inforApp: {},
}

const LoginReducer = (state = initState, action: any) => {
    console.log('2')
    switch (action.type) {
        case LoginAction.SIGN_IN_SUCCESS:
            return {
                ...state,
                Auth: action.payload,
            };
        default:
            return { ...state };
    }
};

export default LoginReducer;

