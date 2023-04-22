import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface IAuthState {

}
interface I_InitialState {
    locations: IAuthState
}

const initialState:I_InitialState = {
    locations: {

    }
}

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setLocations: (state, action: PayloadAction<IAuthState>) => {
            // state.user = action.payload
        },
    },
})

export const {setLocations} = locationsSlice.actions

const locationsReducer = locationsSlice.reducer
export {locationsReducer}
