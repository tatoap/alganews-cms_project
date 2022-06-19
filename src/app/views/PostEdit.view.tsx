import { useParams } from "react-router-dom"
import usePageTitle from "../../core/hooks/usePageTitle"
import PostForm from "../features/PostForm"
import DefaultLayout from "../layouts/Default"

export default function PostEdit () {
    const params = useParams<{ id: string }>()
    usePageTitle('Editar post')

    return <DefaultLayout>
        <PostForm postId={Number(params.id)}/>
    </DefaultLayout>
}