import React from "react";
import s from './MyFrends.module.css'
import FrendItem from "./FrendItem/FrendItem";

const MyFrends = (props) => {
    return(
        <div className={s.friendsBlock}>
            <ul>
                <FrendItem />
            </ul>
        </div>
    );
};

export default MyFrends;