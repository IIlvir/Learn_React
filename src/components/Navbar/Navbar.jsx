import React from "react";
import classes from './Navbar.module.css';
import MenuItem from "./MenuItem/MenuItem";
import MyFrends from "./MyFrends/MyFrends";

const Navbar = (props) => {
    return (
        <div>
            <nav className={classes.nav}>
                {props.jsonMenu.map(obj => <MenuItem key={obj.to} to={obj.to} name={obj.name}/>)}
                <MyFrends />
            </nav>
        </div>
    );
};

export default Navbar;