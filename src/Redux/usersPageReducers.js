const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const ADD_STATE = "ADD-STATE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_IS_FETCHING = "TOGGLE-IS-FETCHING";

export const toggleFollowAC = (id) => ({type: TOGGLE_FOLLOW, id: id});
export const addStateAC = (users) => ({type: ADD_STATE, users: users});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setIsFetchingAC = (val) => ({type: SET_IS_FETCHING, isFetching: val});

const preloadedState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersPageReducers = (state = preloadedState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(obj => {
                    if (obj.id === action.id) {
                        obj.follow = !obj.follow
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
        default:
            return state;
    }
};

export default usersPageReducers;
