import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://musica-api.up.railway.app'

const createRequest = (url) => (url)

export const songsApi = createApi({
    reducerPath: 'songsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPlaylists: builder.query({
            query: () => createRequest(`/playlist`)
        }),
        getPopularSongs: builder.query({
            query: () => createRequest(`/popular`)
        }),
        getNewSongs: builder.query({
            query: () => createRequest(`/new`)
        }),
    })
})

export const { useGetPlaylistsQuery, useGetPopularSongsQuery, useGetNewSongsQuery } = songsApi