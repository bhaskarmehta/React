import { useContext } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./welcomeMessage";

function PostList(){
  const {postList,addInitialPosts} = useContext(PostListData);
  const handleGetPostClick = () =>{
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=>{addInitialPosts(data.posts)});
  }
    return(
        <>
        {postList.length===0 && <WelcomeMessage onGetPostClick={handleGetPostClick}></WelcomeMessage>}
        {postList.map((post)=>(<Post key={post.id} post={post}></Post>))}
        </>
    )
}
export default PostList;