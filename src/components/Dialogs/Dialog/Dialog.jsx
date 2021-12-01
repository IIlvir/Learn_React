import React from "react";
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink to={props.id} className={(A)=>A.isActive?s.active:s.dialog}>
            <div className={s.dialog}>{props.name}</div>
        </NavLink>
    );
};

export default Dialog;