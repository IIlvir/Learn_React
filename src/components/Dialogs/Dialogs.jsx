import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {props.jsonDialogs.map(obj => <Dialog key={obj.id} id={obj.id} name={obj.name}/>)}
            </div>
            <div className="messages">
                {props.jsonMessage.map(obj => <Message key={obj.message} message={obj.message}/>)}
            </div>
        </div>
    );
};

export default Dialogs;