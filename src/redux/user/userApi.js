import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
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
        url: `/users/signup`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    currentUser: builder.query({
      query: () => '/users/current',
    }),
  }),
});

export const { useSignUpMutation, useCurrentUserQuery } = userApi;
