/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

async function getPost(postId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/posts/records/${postId}`, 
        {next: {revalidate: 10}}
        );
    const data = await res.json();
    
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return data;
}

const PostDetailPage = async ({params}: any) => {
    // const post = await getPost(params.id);
    const resolvedParams = await params; // unwrap the promise
    const post = await getPost(resolvedParams.id);
    return (
        <div>
            <h1>posts/{post.id}</h1>
            <h3>{post.title}</h3>        
            <p>{post.created}</p>
        </div>
    );
}

export default PostDetailPage
