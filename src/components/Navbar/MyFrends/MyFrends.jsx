import React from "react";
import s from './MyFrends.module.css'
import FriendItem from "./FrendItem/FrendItem";

const MyFriends = (props) => {
    return(
        <div className={s.friendsBlock}>
            <h4>Best Friends</h4>
            <ul>
                {props.state.map(obj => <FriendItem src={obj.srcAvatar} fullName={obj.fullName} key={obj.id}/>)}
            </ul>
        </div>
    );
};

export default MyFriends;