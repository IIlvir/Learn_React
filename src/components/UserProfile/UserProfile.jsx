import React, {useEffect} from "react";
import css from "./UserProfile.module.css"
import {connect} from "react-redux";
import {getUserProfileInfo} from "../../Redux/userProfileReduces";
import {NavLink} from "react-router-dom";

const UserProfile = (props) => {
    useEffect(() => {
        let userId = document.location.pathname.split('/')[2];
        props.getUserProfileInfo(userId);
    })

    return (
        <div className={css.userProfileBlock}>
            <div className={css.userAva}>
                <img src={props.state.photos.small} alt="User Avatar"/>
            </div>
            <div className={css.userInfo}>
                <div>{props.state.fullName}</div>
                <div>{props.state.contacts.facebook}</div>
                <div>{props.state.contacts.website}</div>
                <div>{props.state.contacts.vk}</div>
                <div>{props.state.contacts.twitter}</div>
                <div>{props.state.contacts.instagram}</div>
                <div>{props.state.contacts.youtube}</div>
                <div>{props.state.contacts.github}</div>
                <div>{props.state.contacts.mainLink}</div>
            </div>
            <NavLink to={'/users'}>
                <div>Назад</div>
            </NavLink>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.userProfile,
    }
};

export default connect(mapStateToProps, {getUserProfileInfo})(UserProfile);