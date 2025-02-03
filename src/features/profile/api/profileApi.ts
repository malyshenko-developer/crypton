import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ProfileResponse {
    email: string;
    id: string;
}

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend-ashen-seven-22.vercel.app/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');

            if (token) {
                headers.set('Authorization', `${token}`);
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getProfile: builder.query<ProfileResponse, void>({
            query: () => '/profile'
        })
    })
});

export const { useGetProfileQuery } = profileApi;