import {api} from "../api/api";
import {addMyFriendsToState} from "./navbarBlockReducer";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const ADD_STATE = "ADD-STATE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROCESS = "TOGGLE-FOLLOWING-PROCESS";

export const toggleFollowAC = (id) => ({type: TOGGLE_FOLLOW, id: id});
export const setUsersAC = (users) => ({type: ADD_STATE, users: users});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setIsFetchingAC = (val) => ({type: SET_IS_FETCHING, isFetching: val});
export const toggleFollowingProcess = (val) => ({type: TOGGLE_FOLLOWING_PROCESS, followingProgress: val})

export const getUsers = (pageSize = 10, currentPage = 1) => {
    return (
        (dispatch) => {
            dispatch(setIsFetchingAC(true));
            api.getUsers(pageSize, currentPage).then((response) => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUsersAC(response.data.items));
                dispatch(setTotalUsersCount(response.data.totalCount));
            });
        }
    );
};

export const subscribeToFriend = (id) => {
    return (
        (dispatch) => {
            dispatch(toggleFollowingProcess(true));
            api.subscribeToFriend(id).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowAC(id));
                    dispatch(toggleFollowingProcess(false));
                }
            }).then(
                dispatch(addMyFriendsToState())
            );
        }
    );
}

export const unsubscribeToFriend = (id) => {
    return (
        (dispatch) => {
            dispatch(toggleFollowingProcess(true))
            api.unsubscribeToFriend(id).then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowAC(id));
                    dispatch(toggleFollowingProcess(false))
                }
            }).then(
                dispatch(addMyFriendsToState())
            );
        }
    )
}

const preloadedState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: false,
};

const usersPageReducers = (state = preloadedState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(obj => {
                    if (obj.id === action.id) {
                        obj.followed = !obj.followed
                    }
                    return obj;
                }),
            };
        case ADD_STATE:
            return {
                ...state,
                users: action.users,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOWING_PROCESS :
            return {
                ...state,
                followingProgress: action.followingProgress,
            }
        default:
            return state;
    }
};

export default usersPageReducers;
