import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface IProvidesTags {
    id: string
    type: string
}

export const authApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    reducerPath: 'authApi',
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        addAuthUser: builder.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Auth', id: 'LIST'}]
        }),
        addFavoriteLocation: builder.mutation({
            query: (body) => ({
                url: 'favorite',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Auth', id: 'LIST'}]
        }),
        getFavorite: builder.query({
            query: () => `favorite`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}: IProvidesTags) => ({type: 'Posts', id: 'LIST'})),
                        {type: 'Auth', id: 'LIST'},
                    ]
                    : [{type: 'Auth', id: 'LIST'}],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `favorite/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Auth', id: 'LIST'}]
        })

    }),
})

export const {
    useAddAuthUserMutation,
    useAddFavoriteLocationMutation,
    useGetFavoriteQuery,
    useDeleteProductMutation
} = authApi
