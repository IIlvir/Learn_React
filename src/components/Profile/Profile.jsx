import React, {useEffect} from "react";
import s from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus";
import {getProfileStatusThunk, setPropfileStatusThunk} from "../../Redux/profilePageReducer";
import {connect} from "react-redux";

const Profile = (props) => {
    useEffect(props.getProfileStatus,[]);

        return (
            <div>
                <div className={s.pageCover}>
                    <img alt='q' className={s.pageCoverImg}
                         src='https://www.widsmob.com/wp-content/uploads/2018/02/panorama-definition.jpg'/>
                </div>
                <div className={s.content}>
                    <UserInfo/>
                    <ProfileStatus status={props.state.profileStatus || 'Empty'}
                                   setProfileStatus={props.setProfileStatus}
                                   getProfileStatus={props.getProfileStatus}/>
                    <MyPostContainer/>
                </div>
            </div>
        );
}

const mapStateToProps = (state) => ({
    state: state.profilePage,
});

const mapDispatchToProps = (dispatch) => ({
    setProfileStatus(status){
        dispatch(setPropfileStatusThunk(status))
    },
    getProfileStatus(){
        dispatch(getProfileStatusThunk());
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);