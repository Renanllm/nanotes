"use client"

import { Layout } from "@/components/Layout";
import { PostReading } from "@/components/PostReading";
import { PostsProvider } from "@/hooks/usePosts";
import "./styles.css";

export default function Posts() {

    return (
        <Layout>
            <PostsProvider>
                <PostReading />
            </PostsProvider>
        </Layout>
    )
}