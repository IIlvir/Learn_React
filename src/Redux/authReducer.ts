import {api} from "../api/api";
import {preloaderStateType, userDataType} from "./TypesForRedusers/authReduserTypes";
import {createAction, createReducer} from "redux-act";

//preloaderState
const preloaderState: preloaderStateType = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
}

//Actions
export const setUserData = createAction<userDataType>('SET-USER-DATA')

//Reducers
const authReducer = createReducer({}, preloaderState)

authReducer
    .on(setUserData, (state, data) => ({
        ...state,
        userId: data.id,
        login: data.login,
        email: data.email,
        isAuth: data.isAuth,
    }))

//Thunks
export const authThunk = () => {
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

export default authReducer;