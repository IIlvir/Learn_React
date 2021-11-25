import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = (props) => {
    const textareaRef = React.createRef();

    const onPostChange = () => {
        const text = textareaRef.current.value;
        props.onChange(text);
    }

    return (
            <div>
                My posts
                <div className={s.newPost}>
                    <textarea placeholder='Text' onChange={onPostChange} ref={textareaRef} value={props.state.newPostText} />
                    <button className={s.addBt} onClick={props.onClick}>Add</button>
                </div>
                <div className={s.posts}>
                    {props.state.jsonPosts.map(obj => <Post key={obj.message} message={obj.message} likeCount={obj.likeCount}/>)}
                </div>
            </div>
    );
}

export default MyPost;