import React from "react";
import s from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div className={s.pageCover}>
                <img alt='q' className={s.pageCoverImg}
                     src='https://www.widsmob.com/wp-content/uploads/2018/02/panorama-definition.jpg'/>
            </div>
            <div className={s.content}>
                <UserInfo />
                <MyPostContainer state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Profile;