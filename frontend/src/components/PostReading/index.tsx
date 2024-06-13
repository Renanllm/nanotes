import { Post, usePosts } from "@/hooks/usePosts"
import { PostInfo } from "../PostInfo"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";

export function PostReading() {
    const { getPostById } = usePosts()
    const router = useRouter();
    const [post, setPost] = useState({} as Post)
    const postId = String(router.query.id)

    useEffect(() => {
        const currentPost = getPostById(postId)
        setPost(currentPost)
    }, [postId])

    return (
        <PostInfo post={post} />
    )
}