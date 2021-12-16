import {addLike, addPostAC, updateNewPostTextAC} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPost";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";

const MyPostsContainer = () => {
    const dispatch = useDispatch();

    const onChange = useCallback(
        (text) => dispatch(updateNewPostTextAC(text)),
        [updateNewPostTextAC]
    );

    const onClick = useCallback(
        () => dispatch(addPostAC()),
        []
    );

    const onClickLike = useCallback(
        (id) => dispatch(addLike(id)),
        [addLike]);

    const stateMyPosts = useSelector(
        state => state.profilePage
    )

    return <MyPosts
                state={stateMyPosts}
                onChange={onChange}
                onClick={onClick}
                onClickLike={onClickLike}
            />
}

export default MyPostsContainer;