import React from "react";
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
                <img alt='q' id='contentImg'
                     src='https://www.widsmob.com/wp-content/uploads/2018/02/panorama-definition.jpg'/>
            </div>
            <div>
                <img alt='q' className={s.avatar}
                     src='https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'/>
            </div>
            <MyPost/>
        </div>
    );
}

export default Profile;