import React, {useEffect} from "react";
import css from "./UserProfile.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileInfo} from "../../Redux/userProfileReduces";
import {NavLink} from "react-router-dom";

const UserProfile = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.userProfile);

    const getUserProfileInfo1 = (userId) => dispatch(getUserProfileInfo(userId))

    useEffect(
        () => {
            let userId = document.location.pathname.split('/')[2];
            getUserProfileInfo1(userId);
        },
        [])

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