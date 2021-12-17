import { AxiosResponse } from "axios";
import instance from "../instance/instance";
import {authMeType, getUsersType, followToFriendType, getUserProfileInfoType, setProfileStatusType} from "./apiTypes";



export const api = {
    getFriends() {
        return (
            instance.get<getUsersType>(`/users?friend=true`)
        );
    },

    getUsers(count: number, page: number) {
        return (
            instance.get<getUsersType>(`/users?count=${count}&page=${page}`)
        );
    },

    subscribeToFriend(id: number) {
        return (
            instance.post<followToFriendType>(`/follow/${id}`)
        );
    },

    unsubscribeToFriend(id: number) {
        return (
            instance.delete<followToFriendType>(`/follow/${id}`)
        );
    },

    authMe() {
        return instance.get<authMeType>('/auth/me');
    },

    getUserProfileInfo(id: number) {
        return (
            instance.get<getUserProfileInfoType>(`/profile/${id}`)
        );
    },

    getProfileStatus() {
        return (
            instance.get<string>('/profile/status/21129')
        );
    },

    setProfileStatus(status: string) {
        return (
            instance.put<setProfileStatusType>('/profile/status', {status})
        );
    },

}