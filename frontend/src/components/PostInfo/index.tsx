import { Post } from "@/hooks/usePosts"
import { Badge } from "../ui/badge"

type PostInfoProps = {
    post: Post
}

export function PostInfo({ post }: PostInfoProps) {
    return (
        <>
            <div>
                <Badge variant="default">{post?.tag}</Badge>
            </div>
            <div className="head">
                <p className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    {post?.title}
                </p>
            </div>
            <div className="description">
                <p className="text-sm">
                    {post?.description}
                </p>
            </div>
            <div className="text-xs flex gap-1">
                By
                <span className="font-bold"> {post?.author} </span>
                |
                <p>
                    {post?.createdOn?.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
        </>
    )
}