import { combineReducers } from "redux";
import { loggedInReducer } from "../Reducer/Reducer";


const rootreducers = combineReducers({
    loggedInReducer
});

export default rootreducers;

