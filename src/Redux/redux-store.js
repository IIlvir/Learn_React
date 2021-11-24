import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navbarBlockReducer from "./navbarBlockReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    navbarBlock: navbarBlockReducer,
});

console.log('combineReducers = ', combineReducers)

const store = createStore(reducers);
export default store;