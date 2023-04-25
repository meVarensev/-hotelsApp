import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
<<<<<<< HEAD
=======
import {LoginFormInputs} from "../src/utils/interface";



>>>>>>> 77882309357d8344a62dc1e7a6f10fb46194fad5

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
