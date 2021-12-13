import {connect} from "react-redux";
import {
    setCurrentPage,
    getUsers, subscribeToFriend, unsubscribeToFriend
} from "../../Redux/usersPageReducers";
import React, {useEffect} from "react";
import classes from "./UsersContainer.module.css";
import UsersItem from "./UsersItem";
import defaultUserAva from "../../Images/userAva.png";
import Preloader from "../Preloader/Preloader"
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const UsersContainer = (props) => {

    const onClickPage = (pageNumber) => {
        props.getUsers(props.state.pageSize, pageNumber);
        props.setCurrentPage(pageNumber);
    };

    useEffect(()=>{
        props.getUsers(props.state.pageSize, props.state.currentPage);
    },[]);


    let pagesCount = Math.ceil(props.state.totalUsersCount / props.state.pageSize);
    let pages = [];
    let currentPage = props.state.currentPage < 6 ? 1 : props.state.currentPage - 5;
    for (let i = currentPage; i <= pagesCount; i++) {
        if (i > currentPage + 9) break;
        pages.push(i);
    }

    return (<>
            {props.state.isFetching ? <Preloader/> : null}
            <div>
                <div className={classes.pages}>
                    {pages.map(i => <span key={i}
                                          className={i === props.state.currentPage ? classes.active : classes.item}
                                          onClick={() => {
                                              onClickPage(i)
                                          }}>{i}</span>)}
                    <span>Total: {pagesCount}</span>
                </div>
                {
                    props.state.users.map(obj => <UsersItem key={obj.id}
                                                            srcImg={obj.photos.small || defaultUserAva}
                                                            name={obj.name}
                                                            onClick={() => {
                                                                props.onClick(obj)
                                                            }}
                                                            id={obj.id}
                                                            followed={obj.followed}
                                                            followingProgress={props.state.followingProgress}/>)
                }
            </div>
        </>
    );
}

const mapStateToProps = state => ({state: state.usersPage})

const mapDispatchToProps = dispatch => ({
    onClick(user) {
        if (!user.followed) {
            dispatch(subscribeToFriend(user.id));
        } else {
            dispatch(unsubscribeToFriend(user.id));
        }
    },

    setCurrentPage(currentPage) {
        dispatch(setCurrentPage(currentPage))
    },
    getUsers(pageSize, currentPage) {
        dispatch(getUsers(pageSize, currentPage));
    }
});

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(UsersContainer)
