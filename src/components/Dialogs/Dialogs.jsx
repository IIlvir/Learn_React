import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageAC,updateNewTextMessageAC} from "../../Redux/state";

const Dialogs = (props) =>{
    const textareaRef = React.createRef();
    const onChange = () =>{
        props.dispatch(updateNewTextMessageAC(textareaRef.current.value))
    };
    const onClick = () => {
        props.dispatch(addMessageAC())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {props.state.jsonDialogs.map(obj => <Dialog key={obj.id} id={obj.id} name={obj.name}/>)}
            </div>
            <div className="messages">
                {props.state.jsonMessage.map(obj => <Message key={obj.message} message={obj.message}/>)}
                <textarea placeholder='Message' ref={textareaRef} onChange={onChange} />
                <button onClick={onClick}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;