import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPost = (props) => {
    return (
            <div>
                My posts
                <div className={s.newPost}>
                    <textarea placeholder='Text'>Текст</textarea>
                    <button className={s.addBt}>Add</button>
                </div>
                <div className={s.posts}>
                    {props.jsonPosts.map(obj => <Post key={obj.message} message={obj.message} likeCount={obj.likeCount}/>)}
                </div>
            </div>
    );
}

export default MyPost;