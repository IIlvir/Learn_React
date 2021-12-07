import {api} from "../api/api";

const CREATE_MY_FRIENDS = "CREATE-MY-FRIENDS";
const DELETE_MY_FRIENDS = "DELETE-MY-FRIENDS";

export const createMyFriendsAC = (user) => ({type:CREATE_MY_FRIENDS, user:user});
export const deleteMyFriendsAC = (user) => ({type:DELETE_MY_FRIENDS, user:user});

export const addMyFriendsToState = () => {
    return(
        (dispatch) => {
            api.getFriends().then(response => {
                dispatch(createMyFriendsAC(response.data.items));
            });
        }
    );
}

const preloadedState = {
    jsonMenu: [
        {to: '/profile', name: 'Profile'},
        {to: '/dialogs', name: 'Messages'},
        {to: '/news', name: 'News'},
        {to: '/music', name: 'Music'},
        {to: '/settings', name: 'Settings'},
        {to: '/users', name: 'Users'},
    ],
    jsonFriends:[],
};
const navbarBlockReducer = (state = preloadedState,action) => {
    switch (action.type){
        case CREATE_MY_FRIENDS:
            return {
                ...state,
                jsonFriends: action.user,
            };
        case DELETE_MY_FRIENDS:
            return {
                ...state,
                jsonFriends: state.jsonFriends.filter(obj => obj.id !== action.user.id),
            };
        default:
            return state;
    }
};

export default navbarBlockReducer;