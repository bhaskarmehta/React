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
    return newPostLists;
}

const PostListProvider = ({children}) =>{
   const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST);
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
    deletePost
   }}>{children}</PostList.Provider>
}


const DEFAULT_POST =[{
   id: '1',
   title:'Enjoying',
   body:'I am going to mumbai for enjoying in the vaccation',
   reactions: 2,
   userId: 'user-1',
   tags: ["Vaccation","Enjoy"],
},
{
    id: '2',
   title:'Playing',
   body:'I am Playing Cricket',
   reactions: 10,
   userId: 'user-2',
   tags: ["Playing","Cricket"],
}
]

export default PostListProvider;
export {PostList};