import { useReducer } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT = { postList:[],
    addPost: ()=>{},
    deletePost:()=>{}
}
const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentPostList,action) =>{
    let newPostLists=currentPostList;
    if(action.type==='DELETE_POST'){
        newPostLists = currentPostList.filter(item => item.id !== action.payload.id);
    }
    else if(action.type==='NEW_POST'){
        newPostLists = [action.payload, ...currentPostList];
    }
    else if(action.type==='NEW_INITIAL_POST'){
        newPostLists = action.payload.posts;
    }
    return newPostLists;
}

const PostListProvider = ({children}) =>{
   const [postList,dispatchPostList]=useReducer(postListReducer,[]);
   const addInitialPosts = (posts)=>{
     const newPostAction = {
        type: "NEW_INITIAL_POST",
        payload: {
            posts,
        }
    }
    dispatchPostList(newPostAction);
  };

  const addPost = (title,body,reactions,userId,tags)=>{
    const newPostAction = {
       type: "NEW_POST",
       payload: {
           id:Date.now(),
           title,
           body,
           reactions,
           userId,
           tags,
       }
   }
   dispatchPostList(newPostAction);
 };


   const deletePost=(id)=>{
    dispatchPostList({
        type:'DELETE_POST',
        payload:{
            id,
        }
    })
}

   return <PostList.Provider value={{
    postList,
    addPost,
    deletePost,
    addInitialPosts,
   }}>{children}</PostList.Provider>
}


export default PostListProvider;
export {PostList};