const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostAC = () => ({type:ADD_POST});
export const updateNewPostTextAC = (text) => ({type:UPDATE_NEW_POST_TEXT,text:text});

const preloadedState = {
    jsonPosts: [
        {id:"1",message:"One",likeCount:"2"},
        {id:"2",message:"Two",likeCount:"3"},
        {id:"3",message:"Three",likeCount:"4"},
    ],
    newPostText: '',
};

const profilePageReducer = (state = preloadedState, action) => {
    switch (action.type) {
        case ADD_POST:
            const postObj = {
                id: String(state.jsonPosts.length + 1),
                message: state.newPostText,
                likeCount: "0",
            };
            let cloneState = {...state};
            cloneState.jsonPosts = [...state.jsonPosts];
            cloneState.jsonPosts.push(postObj);
            cloneState.newPostText = '';
            return cloneState;
        case UPDATE_NEW_POST_TEXT:
            let cloneState2 = {...state};
            cloneState2.newPostText = action.text;
            return cloneState2;
        default:
            return state;
    };
};

export default profilePageReducer;