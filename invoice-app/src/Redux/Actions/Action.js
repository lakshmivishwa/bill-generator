const SIGN_IN = "SIGN_IN";
const LOG_OUT = "LOG_OUT";
const BILL_DETAILS = "BILL_DETAILS";

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

export const billDetails = (value) => {
    return {
        type: BILL_DETAILS,
        payload: value,

    }
}