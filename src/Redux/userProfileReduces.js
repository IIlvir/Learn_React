import {api} from "../api/api";

const SET_STATE = "SET-STATE";

const preloadState = {
    aboutMe: null,
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

export const userProfileSetStateAC = (state) => ({type: SET_STATE, state: state});

export const getUserProfileInfo = (userId) => {
    return(
        (dispatch) => {
            api.getUserProfileInfo(userId).then(response => {
                dispatch(userProfileSetStateAC(response.data));
            });
        }
    );
}


const userProfileReduces = (state = preloadState, action) => {
    switch (action.type) {
        case SET_STATE:
            return ({
                ...action.state,
            });
        default:
            return state;
    }
}

export default userProfileReduces;