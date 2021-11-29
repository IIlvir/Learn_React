import {connect} from "react-redux";
import {addStateAC, toggleFollowAC} from "../../Redux/usersPageReducers";
import Users from "./Users";
import {createMyFriendsAC, deleteMyFriendsAC} from "../../Redux/navbarBlockReducer";

const mapStateToProps = state => ({state: state.usersPage})

const mapDispatchToProps = dispatch => ({
    onClick(user) {
        dispatch(toggleFollowAC(user.id));
        const userObj = {
            id: user.id,
            srcAvatar: user.photos.small,
            fullName: user.name,
        };
        (user.follow) ? dispatch(createMyFriendsAC(userObj)) : dispatch(deleteMyFriendsAC(userObj));
    },
    addUsers(usersArr){
        dispatch(addStateAC(usersArr));
    }
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;