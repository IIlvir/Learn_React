import {api} from "../api/api";
import {AppDispatch} from "./redux-store";
import {createAction, createReducer} from "redux-act";

type contactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
}

type preloadStateType = {
    contacts: contactsType | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number | null,
    photos: {
        small: string | null,
        large: string | null,
    }
}

const preloadState: preloadStateType = {
    contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null,
    photos: {
        small: null,
        large: null,
    },
};

export const userProfileSetStateAC = createAction<preloadStateType>("SET-STATE");

const userProfileReducer= createReducer({}, preloadState);

userProfileReducer
    .on(userProfileSetStateAC, (state, newState) => ({
        ...newState,
    }))

export const getUserProfileInfoThunk = (userId: number) => {
    return (
        (dispatch: AppDispatch) => {
            api.getUserProfileInfo(userId).then(response => {
                dispatch(userProfileSetStateAC(response.data));
            });
        }
    );
}

export default userProfileReducer;