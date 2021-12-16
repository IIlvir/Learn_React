import React, {useCallback, useEffect} from "react";
import s from './MyFrends.module.css'
import FriendItem from "./FrendItem/FrendItem";
import {useDispatch, useSelector} from "react-redux";
import {addMyFriendsToState} from "../../../Redux/navbarBlockReducer";

const MyFriendsComponent = () => {
    const dispatch = useDispatch();

    const addMyFriends = useCallback(
        () => dispatch(addMyFriendsToState()),
        []
    )

    const {jsonFriends} = useSelector(
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