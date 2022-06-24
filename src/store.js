import { configureStore } from '@reduxjs/toolkit';

import { localStorageMiddleware } from './middleware';

import articleReducer from './reducers/article';

export function makeStore(preloadedState) {
    return configureStore({
        reducer: {
            article: articleReducer,
        },
        devTools: true,
        preloadedState,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware(),
            localStorageMiddleware,
        ],
    });
}

const store = makeStore();

export default store;
