import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '3ab6966de4msh9fc4c26290ed4b9p17e81djsn6ebf940f7303',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const params = {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
}

const baseUrl =  'https://coinranking1.p.rapidapi.com';

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         'tiers[0]': '1',
//         orderBy: 'marketCap',
//         orderDirection: 'desc',
//         limit: '50',
//         offset: '0'
//     },
//     headers: {
//         'X-RapidAPI-Key': '3ab6966de4msh9fc4c26290ed4b9p17e81djsn6ebf940f7303',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };


const createRequest = (url) => ({ method: 'GET', url, headers: cryptoApiHeaders, params: params });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({ 
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const { useGetCryptosQuery } = cryptoApi;