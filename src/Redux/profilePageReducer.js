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
            state.jsonPosts.push(postObj);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    };
};

export default profilePageReducer;