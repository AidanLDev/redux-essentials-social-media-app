import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single apiSlice object
export const apiSlice = createApi({
  reducerPath: 'api',
  // All of our requests will have URLs starting with /fakeApi
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  // endpoints represent operations and requests for this server
  endpoints: builder => ({
    // getPosts endpoint is a "query" operation that returns data
    getPosts: builder.query({
      query: () => '/posts'
    }),
    getPost: builder.query({
      query: postId => `/posts/${postId}`
    })
  })
})

// Export the auto-generated hook for the "getPosts" query endpoint
export const { useGetPostsQuery, useGetPostQuery } = apiSlice;
