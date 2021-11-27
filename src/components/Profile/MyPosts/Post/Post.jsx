import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.block}>
        <div className={s.item}>
            <img alt='qwe' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.schoolstickers.com%2Fproducts%2Fen%2F819%2F10MM_SMILE-04.png&f=1&nofb=1'/>
            {props.message}
        </div>
        <button className={s.likeBt} onClick={props.onClick}>
            <span>{`${props.likeCount} Like`}</span>
        </button>
    </div>
    );
}

export default Post;