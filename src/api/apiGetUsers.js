import instance from "../instance/instance";


const apiGetUsers = (count,page) => {
    return (
        instance.get(`/users?count=${count}&page=${page}`)
    );
}

export default apiGetUsers;