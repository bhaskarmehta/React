import { useContext } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/post-list-store";

function PostList(){
  const {postList} = useContext(PostListData);
  console.log(postList)
    return(
        <>
        {postList.map((post)=>(<Post key={post.id} post={post}></Post>))}
        </>
    )
}
export default PostList;