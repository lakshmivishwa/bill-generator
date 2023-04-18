const SIGN_IN = "SIGN_IN";


export const signIn = (value) => {
    return {
        type: SIGN_IN,
        payload: value
    }
}
