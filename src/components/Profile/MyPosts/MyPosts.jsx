import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPost = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea placeholder='Text'>Текст</textarea>
                    <button>Add</button>
                </div>
                <div className={s.posts}>
                    <Post message='One' likeCount='2'/>
                    <Post message='Two' likeCount='3'/>
                    <Post message='Three' likeCount='4'/>
                </div>
            </div>
    );
}

export default MyPost;