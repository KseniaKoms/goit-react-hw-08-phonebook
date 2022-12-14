import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: body => ({
        url: `/users/signup`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    login: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['user'],
    }),
    currentUser: builder.query({
      query: () => '/users/current',
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
} = userApi;
