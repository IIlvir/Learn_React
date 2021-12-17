import {api} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD-LIKE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const addLike = (id) => ({type: ADD_LIKE, id: id});
export const setPropfileStatus = (newStatus) => ({type: SET_PROFILE_STATUS, status: newStatus});

export const setPropfileStatusThunk = (status) => {
    return (dispatch) => {
        api.setProfileStatus(status).then(response => {
            if(response.data.resultCode === 0) dispatch(setPropfileStatus(status))
        })
    };
}

export const getProfileStatusThunk = () => {
    return (dispatch) => {
        api.getProfileStatus().then(response => {
            dispatch(setPropfileStatus(response.data))
        })
    }
}

const preloadedState = {
    jsonPosts: [
        {id: 1, message: "One", likeCount: 2},
        {id: 2, message: "Two", likeCount: 3},
        {id: 3, message: "Three", likeCount: 4},
    ],
    newPostText: '',
    profileStatus: '',
};

const profilePageReducer = (state = preloadedState, action) => {
    switch (action.type) {
        case ADD_POST:
            const postObj = {
                id: String(state.jsonPosts.length + 1),
                message: state.newPostText,
                likeCount: "0",
            };
            return {
                ...state,
                newPostText: '',
                jsonPosts: [...state.jsonPosts, postObj]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case ADD_LIKE:
            return {
                ...state,
                jsonPosts: state.jsonPosts.map(obj => {
                    if (obj.id === action.id) {
                        obj.likeCount = +obj.likeCount + 1;
                    }
                    return obj;
                }),
            };
        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.status,
            };
        default:
            return state;
    }
};

export default profilePageReducer;