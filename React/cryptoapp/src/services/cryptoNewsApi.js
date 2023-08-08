import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useGetCryptosQuery } from "./cryptoApi";

// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {
//         safeSearch: 'Off',
//         textFormat: 'Raw'
//     },
//     headers: {
//         'X-BingApis-SDK': 'true',
//         'X-RapidAPI-Key': '3ab6966de4msh9fc4c26290ed4b9p17e81djsn6ebf940f7303',
//         'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '3ab6966de4msh9fc4c26290ed4b9p17e81djsn6ebf940f7303',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const createRequest = (url) => ({ url, headers: createNewsApiHeaders })

export const CryptoNewsApi = createApi({
    reducerPath: 'CryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});


export const { useGetCryptoNewsQuery } = CryptoNewsApi;