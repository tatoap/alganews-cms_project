import { useCallback, useState } from "react";
import { Post, PostService } from "tato_ap-sdk";
import info from '../utils/info';

export default function useSinglePost () {
    const [post, setPost] = useState<Post.Detailed>()
    const [loading, setLoading] = useState(false)

    const publishPost = useCallback(async function publishPost(postId: number) {
        await PostService.publishExistingPost(postId)
        info({
            title: 'Post publicado',
            description: 'Você publicou o post com sucesso'
        })
    }, [])

    const fetchPost = useCallback((postId: number) => {
        setLoading(true)
        PostService.getExistingPost(postId)
            .then(setPost)
            .finally(() => setLoading(false))
    }, [])

    return {
        loading,
        fetchPost,
        post, 
        publishPost
    }
}