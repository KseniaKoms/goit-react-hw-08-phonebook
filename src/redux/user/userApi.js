import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: body => ({
        url: `/signup`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    login: builder.mutation({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    currentUser: builder.query({
      query: () => '/current',
    }),
  }),
});

export const { useSignUpMutation, useCurrentUserQuery, useLoginMutation } =
  userApi;
