"use client"

import PostImage from "@/assets/postImage.jpg";
import { usePosts } from "@/hooks/usePosts";
import Image from "next/image";
import { PostInfo } from "../PostInfo";
import "./styles.css";
import { useRouter } from "next/navigation";

export function HighlightedPost() {
    const { highlightedPost } = usePosts()
    const router = useRouter();

    return (
        <div className="w-full grid grid-cols-2 gap-7 cursor-pointer" onClick={() => { router.push(`/posts/${highlightedPost.id}`) }}>
            <Image src={PostImage} alt="Man holding a few books" fetchPriority="high"/>
            <div className="flex flex-col gap-5 justify-center">
                <PostInfo post={highlightedPost} />
            </div>
        </div>
    )
}