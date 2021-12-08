import {connect} from "react-redux";
import {
    setCurrentPage,
    getUsers, subscribeToFriend, unsubscribeToFriend
} from "../../Redux/usersPageReducers";
import React from "react";
import classes from "./UsersContainer.module.css";
import UsersItem from "./UsersItem";
import defaultUserAva from "../../Images/userAva.png";
import Preloader from "../Preloader/Preloader"
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    onClickPage = (pageNumber) => {
        this.props.getUsers(this.props.state.pageSize,pageNumber);
        this.props.setCurrentPage(pageNumber);
    };

    componentDidMount() {
        this.props.getUsers(this.props.state.pageSize,this.props.state.currentPage);
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
                                                                 followed={obj.followed}
                                                                 followingProgress={this.props.state.followingProgress}/>)
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
            dispatch(subscribeToFriend(user.id));
        } else {
            dispatch(unsubscribeToFriend(user.id));
        }
    },

    setCurrentPage(currentPage){
        dispatch(setCurrentPage(currentPage))
    },
    getUsers(pageSize,currentPage){
        dispatch(getUsers(pageSize, currentPage));
    }
});

export default compose(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(UsersContainer)
