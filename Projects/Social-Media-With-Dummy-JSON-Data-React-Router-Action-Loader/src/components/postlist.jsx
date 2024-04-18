import Post from "./post";
import WelcomeMessage from "./welcomeMessage";
import { useLoaderData } from "react-router-dom";


function PostList(){
  const postList = useLoaderData();
    return(
        <> 
        { postList.length===0 && <WelcomeMessage></WelcomeMessage>}
        { postList.map((post)=>(<Post key={post.id} post={post}></Post>))}
        </>
    )
}

export const postLoader = () =>{
  return fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=>{return (data.posts)
      });
}
export default PostList;