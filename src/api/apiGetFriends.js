import instance from "../instance/instance";


const apiGetFriends = () => {
    return (
        instance.get(`/users?friend=true`)
    );
}

export default apiGetFriends;