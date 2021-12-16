import React, {useCallback, useEffect} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../Redux/authReducer";

const HeaderComponent = () => {
    const dispatch = useDispatch();

    const authState = useSelector(
        (state) => state.auth
    );

    const authMe = useCallback(
        () => dispatch(auth()),
        []
    );

    useEffect(
        () => authMe(),
        []
    );

    return <Header
                state={authState}
            />;
}

export default HeaderComponent;