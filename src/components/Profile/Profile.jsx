import React, {useCallback, useEffect} from "react";
import s from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus";
import {getProfileStatusThunk, setProfileStatusThunk} from "../../Redux/profilePageReducer";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";

const Profile = () => {
    const dispatch = useAppDispatch();
    const {profileStatus} = useAppSelector(
        state => state.profilePage
    );

    const getProfileStatus = useCallback(
        () => dispatch(getProfileStatusThunk()),
        []
    );

    const setProfileStatus = useCallback(
        (status) => dispatch(setProfileStatusThunk(status)),
        [setProfileStatusThunk]
    );

    useEffect(
        () => getProfileStatus(),
        []
    );

    return (
        <>
            <div
                className={s.pageCover}
            >
                <img
                    alt='q'
                    className={s.pageCoverImg}
                    src='https://www.widsmob.com/wp-content/uploads/2018/02/panorama-definition.jpg'
                />
            </div>
            <div
                className={s.content}
            >
                <UserInfo/>
                <ProfileStatus
                    status={profileStatus || 'Empty'}
                    setProfileStatus={setProfileStatus}
                    getProfileStatus={getProfileStatus}
                />
                <MyPostContainer/>
            </div>
        </>
    );
}

export default Profile;