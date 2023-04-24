import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {IGetHotelsParams} from "../utils/interface";


interface I_InitialState {
    location: IGetHotelsParams
}

const initialState: I_InitialState = {
    location: {
        location: "Ufa",
        checkInDate: "2023-04-24",
        checkOutDate: "2023-04-25"
    }
}

export const locationsSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<IGetHotelsParams>) => {
            state.location = action.payload
        },
        getLocations: (state, action: PayloadAction<IGetHotelsParams>) => {
            // state.user = action.payload
        },
    },
})

export const {setLocation} = locationsSlice.actions

const locationsReducer = locationsSlice.reducer
export {locationsReducer}
