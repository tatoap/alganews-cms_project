import usePageTitle from "../../core/hooks/usePageTitle"
import PostList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layouts/Default"

export default function HomeView () {
    usePageTitle('Home')

    return <DefaultLayout>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px' }}>
            <UserTopTags />
            <UserEarnings />
        </div>
        <UserPerformance />
        <PostList />
    </DefaultLayout>
}