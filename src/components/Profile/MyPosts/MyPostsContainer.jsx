import {addLike, addPostAC, updateNewPostTextAC} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPost";
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";

const MyPostsContainer = () => {
    const dispatch = useAppDispatch();

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

    const stateMyPosts = useAppSelector(
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