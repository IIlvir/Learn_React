import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navbarBlockReducer from "./navbarBlockReducer";
import usersPageReducers from "./usersPageReducers";
import userProfileReduces from "./userProfileReduces";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    navbarBlock: navbarBlockReducer,
    usersPage: usersPageReducers,
    userProfile: userProfileReduces,
    auth: authReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
//const store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;