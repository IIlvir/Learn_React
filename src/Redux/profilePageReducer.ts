import {api} from "../api/api";
import {createAction, createReducer} from "redux-act";
import {AppDispatch} from "./redux-store";

type postType = {
    id: number,
    message: string,
    likeCount: number,
}

type preloadedStateType = {
    jsonPosts: postType[],
    newPostText: string,
    profileStatus: string,
}

const preloadedState: preloadedStateType = {
    jsonPosts: [
        {id: 1, message: "One", likeCount: 2},
        {id: 2, message: "Two", likeCount: 3},
        {id: 3, message: "Three", likeCount: 4},
    ],
    newPostText: '',
    profileStatus: '',
};

export const addPostAC = createAction("ADD-POST");
export const updateNewPostTextAC = createAction<string>("UPDATE-NEW-POST-TEXT");
export const addLike = createAction<number>("ADD-LIKE");
export const setProfileStatus = createAction<string>("SET-PROFILE-STATUS")

export const profilePageReducer = createReducer({}, preloadedState);

profilePageReducer
    .on(addPostAC, (state) => {
        const postObj: postType = {
            id: state.jsonPosts.length + 1,
            message: state.newPostText,
            likeCount: 0,
        };
        return {
            ...state,
            newPostText: '',
            jsonPosts: [...state.jsonPosts, postObj]
        }
    })
    .on(updateNewPostTextAC, (state, text) => ({
        ...state,
        newPostText: text,
    }))
    .on(addLike, (state, id) => {
        const newJsonPosts: postType[] = state.jsonPosts.map((obj) => {
            const objClone = {...obj};
            if (objClone.id === id) {
                objClone.likeCount = objClone.likeCount + 1;
            }
            return objClone;
        })
        return {
            ...state,
            jsonPosts: newJsonPosts,
        }
    })
    .on(setProfileStatus, (state, status) => ({
        ...state,
        profileStatus: status,
    }))

export const setProfileStatusThunk = (status: string) => {
    return (dispatch: Function) => {
        api.setProfileStatus(status).then(response => {
            if (response.data.resultCode === 0) dispatch(setProfileStatus(status))
        })
    };
}

export const getProfileStatusThunk = () => {
    return (dispatch: AppDispatch) => {
        api.getProfileStatus().then(response => {
            dispatch(setProfileStatus(response.data))
        })
    }
}

export default profilePageReducer;

