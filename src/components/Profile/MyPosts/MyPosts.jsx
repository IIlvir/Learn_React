import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostAC,updateNewPostTextAC} from "../../../Redux/profilePageReducer";

const MyPost = (props) => {
    const textareaRef = React.createRef();

    const onChange = () =>{
        props.dispatch(updateNewPostTextAC(textareaRef.current.value));
    }

    const onClick = () => {
        props.dispatch(addPostAC());
    }
    return (
            <div>
                My posts
                <div className={s.newPost}>
                    <textarea placeholder='Text' onChange={onChange} ref={textareaRef} value={props.state.newPostText}></textarea>
                    <button className={s.addBt} onClick={onClick}>Add</button>
                </div>
                <div className={s.posts}>
                    {props.state.jsonPosts.map(obj => <Post key={obj.message} message={obj.message} likeCount={obj.likeCount}/>)}
                </div>
            </div>
    );
}

export default MyPost;