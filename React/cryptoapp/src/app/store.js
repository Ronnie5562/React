import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { CryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware, CryptoNewsApi.middleware),
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(CryptoNewsApi.middleware)
});