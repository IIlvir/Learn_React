import Navbar from "./Navbar";
import {connect} from "react-redux";

const onStateToProps = (state) => {
    return {
        state: state.navbarBlock,
    };
};

const NavbarContainer = connect(onStateToProps)(Navbar);

export default NavbarContainer;