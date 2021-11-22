import React from "react";
import s from './FrendItem.module.css'

const FriendItem = (props) => {
    return(
        <li>
            <div className={s.friendItem}>
                <img src={props.src} alt="ava"/>
                <h5>{props.fullName}</h5>
            </div>
        </li>
    );
};

export default FriendItem;