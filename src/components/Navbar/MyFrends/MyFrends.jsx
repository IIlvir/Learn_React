import React, {useEffect} from "react";
import s from './MyFrends.module.css'
import FriendItem from "./FrendItem/FrendItem";
import {connect} from "react-redux";
import {addMyFriendsToState} from "../../../Redux/navbarBlockReducer";

const MyFriendsComponent = (props) => {
    useEffect(() => {
        props.addMyFriends();
    },[]);

    return (
        <div className={s.friendsBlock}>
            <h4>Best Friends</h4>
            <ul>
                {props.state.map(obj => <FriendItem src={obj.photos.small} fullName={obj.name} key={obj.id}/>)}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    state: state.navbarBlock.jsonFriends,
});

const mapDispatchToProps = (dispatch) => ({
    addMyFriends() {
        dispatch(addMyFriendsToState())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MyFriendsComponent);