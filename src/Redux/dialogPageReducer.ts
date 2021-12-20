import {preloadedStateType} from "./TypesForRedusers/dialogPageReducerType";
import {RootState} from "./redux-store";
import {createAction, createReducer} from "redux-act";


const preloadedState: preloadedStateType = {
    jsonDialogs: [
        {id: "1", name: "Ilvir"},
        {id: "2", name: "Max"},
        {id: "3", name: "Ivan"},
        {id: "4", name: "Dima"}
    ],
    jsonMessage: [
        {id: "1", message: "Hi"},
        {id: "2", message: "Hi2"},
        {id: "3", message: "H3"}
    ],
    newMessageText: '',
};

export const addMessageAC = createAction("ADD-MESSAGE");
export const updateNewTextMessageAC = createAction<string>("UPDATE-NEW-TEXT-MESSAGE");

const dialogPageReducer = createReducer({}, preloadedState);

dialogPageReducer
    .on(addMessageAC, (state)=>{
        const messageObj = {
            id: String(state.jsonMessage.length + 1),
            message: state.newMessageText,
        };
        return {
            ...state,
            newMessageText: '',
            jsonMessage: [...state.jsonMessage, messageObj]
        };
    })
    .on(updateNewTextMessageAC, (state,text)=>({
        ...state,
        newMessageText: text,
    }))

// selectors
export const dialogsPageSelector = (state: RootState) => state.dialogsPage;

export default dialogPageReducer;
