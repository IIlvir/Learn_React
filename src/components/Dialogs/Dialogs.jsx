import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) =>{
    const textareaRef = React.createRef();

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {props.state.jsonDialogs.map(obj => <Dialog key={obj.id} id={obj.id} name={obj.name}/>)}
            </div>
            <div className="messages">
                {props.state.jsonMessage.map(obj => <Message key={obj.message} message={obj.message}/>)}
            </div>
            <div className={s.sendMessage}>
                <textarea placeholder='Message'
                          ref={textareaRef}
                          onChange={()=>{props.onChange(textareaRef.current.value)}}
                          value={props.state.newMessageText} />
                <button onClick={props.onClick}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;