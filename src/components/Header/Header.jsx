import React from "react";
import c from  "./Header.module.css";
import logo from "../../Images/logo.png"

const Header = () => {
    return(
        <header className={c.header}>
            <img alt='logo' src={logo} />
        </header>
    );
};

export default Header;