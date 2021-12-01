import {connect} from "react-redux";
import {
    addStateAC,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowAC,
    setIsFetchingAC
} from "../../Redux/usersPageReducers";
import {createMyFriendsAC, deleteMyFriendsAC} from "../../Redux/navbarBlockReducer";
import React from "react";
import * as axios from "axios";
import classes from "./UsersContainer.module.css";
import UsersItem from "./UsersItem";
import defaultUserAva from "../../Images/userAva.png";
import Preloader from "../Preloader/Preloader"

class UsersContainer extends React.Component {

    onClickPage = (i) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(i);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageSize}&page=${i}`).then((response) => {
            this.props.setIsFetching(false);
            this.props.addUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageSize}&page=${this.props.state.currentPage}`).then((response) => {
            this.props.setIsFetching(false);
            this.props.addUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    render = () => {

        let pagesCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.pageSize);
        let pages = [];
        let currentPage = this.props.state.currentPage < 6 ? 1 : this.props.state.currentPage - 5;
        for (let i = currentPage; i <= pagesCount; i++) {
            if (i > currentPage + 9) break;
            pages.push(i);
        }

        return (<>
                {this.props.state.isFetching ? <Preloader /> : null}
            <div>
                <div className={classes.pages}>
                    {pages.map(i => <span key={i}
                                          className={i === this.props.state.currentPage ? classes.active : classes.item}
                                          onClick={() => {
                                              this.onClickPage(i)
                                          }}>{i}</span>)}
                </div>
                {
                    this.props.state.users.map(obj => <UsersItem key={obj.id}
                                                                 srcImg={obj.photos.small || defaultUserAva}
                                                                 name={obj.name}
                                                                 onClick={() => {
                                                                     this.props.onClick(obj)
                                                                 }}
                                                                 id={obj.id} follow={obj.follow}/>)
                }
            </div>
            </>
        );
    }
}

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
    },
    setTotalUsersCount(totalUsersCount){
        dispatch(setTotalUsersCount(totalUsersCount))
    },
    setCurrentPage(currentPage){
        dispatch(setCurrentPage(currentPage))
    },
    setIsFetching(isFetching){
        dispatch(setIsFetchingAC(isFetching));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);