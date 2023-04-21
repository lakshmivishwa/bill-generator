const initialStateForSignIn = {
    signIn: {
    },
}

export const loggedInReducer = (state = initialStateForSignIn, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                signIn: action.payload
            }
        default: return state;
    }
}

