import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navbarBlockReducer from "./navbarBlockReducer";
import usersPageReducers from "./usersPageReducers";
import userProfileReduces from "./userProfileReduces";
import authReducer from "./authReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    navbarBlock: navbarBlockReducer,
    usersPage: usersPageReducers,
    userProfile: userProfileReduces,
    auth: authReducer,
});

const store = createStore(reducers);
window.store = store;
export default store;