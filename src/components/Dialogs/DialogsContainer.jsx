import React from "react";
import {addMessageAC,updateNewTextMessageAC} from "../../Redux/dialogPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) =>{
    const onChange = (text) =>{
        props.dispatch(updateNewTextMessageAC(text))
    };
    const onClick = () => {
        props.dispatch(addMessageAC())
    }
    return (
        <Dialogs onChange={onChange} onClick={onClick} state={props.state}/>
    );
};

export default DialogsContainer;