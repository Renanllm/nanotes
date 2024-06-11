"use client"

import { usePosts } from "@/hooks/usePosts";
import { PostPreview } from "../PostPreview";

export function PostPreviewList() {
    const { posts } = usePosts();

    return (
        <div className="grid grid-cols-4 gap-5">
            {posts.map(post => (
                <PostPreview key={post.id} title={post.title} description={post.description}/>
            ))}
        </div>
    )
}