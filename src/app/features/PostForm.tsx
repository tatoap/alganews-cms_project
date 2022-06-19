import React, { useEffect, useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import Input from "../components/Input/Input";
import MarkdownEditor from "../components/MarkdownEditor";
import WordPriceCounter from "../components/WordPriceCounter";
import TagInput from "../components/TagInput";
import Button from "../components/Button/Button";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { PostService } from "tato_ap-sdk";

interface PostFormProps {
    postId?: number
}

export default function PostForm (props: PostFormProps) {
    const navigate = useNavigate()
    const [tags, setTags] = useState<Tag[]>([])
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [publishing, setPublishing] = useState(false)

    useEffect(() => {
        console.log('imageUrl: ' + imageUrl)
    }, [imageUrl])

    async function insertNewPost () {
        const newPost = {body, title, imageUrl, tags: tags.map(tag => tag.text)}

        await PostService.insertNewPost(newPost)
        
        info({
            title: 'Post salvo com sucesso',
            description: 'Você acabou de criar um post'
        })
    }

    async function updateExistingPost (postId: number) {
        const post = {body, title, imageUrl, tags: tags.map(tag => tag.text)}

        await PostService.updateExistingPost(postId, post)

        info({
            title: 'Post alterado',
            description: 'Seu post foi alterado com sucesso'
        })
    }

    function fetchPost (postId: number) {
        PostService
            .getExistingPost(postId)
            .then(post => {
                setTitle(post.title)
                setBody(post.body)
                setImageUrl(post.imageUrls.default)
                setTags(post.tags.map(tag => ({id: tag, text: tag})))
            })
    }

    useEffect(() => {
        if (props.postId)
            fetchPost(props.postId)
    }, [props.postId])

    async function handleFormSubmit (e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault();

            setPublishing(true)
            
            props.postId 
                ? updateExistingPost(props.postId)
                : insertNewPost()

            navigate('/', {replace: true})
        } finally {
            setPublishing(false)
        }
        
    }

    return <PostFormWrapper onSubmit={handleFormSubmit}>
        <Loading show={publishing} />
        
        <Input 
            label="título"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
            placeholder="e.g.: Como fiquei rico aprendendo React"
        />
        <ImageUpload 
            onImageUpload={setImageUrl}
            label="Thumbnail do post"
            preview={imageUrl}
        />
        <MarkdownEditor
            readOnly={false}
            onChange={setBody}
            value={body}
        />
        <TagInput 
            tags={tags}
            onAdd={tag => setTags([...tags, tag])}
            onDelete={index => setTags(tags.filter((_, i) => i !== index))}
            placeholder="Insira as tags deste post"
        />
        <PostFormSubmitWrapper>
            <WordPriceCounter 
                wordsCount={countWordsInMarkdown(body)}
                pricePerWord={0.25}
            />
            <Button 
                label={"Salvar post"}
                variant={'primary'}
                type="submit"
                disabled={!title || !imageUrl || !body || !tags.length}
            />
        </PostFormSubmitWrapper>
    </PostFormWrapper>
}

const PostFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const PostFormSubmitWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
