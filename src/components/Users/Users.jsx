import React from "react";
import UsersItem from "./UsersItem";
import * as axios from "axios";

const Users = (props) => {
    if(props.state.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => (props.addUsers(response.data.items)));
    }

    return (props.state.users.map(obj => <UsersItem key={obj.id}
                                                    srcImg={obj.photos.small}
                                                    name={obj.name}
                                                    onClick={() => {props.onClick(obj)}}
                                                    id={obj.id} follow={obj.follow}/>)
    );
};

export default Users;