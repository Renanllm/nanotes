import Image from "next/image";
import PostPreviewImage from "@/assets/postPreviewImage.jpg"

type PostPreviewProps = {
    title: string;
    description: string;
}

export function PostPreview({ title, description }: PostPreviewProps) {
    return (
        <div>
            <Image src={PostPreviewImage} alt="a woman reading a book"/>
            <div className="title text-base font-bold">{title}</div>
            <div className="description text-sm">{description}</div>
        </div>
    )
}