import React, {useCallback, useEffect} from "react";
import css from "./UserProfile.module.css"
import {getUserProfileInfoThunk, userProfileSelector} from "../../Redux/userProfileReduces";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";

const UserProfile = () => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(userProfileSelector);

    const getUserProfileInfo1 = useCallback(
        (userId) => dispatch(getUserProfileInfoThunk(userId)),
        [dispatch]);

    useEffect(
        () => {
            let userId = document.location.pathname.split('/')[2];
            getUserProfileInfo1(userId);
        },
        [getUserProfileInfo1])

    return (
        <div className={css.userProfileBlock}>
            <div className={css.userAva}>
                <img src={state.photos.small} alt="User Avatar"/>
            </div>
            <div className={css.userInfo}>
                <div>{state.fullName}</div>
                <div>{state.contacts.facebook}</div>
                <div>{state.contacts.website}</div>
                <div>{state.contacts.vk}</div>
                <div>{state.contacts.twitter}</div>
                <div>{state.contacts.instagram}</div>
                <div>{state.contacts.youtube}</div>
                <div>{state.contacts.github}</div>
                <div>{state.contacts.mainLink}</div>
            </div>
            <NavLink to={'/users'}>
                <div>Назад</div>
            </NavLink>
        </div>
    )
}


export default UserProfile;