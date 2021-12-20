import {api} from "../api/api";
import {userType} from "../api/apiTypes";
import {preloadedStateType} from "./TypesForRedusers/navbarBlockReducerTypes";
import {createAction, createReducer} from "redux-act";

const preloadedState: preloadedStateType = {
    jsonMenu: [
        {to: '/profile', name: 'Profile'},
        {to: '/dialogs', name: 'Messages'},
        {to: '/news', name: 'News'},
        {to: '/music', name: 'Music'},
        {to: '/settings', name: 'Settings'},
        {to: '/users', name: 'Users'},
    ],
    jsonFriends: [],
};

export const createMyFriendsAC = createAction<userType[]>(`CREATE-MY-FRIENDS`);

const navbarBlockReducer = createReducer({}, preloadedState);

navbarBlockReducer
    .on(createMyFriendsAC, (state, user) => ({
        ...state,
        jsonFriends: user,
    }));

export const addMyFriendsToStateThunk = () => {
    return (dispatch: Function) => {
        api.getFriends().then(response => {
            dispatch(createMyFriendsAC(response.data.items));
        });
    };
}

export default navbarBlockReducer;