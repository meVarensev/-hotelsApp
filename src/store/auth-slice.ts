import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface IAuthState {
    email: string
    password: string
}

interface I_InitialState {
    user: IAuthState
}

const initialState: I_InitialState = {
    user: {
        email: "",
        password: ""
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUser: (state, action: PayloadAction<IAuthState>) => {
            state.user = action.payload
        },
    },
})

export const {authUser} = authSlice.actions

const authReducer = authSlice.reducer
export {authReducer}
