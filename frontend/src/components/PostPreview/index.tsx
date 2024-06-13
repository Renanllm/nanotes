"use client"

import Image from "next/image";
import PostPreviewImage from "@/assets/postPreviewImage.jpg"
import { Post } from "@/hooks/usePosts";
import { useRouter } from "next/navigation";

type PostPreviewProps = {
    post: Post
}

export function PostPreview({ post }: PostPreviewProps) {
    const router = useRouter();

    return (
        <div className="cursor-pointer" onClick={() => { router.push(`/posts/${post.id}`) }}>
            <Image src={PostPreviewImage} alt="a woman reading a book"/>
            <div className="title text-base font-bold">{post.title}</div>
            <div className="description text-sm">{post.description}</div>
        </div>
    )
}