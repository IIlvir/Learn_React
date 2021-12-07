import React from "react";
import css from "./UserProfile.module.css"
import {connect} from "react-redux";
import {getUserProfileInfo} from "../../Redux/userProfileReduces";
import {NavLink} from "react-router-dom";

class UserProfile extends React.Component {

    componentDidMount() {
        let userId = document.location.pathname.split('/')[2];
        this.props.getUserProfileInfo(userId);
    }

    render = () => {
        return (
            <div className={css.userProfileBlock}>
                <div className={css.userAva}>
                    <img src={this.props.state.photos.small} alt="User Avatar"/>
                </div>
                <div className={css.userInfo}>
                    <div>{this.props.state.fullName}</div>
                    <div>{this.props.state.contacts.facebook}</div>
                    <div>{this.props.state.contacts.website}</div>
                    <div>{this.props.state.contacts.vk}</div>
                    <div>{this.props.state.contacts.twitter}</div>
                    <div>{this.props.state.contacts.instagram}</div>
                    <div>{this.props.state.contacts.youtube}</div>
                    <div>{this.props.state.contacts.github}</div>
                    <div>{this.props.state.contacts.mainLink}</div>
                </div>
                <NavLink to={'/users'}>
                    <div>Назад</div>
                </NavLink>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
    state: state.userProfile,
}};

const mapDispatchToProps = (dispatch) => ({
    getUserProfileInfo(userId){
        dispatch(getUserProfileInfo(userId));
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);