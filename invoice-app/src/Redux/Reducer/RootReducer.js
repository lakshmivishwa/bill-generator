import { combineReducers } from "redux";
import { loggedInReducer, itemListReducer } from "../Reducer/Reducer";


const rootreducers = combineReducers({
    loggedInReducer, itemListReducer
});

export default rootreducers;

