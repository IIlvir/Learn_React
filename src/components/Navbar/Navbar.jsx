import React from "react";
import classes from './Navbar.module.css';
import MenuItem from "./MenuItem/MenuItem";
import MyFriends from "./MyFrends/MyFrends";

const Navbar = (props) => {
    return (
        <div>
            <nav className={classes.nav}>
                {props.state.jsonMenu.map(obj => <MenuItem key={obj.to} to={obj.to} name={obj.name}/>)}
                <MyFriends state={props.state.jsonFriends}/>
            </nav>
        </div>
    );
};

export default Navbar;