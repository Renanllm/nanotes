"use client"

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

type PostContextProps = {
    posts: Post[]
    highlightedPost: Post,
    getPostById: (id: string) => Post
}

const PostsContext = createContext({} as PostContextProps);

export type Post = {
    id: string;
    title: string;
    tag: string;
    description: string;
    author: string;
    createdOn: Date;
}

export function PostsProvider({ children }: PropsWithChildren) {
    const posts: Post[] = [
        {
            id: "1",
            title: "Introduction to TypeScript",
            tag: "TypeScript",
            description: "A beginner's guide to TypeScript.",
            author: "John Doe",
            createdOn: new Date('2023-01-01'),
        },
        {
            id: "2",
            title: "Advanced JavaScript",
            tag: "JavaScript",
            description: "Deep dive into advanced JavaScript concepts.",
            author: "Jane Smith",
            createdOn: new Date('2023-02-15'),
        },
        {
            id: "3",
            title: "CSS Grid Layout",
            tag: "CSS",
            description: "Learn how to create complex layouts with CSS Grid.",
            author: "Emily Johnson",
            createdOn: new Date('2023-03-10'),
        },
        {
            id: "4",
            title: "Understanding React Hooks",
            tag: "React",
            description: "A comprehensive guide to using hooks in React.",
            author: "Michael Brown",
            createdOn: new Date('2023-04-05'),
        },
        {
            id:"5",
            title: "Node.js for Beginners",
            tag: "Node.js",
            description: "Get started with server-side development using Node.js.",
            author: "Chris Wilson",
            createdOn: new Date('2023-05-20'),
        },
        {
            id: "6",
            title: "Building REST APIs with Express",
            tag: "Express",
            description: "How to build robust REST APIs using Express.",
            author: "Laura Lee",
            createdOn: new Date('2023-06-25'),
        },
        {
            id: "7",
            title: "Mastering Git and GitHub",
            tag: "Git",
            description: "Best practices for using Git and GitHub.",
            author: "David Martinez",
            createdOn: new Date('2023-07-30'),
        },
        {
            id: "8",
            title: "Introduction to GraphQL",
            tag: "GraphQL",
            description: "Learn the basics of GraphQL and how to integrate it into your projects.",
            author: "Sarah Kim",
            createdOn: new Date('2023-08-15'),
        }
    ];

    // should be a request to the api here
    const getPostById = useCallback((id: string) => [...posts, highlightedPost].find(post => post.id == id) ?? posts[0], [])

    const highlightedPost = {
        id: "10",
        tag: "in service",
        title: "5 great thing to read or watch this summer",
        description: "I found an unintentional theme connecting them all.",
        author: "Renan Medeiros",
        createdOn: new Date('2024-05-21')
    }

    return (
        <PostsContext.Provider value={{ posts, highlightedPost, getPostById }}>{children}</PostsContext.Provider>
    )
}

export function usePosts() {
    return useContext(PostsContext)
}