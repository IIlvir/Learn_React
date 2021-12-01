import React from "react";
import classes from "./UsersItem.module.css"
import {NavLink} from "react-router-dom";

const UsersItem = (props) => {
    const btRef = React.createRef();
    return(
        <div className={classes.userItem}>
            <button onClick={props.onClick}
                    ref={btRef}
                    className={classes.button}>{props.follow ? 'Unfollow' : 'Follow'}
            </button>
            <NavLink to={'/users/' + props.id}>
                <img src={props.srcImg} alt='ava' width='50px' height='50px'/>
            </NavLink>
            <h5>{props.name}</h5>
        </div>
    );
};

export default UsersItem;