import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./welcomeMessage";
import LoadingSpinner from "./loading-spinner";

function PostList(){
  const {postList,addInitialPosts} = useContext(PostListData);
  const [fetching,setFetching] = useState(false);
  useEffect(()=>{
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then(data=>{addInitialPosts(data.posts)
      setFetching(false)
      });

      return ()=> {
           console.log("Clean Up....");
           controller.abort();
      }
  },[])
    return(
        <>
        {fetching  && <LoadingSpinner></LoadingSpinner>} 
        { !fetching && postList.length===0 && <WelcomeMessage></WelcomeMessage>}
        { !fetching && postList.map((post)=>(<Post key={post.id} post={post}></Post>))}
        </>
    )
}
export default PostList;