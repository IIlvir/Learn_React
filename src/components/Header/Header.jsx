import React from "react";
import c from  "./Header.module.css";
import logo from "../../Images/logo.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={c.header}>
            <img alt='logo' src={logo} />
            <div className={c.loginBlock}>
                <NavLink to={'/login'}>{props.props.state.login === null ? 'Login' : props.props.state.login }</NavLink>
            </div>
        </header>
    );
};

export default Header;