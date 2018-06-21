import {Store, createStore, combineReducers} from "redux";
import HeadReducer from "../reducers/head";

export default createStore(combineReducers({
    HeadReducer
}));