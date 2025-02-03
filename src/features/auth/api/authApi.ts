import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface AuthData {
    email: string;
    password: string;
}

interface AuthResponse {
    token: string;
}

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend-ashen-seven-22.vercel.app/'
    }),
    reducerPath: 'authApi',
    endpoints: (builder) => ({
        register: builder.mutation<AuthResponse, AuthData>({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            })
        }),
        login: builder.mutation<AuthResponse, AuthData>({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            })
        })
    })
});

export const { useRegisterMutation, useLoginMutation } = authApi;