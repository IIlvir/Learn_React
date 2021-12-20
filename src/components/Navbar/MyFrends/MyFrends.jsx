import React, {useCallback, useEffect} from "react";
import s from './MyFrends.module.css'
import FriendItem from "./FrendItem/FrendItem";
import {addMyFriendsToStateThunk} from "../../../Redux/navbarBlockReducer";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";

const MyFriendsComponent = () => {
    const dispatch = useAppDispatch();

    const addMyFriends = useCallback(
        () => dispatch(addMyFriendsToStateThunk()),
        []
    )

    const {jsonFriends} = useAppSelector(
        state => state.navbarBlock
    );

    useEffect(
        () => addMyFriends(),
        []
    );

    return (
        <div
            className={s.friendsBlock}
        >
            <h4>Best Friends</h4>
            <ul>
                {jsonFriends.map(
                    obj => <FriendItem
                        src={obj.photos.small}
                        fullName={obj.name}
                        key={obj.id}
                    />
                )}
            </ul>
        </div>
    );
}

export default MyFriendsComponent;