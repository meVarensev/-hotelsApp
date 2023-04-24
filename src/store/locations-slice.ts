import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {IGetHotelsParams} from "../utils/interface";
import {defaultLocation} from "../utils/default-location";
import {formatDate} from "../utils/formatDate";


interface I_InitialState {
    location: IGetHotelsParams
}

const initialState: I_InitialState = {
    location:  formatDate(defaultLocation)
}

export const locationsSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<IGetHotelsParams>) => {
            state.location = action.payload
        },
    },
})

export const {setLocation} = locationsSlice.actions

const locationsReducer = locationsSlice.reducer
export {locationsReducer}
