const SIGN_IN = "SIGN_IN";
const LOG_OUT= "LOG_OUT";

export const signIn = (value) => {
    return {
        type: SIGN_IN,
        payload: value
    }
}

export const logout = () => {
    return {
        type: LOG_OUT,
    }
}