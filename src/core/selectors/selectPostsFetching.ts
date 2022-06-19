import { RootState } from './../store/index';

export default function selectPostsFetching (state: RootState) {
    return state.post.fetching
}