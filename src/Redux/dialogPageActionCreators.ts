import {Types} from "./dialogPageReduserTypes";

export const addMessageAC = () => (<const>{
    type: "ADD-MESSAGE"
});

export const updateNewTextMessageAC = (text: string) => (<const>{
    type: 'UPDATE-NEW-TEXT-MESSAGE',
    text: text
});