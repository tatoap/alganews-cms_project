import usePageTitle from "../../core/hooks/usePageTitle"
import PostForm from "../features/PostForm"
import DefaultLayout from "../layouts/Default"

export default function PostCreate () {
    usePageTitle('Novo post')

    return <DefaultLayout>
        <PostForm />
    </DefaultLayout>
}