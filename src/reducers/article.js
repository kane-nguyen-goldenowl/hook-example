import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticleListApi
} from '../api/article';

export const getArticleList = createAsyncThunk(
    'article/getArticleList',
    getArticleListApi
);

const initialState = {
    value: 0,
    articleList: undefined,
    inProgress: false,
    errors: undefined,
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
        articlePageUnloaded: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getArticleList.fulfilled, (state, action) => {
            console.log("extraReducers - getArticleList")
            state.articleList = action.payload;
            console.log(action)
            state.inProgress = false;
        });

        builder.addMatcher(
            (action) => action.type.endsWith('/pending'),
            (state) => {
                state.inProgress = true;
            }
        );

        builder.addDefaultCase((state) => {
            state.inProgress = false;
        });
    },
});

export const {
    incremented,
    decremented,
    articlePageUnloaded
} = articleSlice.actions;

export default articleSlice.reducer;
