import React, {useCallback, useEffect} from "react";
import Header from "./Header";
import {authStateSelector, authThunk} from "../../Redux/authReducer";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";

const HeaderComponent = () => {
    const dispatch = useAppDispatch();

    const authState = useAppSelector(authStateSelector);

    const authMe = useCallback(
        () => dispatch(authThunk()),
        [dispatch]
    );

    useEffect(
        () => authMe(),
        [authMe]
    );

    return <Header
                state={authState}
            />;
}

export default HeaderComponent;