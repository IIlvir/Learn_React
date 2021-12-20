import { configureStore } from '@reduxjs/toolkit';
import dialogPageReducer from "./dialogPageReducer";
import navbarBlockReducer from "./navbarBlockReducer";
import usersPageReducers from "./usersPageReducers";
import userProfileReduces from "./userProfileReduces";
import authReducer from "./authReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import profilePageReducer from "./profilePageReducer";

const store = configureStore({
    reducer: {
        profilePage: profilePageReducer,
        dialogsPage: dialogPageReducer,
        navbarBlock: navbarBlockReducer,
        usersPage: usersPageReducers,
        userProfile: userProfileReduces,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: window.document.location.hostname === 'localhost',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;