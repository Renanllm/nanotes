"use client"

import { Header } from "@/components/Header";
import { HighlightedPost } from "@/components/HighlightedPost";
import { PostPreviewList } from "@/components/PostPreviewList";
import { Quote } from "@/components/Quote";
import { PostsProvider } from "@/hooks/usePosts";

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="max-w-screen-lg h-full mr-auto ml-auto grid gap-5">
        <Header />
        <Quote />
        <PostsProvider>
          <HighlightedPost />
          <PostPreviewList />
        </PostsProvider>
      </main>
    </div>
  );
}
