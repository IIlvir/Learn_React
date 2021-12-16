import React from "react";
import s from "./MenuItem.module.css";
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {
    return (
        <div
            className={s.item}
        >
            <NavLink
                to={props.to}
                className={(A) => A.isActive ? s.activeLink : s.item}
            >
                {props.name}
            </NavLink>
        </div>
    );
};

export default MenuItem;