import { RootState } from './../store/index';

export default function selectPostsCounter(state: RootState) {
    return state.post.counter
}