export type authMeType = {
    data: {
        id: number;
        login: string;
        email: string;
    };
    resultCode: number;
    messages: string[];
}

type photosType = {
    small: null | string,
    large: null | string,
}

export type userType = {
    name: string,
    id: number,
    photos: photosType,
    status: null | string,
    followed: boolean,
}

export type getUsersType = {
    items: userType[],
    totalCount: number,
    error: string,
}

export type followToFriendType = {
    resultCode: number,
    messages: string[],
    data: {},
}

type contactsType = {
    github: string,
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type getUserProfileInfoType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: contactsType,
    photos: photosType,
}

export type setProfileStatusType = {
    resultCode: number,
    messages: string[],
    data: {},
}

