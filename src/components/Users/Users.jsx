import React from "react";
import UsersItem from "./UsersItem";
import * as axios from "axios";

class Users extends React.Component{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.addUsers(response.data.items))
    }

    render = () => {
        return (this.props.state.users.map(obj => <UsersItem key={obj.id}
                                                        srcImg={obj.photos.small}
                                                        name={obj.name}
                                                        onClick={() => {this.props.onClick(obj)}}
                                                        id={obj.id} follow={obj.follow}/>)
        );
    }
}

export default Users;