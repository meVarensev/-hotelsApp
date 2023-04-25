import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {LoginFormInputs} from "../src/utils/interface";




export const authApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    tagTypes: [],
    endpoints: (builder) => ({
        addAuthUser:  builder.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'users', id: 'LIST'}]
        }),
    }),
})

export const { useAddAuthUserMutation } = authApi
