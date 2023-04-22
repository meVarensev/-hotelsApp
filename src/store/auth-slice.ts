import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'


// Define a type for the slice state
export interface IAuthState {
    email: string
    password: string
}
interface I_InitialState {
    user: IAuthState
}

// Define the initial state using that type
const initialState:I_InitialState = {
    user: {
            email: "",
            password: ""
        }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        authUser: (state, action: PayloadAction<IAuthState>) => {
             state.user = action.payload
        },
    },
})

export const {authUser} = authSlice.actions

const authReducer = authSlice.reducer
export {authReducer}
