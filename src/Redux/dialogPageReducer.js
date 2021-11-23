const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_TEXT_MESSAGE = "UPDATE-NEW-TEXT-MESSAGE";

export const addMessageAC = () => ({type:ADD_MESSAGE});
export const updateNewTextMessageAC = (text) => ({type:UPDATE_NEW_TEXT_MESSAGE,text:text});

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const messageObj = {
                id: String(state.jsonMessage.length + 1),
                message: state.newMessageText,
            };
            state.jsonMessage.push(messageObj);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_TEXT_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    };
};

export default dialogPageReducer;