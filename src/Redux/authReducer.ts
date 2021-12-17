import {api} from "../api/api";
import {preloaderStateType, setUserDataType, userDataType} from "./TypesForRedusers/authReduserTypes";

const SET_USER_DATA: string = 'SET-USER-DATA';
const SET_IS_FETCHING: string = 'SET-IS-FETCHING';

export const setUserData = (data: userDataType): setUserDataType => ({type:SET_USER_DATA,data: data});
//export const setIsFetching = (isFetching: boolean) => ({type:SET_IS_FETCHING, isFetching:isFetching});

const preloaderState: preloaderStateType = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
}

export const auth = () => {
    return (dispatch: Function) => {
        api.authMe().then((response) => {
            let isAuth = response.data.resultCode === 0;
            dispatch(setUserData({
            ...response.data.data,
                isAuth,
            }));
        })
    }
}

const authReducer = (state: preloaderStateType = preloaderState, action: any) => {
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