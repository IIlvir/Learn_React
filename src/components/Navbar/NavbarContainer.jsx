import Navbar from "./Navbar";
import {connect} from "react-redux";

const onStateToProps = (state) => {
    return {
        state: state.navbarBlock,
    };
};

export default connect(onStateToProps)(Navbar);;