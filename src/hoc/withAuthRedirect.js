import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {
    class authRedirect extends React.Component{
        render(){
            if(!this.props.isAuth) return <Navigate to='/login' />
            return <Component />
        };
    }
    let mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

    return connect(mapStateToProps)(authRedirect);
};

export default withAuthRedirect;