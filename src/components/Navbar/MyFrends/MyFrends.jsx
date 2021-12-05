import React from "react";
import s from './MyFrends.module.css'
import FriendItem from "./FrendItem/FrendItem";
import apiGetFriends from "../../../api/apiGetFriends";
import {connect} from "react-redux";
import {createMyFriendsAC} from "../../../Redux/navbarBlockReducer";

class MyFriendsComponent extends React.Component {
    componentDidMount() {
        apiGetFriends().then(response => {
            this.props.addFriends(response.data.items)
        })
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
    addFriends(usersArr){
        dispatch(createMyFriendsAC(usersArr));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(MyFriendsComponent);