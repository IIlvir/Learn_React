import React from "react";
import css from "./UserProfile.module.css"
import * as axios from "axios"
import {connect} from "react-redux";
import {userProfileSetStateAC} from "../../Redux/userProfileReduces";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router-dom";

class UserProfile extends React.Component {

    componentDidMount() {
        console.log('this.props.state.', this.props.state)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setState(response.data);
        });
    }

    render = () => {
        debugger;
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

let withRouterDataComponent = withRouter(UserProfile)

export default connect(mapStateToProps,mapDispatchToProps)(withRouterDataComponent);