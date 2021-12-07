import React from "react";
import s from './MyFrends.module.css'
import FriendItem from "./FrendItem/FrendItem";
import {connect} from "react-redux";
import {addMyFriendsToState} from "../../../Redux/navbarBlockReducer";

class MyFriendsComponent extends React.Component {
    componentDidMount() {
        this.props.addMyFriends();
    }

    render(){
        return(
            <div className={s.friendsBlock}>
                <h4>Best Friends</h4>
                <ul>
                    {this.props.state.map(obj => <FriendItem src={obj.photos.small} fullName={obj.name} key={obj.id}/>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state.navbarBlock.jsonFriends,
});

const mapDispatchToProps = (dispatch) => ({

    addMyFriends(){
        dispatch(addMyFriendsToState())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(MyFriendsComponent);