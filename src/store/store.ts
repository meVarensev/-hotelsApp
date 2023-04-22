import { configureStore } from '@reduxjs/toolkit'
import {authReducer} from "./auth-slice";
import {locationsReducer} from "./locations-slice";

export const store = configureStore({
    reducer: {
        location: locationsReducer,
        user: authReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
