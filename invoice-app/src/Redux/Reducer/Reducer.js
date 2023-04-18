const initialStateForSignIn = {
    signIn: {
        name: "",
        contact: "",
        email: "",
        password: "",

    },
}

export const signInReducer = (state = initialStateForSignIn, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                signIn: action.payload
            }
        default: return state;
    }
}