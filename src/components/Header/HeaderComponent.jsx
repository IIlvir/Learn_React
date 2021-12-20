import React, {useCallback, useEffect} from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../Redux/authReducer";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";

const HeaderComponent = () => {
    const dispatch = useAppDispatch();

    const authState = useAppSelector(
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