import {connect} from "react-redux";
import {
    addStateAC,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowAC,
    setIsFetchingAC
} from "../../Redux/usersPageReducers";
import React from "react";
import classes from "./UsersContainer.module.css";
import UsersItem from "./UsersItem";
import defaultUserAva from "../../Images/userAva.png";
import Preloader from "../Preloader/Preloader"
import instance from "../../instance/instance";
import apiGetUsers from "../../api/apiGetUsers";

class UsersContainer extends React.Component {

    onClickPage = (i) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(i);
        apiGetUsers(this.props.state.pageSize,i).then((response) => {
            this.props.setIsFetching(false);
            this.props.addUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

    componentDidMount() {
        this.props.setIsFetching(true);
        apiGetUsers(this.props.state.pageSize,this.props.state.currentPage).then((response) => {
            this.props.setIsFetching(false);
            this.props.addUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

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
                    <span>Total: {pagesCount}</span>
                </div>
                {
                    this.props.state.users.map(obj => <UsersItem key={obj.id}
                                                                 srcImg={obj.photos.small || defaultUserAva}
                                                                 name={obj.name}
                                                                 onClick={() => {
                                                                     this.props.onClick(obj)
                                                                 }}
                                                                 id={obj.id}
                                                                 followed={obj.followed}/>)
                }
            </div>
            </>
        );
    }
}

const mapStateToProps = state => ({state: state.usersPage})

const mapDispatchToProps = dispatch => ({
    onClick(user) {
        if(!user.followed){
            instance.post(`/follow/${user.id}`).then((response) => {
                if(response.data.resultCode === 0){
                    dispatch(toggleFollowAC(user.id));
                };
            });
        } else {
            instance.delete(`/follow/${user.id}`).then((response) => {
                if(response.data.resultCode === 0){
                    dispatch(toggleFollowAC(user.id));
                }
            });
        }
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