import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post'

const MyPost = (props) => {
    const {
        state,
        onChange,
        onClick,
        onClickLike
    } = props;

    const textareaRef = React.createRef(); //useRef

    const onPostChange = () => {
        const text = textareaRef.current.value;
        onChange(text);
    };

    const onPostClick = (id) => {
        return () => onClickLike(id);
    }

    return (
        <>
            My posts
            <div
                className={s.newPost}
            >
                <textarea
                    placeholder='Text'
                    onChange={onPostChange}
                    ref={textareaRef}
                    value={state.newPostText}
                />
                <button
                    className={s.addBt}
                    onClick={onClick}
                >
                    Add
                </button>
            </div>
            <div
                className={s.posts}
            >
                {state.jsonPosts.map(obj => <Post key={obj.message}
                                                  message={obj.message}
                                                  likeCount={obj.likeCount}
                                                  onClick={onPostClick(obj.id)}
                    />
                )}
            </div>
        </>
    );

}

export default MyPost;