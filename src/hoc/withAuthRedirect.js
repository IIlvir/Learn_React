import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const withAuthRedirect = (Component) => {
    const AuthRedirect = () => {
        const isAuth = useSelector(
            state => state.auth.isAuth
        );

        if(!isAuth) return <Navigate to='/login' />;

        return <Component />;
    };

    return AuthRedirect;
};

export default withAuthRedirect;