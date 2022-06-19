import { createAction, createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { Post, PostService } from "tato_ap-sdk";

interface PostSliceState {
    paginated?: Post.Paginated,
    fetching?: boolean,
    counter: number
}

const initialState: PostSliceState = {
    counter: 0,
    paginated: {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 1,
        content: []
    }
}

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async function (query: Post.Query) {
        const posts = await PostService.getAllPosts({})
        return posts
    }
)

export const increment = createAction('post/increment')

export const postReducer = createReducer(initialState, (builder) => {
    const pendingActions = isPending(fetchPosts)
    const fulfilledActions = isFulfilled(fetchPosts)
    const rejectedActions = isRejected(fetchPosts)
    builder
        .addCase(increment, (state) => {
            state.counter++;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.paginated = action.payload;
        })
        .addMatcher(pendingActions, (state) => {
            state.fetching = true;
        })
        .addMatcher(fulfilledActions, (state) => {
            state.fetching = false;
        })
        .addMatcher(rejectedActions, (state) => {
            state.fetching = false;
        })
})