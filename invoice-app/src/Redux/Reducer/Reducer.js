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


const initialItem = {
    items: [],

}

export const itemListReducer = (state = initialItem, action) => {
    switch (action.type) {
        case "ITEM_LIST":

            return {
                ...state,

                items: [...state.items, action.payload]

            }
        default: return state;
    }
}

