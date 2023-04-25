import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {authReducer} from "./auth-slice";
import {locationsReducer} from "./locations-slice";
import {locationApi} from "../../api/fetch-locations";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authApi} from "../../api/fetch-auth";

const rootReducer = combineReducers({
    [locationApi.reducerPath]: locationApi.reducer,
    // [authApi.reducerPath]: authApi.reducer,

    location: locationsReducer,
    user: authReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(locationApi.middleware),
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
