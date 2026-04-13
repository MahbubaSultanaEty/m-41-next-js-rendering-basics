"use client"
import
{ use } from "react";


const Posts = ({ postsPromise }) => {
    
    const posts = use(postsPromise);
    console.log(posts);
    return (
        <div>
            <h2>Posts : {posts.length}</h2>
            {
                posts.map(post => <h3 key={post.id} className="text-center">{ post.title}</h3>)
            }
        </div>
    );
};

export default Posts;