import React from "react";
import css from "./UserProfile.module.css"
import * as axios from "axios"
import {connect} from "react-redux";
import {userProfileSetStateAC} from "../../Redux/userProfileReduces";
import {NavLink} from "react-router-dom";

class UserProfile extends React.Component {

    componentDidMount() {
        let userId = document.location.pathname.split('/')[2];
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setState(response.data);
        });
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
    setState(state){
        dispatch(userProfileSetStateAC(state));
    },
});


export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);