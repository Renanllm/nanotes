"use client"

import { Layout } from "@/components/Layout";
import { PostInfo } from "@/components/PostInfo";
import "./styles.css";
import { usePosts } from "@/hooks/usePosts";

export default function Posts() {
    const { currentPost } = usePosts()

    return (
        <Layout>
            <PostInfo post={currentPost} />
        </Layout>
    )
}