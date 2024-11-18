const LoginAction = {
    SIGN_IN: "SIGN_IN",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
}

export default LoginAction;


export const signInSuccess = (payload: any) => ({
    type: 'SIGN_IN_SUCCESS',
    payload,
});