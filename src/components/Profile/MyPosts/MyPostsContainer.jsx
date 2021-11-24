import React from "react";
import {addPostAC,updateNewPostTextAC} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPost";

const MyPostContainer = (props) => {

    const onChange = (text) =>{
        props.dispatch(updateNewPostTextAC(text));
    }

    const onClick = () => {
        props.dispatch(addPostAC());
    }
    return (<MyPosts onChange={onChange} onClick={onClick} state={props.state}/>);
}

export default MyPostContainer;