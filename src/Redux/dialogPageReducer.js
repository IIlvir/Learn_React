const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_TEXT_MESSAGE = "UPDATE-NEW-TEXT-MESSAGE";

export const addMessageAC = () => ({type:ADD_MESSAGE});
export const updateNewTextMessageAC = (text) => ({type:UPDATE_NEW_TEXT_MESSAGE,text:text});

const preloadedState = {
    jsonDialogs: [
        {id:"1",name:"Ilvir"},
        {id:"2",name:"Max"},
        {id:"3",name:"Ivan"},
        {id:"4",name:"Dima"}
    ],
    jsonMessage: [
        {id:"1",message:"Hi"},
        {id:"2",message:"Hi2"},
        {id:"3",message:"H3"}
    ],
    newMessageText: '',
};

const dialogPageReducer = (state = preloadedState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const messageObj = {
                id: String(state.jsonMessage.length + 1),
                message: state.newMessageText,
            };
            let cloneState = {...state};
            cloneState.jsonMessage = [...state.jsonMessage]
            cloneState.jsonMessage.push(messageObj);
            cloneState.newMessageText = '';
            return cloneState;
        case UPDATE_NEW_TEXT_MESSAGE:
            let cloneState2 = {...state};
            cloneState2.newMessageText = action.text;
            return cloneState2;
        default:
            return state;
    };
};

export default dialogPageReducer;