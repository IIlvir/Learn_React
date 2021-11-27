import React from "react";
import classes from "./Users.module.css"

const UsersItem = (props) => {
    const btRef = React.createRef();
    return(
        <div className={classes.userItem}>
            <img src={props.srcImg} alt='ava' width='50px' height='50px'/>
            <h5>{props.name}</h5>
            <button onClick={props.onClick} ref={btRef} className={classes.button}>{props.follow ? 'Unfollow' : 'Follow'}</button>
        </div>
    );
};

export default UsersItem;