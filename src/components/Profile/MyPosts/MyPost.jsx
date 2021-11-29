import React from "react";
import s from './MyPost.module.css';
import Post from './Post/Post'

class MyPost extends React.Component{
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }
    onPostChange = () => {
        const text = this.textareaRef.current.value;
        this.props.onChange(text);
    }

    render = () => {
        return (
            <div>
                My posts
                <div className={s.newPost}>
                    <textarea placeholder='Text' onChange={this.onPostChange} ref={this.textareaRef} value={this.props.state.newPostText} />
                    <button className={s.addBt} onClick={this.props.onClick}>Add</button>
                </div>
                <div className={s.posts}>
                    {this.props.state.jsonPosts.map(obj => <Post key={obj.message}
                                                            message={obj.message}
                                                            likeCount={obj.likeCount}
                                                            onClick={() => {this.props.onClickLike(obj.id)}}/>)}
                </div>
            </div>
        );
    }
}

export default MyPost;