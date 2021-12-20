import {userType} from "../../api/apiTypes";

export type createMyFriendsACType = {
    type: string,
    user: userType[],
}

export type preloadedStateType = {
    jsonMenu: {to: string,name:string}[],
    jsonFriends: userType[],
}