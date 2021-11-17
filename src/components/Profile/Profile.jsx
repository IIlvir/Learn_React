import React from "react";
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPosts'
import UserInfo from "./UserInfo/UserInfo";

const Profile = (props) => {
    return (
        <div>
            <div className={s.pageCover}>
                <img alt='q' className={s.pageCoverImg}
                     src='https://www.widsmob.com/wp-content/uploads/2018/02/panorama-definition.jpg'/>
            </div>
            <div className={s.content}>
                <UserInfo />
                <MyPost jsonPosts={props.jsonPosts}/>
            </div>
        </div>
    );
}

export default Profile;