import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post";

export default function () {
    const [posts, setPosts] = useState([])
    console.log(posts);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}