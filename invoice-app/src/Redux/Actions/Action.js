const SIGN_IN = "SIGN_IN";
const LOG_OUT = "LOG_OUT";
const BILL_DETAILS = "BILL_DETAILS";

export const signIn = (value) => {
    return {
        type: SIGN_IN,
        payload: {
            address: value.address,
            cityPincode: value.cityPincode,
            contact: value.contact,
            state: value.state,
            name: value.name,
            email: value.email

        }
    }
}

export const logout = () => {
    return {
        type: LOG_OUT,
        payload: {
            address: "",
            cityPincode: "",
            contact: "",
            state: "",
            name: "",
            email: ""
        }

    }
}


export const billDetails = (value) => {
    return {
        type: BILL_DETAILS,
        payload: value,

    }
}