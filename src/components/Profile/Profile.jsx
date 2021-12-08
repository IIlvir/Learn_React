import React from "react";
import s from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import ProfileStatus from "./ProfileStatus";

const Profile = () => {
    return (
        <div>
            <div className={s.pageCover}>
                <img alt='q' className={s.pageCoverImg}
                     src='https://www.widsmob.com/wp-content/uploads/2018/02/panorama-definition.jpg'/>
            </div>
            <div className={s.content}>
                <UserInfo />
                <ProfileStatus status='yo'/>
                <MyPostContainer />
            </div>
        </div>
    );
}

const ProfileWithAuth = withAuthRedirect(Profile);

export default ProfileWithAuth;