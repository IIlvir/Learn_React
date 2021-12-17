export type userDataType = {
    email: string,
    id: number,
    isAuth: boolean,
    login: string,
}

export type preloaderStateType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isFetching: boolean,
    isAuth: boolean,
}

export type setUserDataType = {
    type: string,
    data: userDataType,
}