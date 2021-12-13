import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../Redux/authReducer";

const HeaderComponent = (props) => {
    useEffect(() => {
        props.auth();
    },[]);

    return <Header props={props}/>;
}

const mapStateToProps = (state) => ({
    state: state.auth,
});

export default connect(mapStateToProps, {auth})(HeaderComponent);