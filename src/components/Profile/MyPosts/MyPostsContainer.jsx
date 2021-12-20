import {addLike, addPostAC, profilePageSelector, updateNewPostTextAC} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPost";
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";

const MyPostsContainer = () => {
    const dispatch = useAppDispatch();

    const onChange = useCallback(
        (text) => dispatch(updateNewPostTextAC(text)),
        [dispatch]
    );

    const onClick = useCallback(
        () => dispatch(addPostAC()),
        [dispatch]
    );

    const onClickLike = useCallback(
        (id) => dispatch(addLike(id)),
        [dispatch]);

    const stateMyPosts = useAppSelector(profilePageSelector);

    return <MyPosts
                state={stateMyPosts}
                onChange={onChange}
                onClick={onClick}
                onClickLike={onClickLike}
            />
}

export default MyPostsContainer;