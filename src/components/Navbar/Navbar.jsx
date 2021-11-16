import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={(A)=>A.isActive?classes.activeLink:classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={(A)=>A.isActive?classes.activeLink:classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={(A)=>A.isActive?classes.activeLink:classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={(A)=>A.isActive?classes.activeLink:classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={(A)=>A.isActive?classes.activeLink:classes.item}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;