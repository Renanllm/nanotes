"use client"

import { HighlightedPost } from "@/components/HighlightedPost";
import { Layout } from "@/components/Layout";
import { PostPreviewList } from "@/components/PostPreviewList";
import { Quote } from "@/components/Quote";
import { PostsProvider } from "@/hooks/usePosts";

export default function Home() {
  return (
    <Layout>
      <Quote />
      <PostsProvider>
        <HighlightedPost />
        <PostPreviewList />
      </PostsProvider>
    </Layout>
  );
}
