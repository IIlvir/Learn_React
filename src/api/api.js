import instance from "../instance/instance";

export const api = {
    getFriends () {
        return (
            instance.get(`/users?friend=true`)
        );
    },

    getUsers (count,page) {
        return (
            instance.get(`/users?count=${count}&page=${page}`)
        );
    },

    subscribeToFriend (id){
        return(
            instance.post(`/follow/${id}`)
        );
    },

    unsubscribeToFriend(id){
        return(
            instance.delete(`/follow/${id}`)
        )
    },

    authMe(){
        return(
            instance.get('/auth/me')
        );
    },

    getUserProfileInfo(id){
        return(
            instance.get(`/profile/${id}`)
        )
    },
}