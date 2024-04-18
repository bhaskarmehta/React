import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList  } from "../store/post-list-store";
function Post({post}){
    const {deletePost}=useContext(PostList);
    return(
        <>
          <div className="card posts" style={{width: "30rem"}}>
            <div className="card-body" >
                <h5 className="card-title">{post.title}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
                <MdDelete />
                </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag)=>( <span class="badge text-bg-primary tag">{tag}</span>))} 
                <div class="alert alert-success reaction" role="alert">
                    This Post has been reacted by {post.reactions} people
                </div>           
            </div>
            </div>
        </>
    )
}

export default Post;