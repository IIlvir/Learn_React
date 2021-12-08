import {api} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_IS_FETCHING = 'SET-IS-FETCHING'

export const setUserData = (data) => ({type:SET_USER_DATA,data: data});
export const setIsFetching = (isFetching) => ({type:SET_IS_FETCHING, isFetching:isFetching});

const preloaderState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
}

export const auth = () => {
    return (dispatch) => {
        api.authMe().then(response => {
            let isAuth = response.data.resultCode === 0;
            dispatch(setUserData({...response.data.data,isAuth:isAuth}));
        })
    }
}

const authReducer = (state = preloaderState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return({...state,
                userId: action.data.id,
                login: action.data.login,
                email: action.data.email,
                isAuth: action.data.isAuth,
            });
        case SET_IS_FETCHING:
            return ({
                ...state,
                isFetching: action.isFetching,
            });
        default: return (state);
    }
}

export default authReducer;