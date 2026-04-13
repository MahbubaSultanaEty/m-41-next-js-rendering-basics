import Posts from "@/Component/Posts";
import { Suspense } from "react";


const PostPage = () => {
    const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json());

    return (
        <div>
            <h2 className="text-xl font-bold text-center">post page</h2>
            <Suspense fallback={<h2>loading.....</h2>}>
            <Posts postsPromise={postsPromise}></Posts>
            </Suspense>

            
        </div>
    );
};

export default PostPage;