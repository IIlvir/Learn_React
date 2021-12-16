import { useDispatch, useSelector} from "react-redux";
import {
    setCurrentPage,
    getUsers,
    subscribeToFriend,
    unsubscribeToFriend
} from "../../Redux/usersPageReducers";
import React, {useEffect} from "react";
import classes from "./UsersContainer.module.css";
import UsersItem from "./UsersItem";
import defaultUserAva from "../../Images/userAva.png";
import Preloader from "../Preloader/Preloader"
import withAuthRedirect from "../../hoc/withAuthRedirect";

const UsersContainer = () => {
    const dispatch = useDispatch();

    const state = useSelector(
        state => state.usersPage
    );

    const onClick = (user) => {
        if (!user.followed) {
            dispatch(subscribeToFriend(user.id));
        } else {
            dispatch(unsubscribeToFriend(user.id));
        }
    };

    const setCurrentPage1 = (currentPage) => dispatch(setCurrentPage(currentPage));

    const getUsers1 = (pageSize, currentPage) => dispatch(getUsers(pageSize, currentPage));

    const onClickPage = (pageNumber) => {
        return () => {
            getUsers1(state.pageSize, pageNumber);
            setCurrentPage1(pageNumber);
        }
    };

    const onClickUser = (user) => () => onClick(user);

    useEffect(
        () => getUsers1(state.pageSize, state.currentPage),
        []
    );


    let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
    let pages = [];
    let currentPage = state.currentPage < 6 ? 1 : state.currentPage - 5;
    for (let i = currentPage; i <= pagesCount; i++) {
        if (i > currentPage + 9) break;
        pages.push(i);
    }

    return (
        <>
            {state.isFetching ? <Preloader/> : null}
            <div>
                <div className={classes.pages}>
                    {pages.map(i => <span
                                        key={i}
                                        className={i === state.currentPage ? classes.active : classes.item}
                                        onClick={onClickPage(i)}
                                    >
                                        {i}
                                    </span>
                    )}
                    <span>Total: {pagesCount}</span>
                </div>
                {
                    state.users.map(obj => <UsersItem
                                                key={obj.id}
                                                srcImg={obj.photos.small || defaultUserAva}
                                                name={obj.name}
                                                onClick={onClickUser(obj)}
                                                id={obj.id}
                                                followed={obj.followed}
                                                followingProgress={state.followingProgress}/>)
                }
            </div>
        </>
    );
}

export default withAuthRedirect(UsersContainer)
