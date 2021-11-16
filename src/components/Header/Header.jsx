import React from "react";
import c from  './Header.module.css';

const Header = () => {
    return(
        <header className={c.header}>
            <img alt='qwe' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freelogovectors.net%2Fwp-content%2Fuploads%2F2016%2F02%2Ffanta-logo.jpg&f=1&nofb=1' />
        </header>
    );
};

export default Header;