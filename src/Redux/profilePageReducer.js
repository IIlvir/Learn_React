
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD-LIKE"

export const addPostAC = () => ({type:ADD_POST});
export const updateNewPostTextAC = (text) => ({type:UPDATE_NEW_POST_TEXT,text:text});
export const addLike = (id) => ({type:ADD_LIKE,id:id});

const preloadedState = {
    jsonPosts: [
        {id:1,message:"One",likeCount:2},
        {id:2,message:"Two",likeCount:3},
        {id:3,message:"Three",likeCount:4},
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
            return {
                ...state,
                newPostText: '',
                jsonPosts:[...state.jsonPosts,postObj]
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
                    if(obj.id === action.id){
                        obj.likeCount += 1;
                    }
                    return obj;
                }),
            }
        default:
            return state;
    }
};

export default profilePageReducer;