import React from "react";
import UsersItem from "./UsersItem";
import * as axios from "axios";

class Users extends React.Component {

    onClickPage = (i) => {
        this.props.setCurrentPage(i);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageSize}&page=${i}`).then((response) => {
            this.props.addUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageSize}&page=${this.props.state.currentPage}`).then((response) => {
            this.props.addUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    render = () => {

        let pagesCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (i > 10) break;
            pages.push(i);
        }
        ;

        return (
            <div>
                <div>
                    {pages.map(i => <span style={{margin: '3px'}}
                                          key={i}
                                          onClick={() => {
                                              this.onClickPage(i)
                                          }}>{i}</span>)}
                </div>
                {
                    this.props.state.users.map(obj => <UsersItem key={obj.id}
                                                                 srcImg={obj.photos.small}
                                                                 name={obj.name}
                                                                 onClick={() => {
                                                                     this.props.onClick(obj)
                                                                 }}
                                                                 id={obj.id} follow={obj.follow}/>)
                }
            </div>
        );
    }
}

export default Users;