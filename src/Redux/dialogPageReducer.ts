import {preloadedStateType} from "./TypesForRedusers/dialogPageReducerType";
import * as actions from "./dialogPageActionCreators"
import {Types} from "./dialogPageReduserTypes"
import {RootState} from "./redux-store";

type InferValueTypes <T> = T extends { [key: string] : infer U} ? U : never;

type actionType = ReturnType<InferValueTypes<typeof actions>>

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

const dialogPageReducer = (state = preloadedState, action: actionType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const messageObj = {
                id: String(state.jsonMessage.length + 1),
                message: state.newMessageText,
            };
            return {
                ...state,
                newMessageText: '',
                jsonMessage: [...state.jsonMessage, messageObj]
            };
        case 'UPDATE-NEW-TEXT-MESSAGE':
            return {
                ...state,
                newMessageText: action.text,
            };
        default:
            return state;
    }
};

// selectors
export const dialogsPageSelector = (state: RootState) => state.dialogsPage;

export default dialogPageReducer;
