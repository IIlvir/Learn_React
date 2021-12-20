import {api} from "../api/api";
import {addMyFriendsToStateThunk} from "./navbarBlockReducer";
import {AppDispatch} from "./redux-store";
import {createAction, createReducer} from "redux-act";
import {userType} from "../api/apiTypes";

type preloadedState = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: boolean,
}

const preloadedState: preloadedState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: false,
};

//Actions
export const toggleFollowAC = createAction<number>("TOGGLE-FOLLOW")
export const setUsersAC = createAction<userType[]>("ADD-STATE")
export const setTotalUsersCount = createAction<number>("SET-TOTAL-USERS-COUNT")
export const setCurrentPage = createAction<number>("SET-CURRENT-PAGE")
export const setIsFetchingAC = createAction<boolean>("TOGGLE-IS-FETCHING")
export const toggleFollowingProcess = createAction<boolean>("TOGGLE-FOLLOWING-PROCESS")

//Reducer
const usersPageReducers = createReducer({},preloadedState)

usersPageReducers
    .on(toggleFollowAC, (state,id)=>(
        {
        ...state,
        users: state.users.map(obj => {
            const objClone = {...obj}
            if (objClone.id === id) {
                objClone.followed = !objClone.followed;
            }
            return objClone;
        }),
    }))
    .on(setUsersAC, (state,users)=>({
        ...state,
        users,
    }))
    .on(setTotalUsersCount, (state, totalUsersCount)=>({
        ...state,
        totalUsersCount,
    }))
    .on(setCurrentPage, (state,currentPage)=>({
        ...state,
        currentPage,
    }))
    .on(setIsFetchingAC, (state,isFetching)=>({
        ...state,
        isFetching,
    }))
    .on(toggleFollowingProcess, (state, followingProgress)=>({
        ...state,
        followingProgress,
    }))

//Thunks
export const getUsersThunk = (pageSize = 10, currentPage = 1) => {
    return (
        (dispatch: AppDispatch) => {
            dispatch(setIsFetchingAC(true));
            api.getUsers(pageSize, currentPage).then((response) => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUsersAC(response.data.items));
                dispatch(setTotalUsersCount(response.data.totalCount));
            });
        }
    );
};

export const subscribeToFriendThunk = (id: number) => {
    return (
        (dispatch: AppDispatch) => {
            dispatch(toggleFollowingProcess(true));
            api.subscribeToFriend(id).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowAC(id));
                    dispatch(toggleFollowingProcess(false));
                }
            }).then(
                //dispatch(addMyFriendsToStateThunk())
            );
        }
    );
}

export const unsubscribeToFriendThunk = (id: number) => {
    return (
        (dispatch: Function) => {
            dispatch(toggleFollowingProcess(true))
            api.unsubscribeToFriend(id).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowAC(id));
                    dispatch(toggleFollowingProcess(false))
                }
            }).then(
                dispatch(addMyFriendsToStateThunk())
            );
        }
    )
}

export default usersPageReducers;