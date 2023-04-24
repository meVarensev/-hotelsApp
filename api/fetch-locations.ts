import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IGetHotelsParams} from "../src/utils/interface";


const valueForReq = 20;

export const locationApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://engine.hotellook.com/api/v2' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getLocations: builder.query({
            query: ({location, checkInDate , checkOutDate }:IGetHotelsParams) => `/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=${valueForReq}`,
        }),
    }),
})

export const { useGetLocationsQuery } = locationApi

