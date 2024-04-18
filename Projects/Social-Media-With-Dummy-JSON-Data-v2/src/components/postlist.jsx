import { useContext, useState } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./welcomeMessage";

function PostList(){
  const {postList,addInitialPosts} = useContext(PostListData);
  // We can write below code instead of handleGetPostClick method. But whenever there will be a change then again all data will get repaint.
  // fetch('https://dummyjson.com/posts')
  //     .then(res => res.json())
  //     .then(data=>{addInitialPosts(data.posts)});

  // To avoid the repaint situation we can use useState hook as -
  const [fetchedData, setFetchedData] = useState(false);
  if(!fetchedData){
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=>{addInitialPosts(data.posts)});
      setFetchedData(true);
  }    

  // Here we can remove this method
  const handleGetPostClick = () =>{
    // fetch('https://dummyjson.com/posts')
    //   .then(res => res.json())
    //   .then(data=>{addInitialPosts(data.posts)});
  }
    return(
        <>
        {postList.length===0 && <WelcomeMessage onGetPostClick={handleGetPostClick}></WelcomeMessage>}
        {postList.map((post)=>(<Post key={post.id} post={post}></Post>))}
        </>
    )
}
export default PostList;