const SIGN_IN = "SIGN_IN";
const LOG_OUT = "LOG_OUT";
const ITEM_LIST = "ITEM_LIST";

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

export const itemList = (content) => {
    return {
        type: ITEM_LIST,
        payload: content,
        // id: content.id,
        // // content: content.element
    }
}