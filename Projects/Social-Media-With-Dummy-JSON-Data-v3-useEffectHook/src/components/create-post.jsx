import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
function CreatePost(){
    
    const {addPost}=useContext(PostList);
    const titleElement = useRef();
    const contentElement = useRef();
    const reactionsElement = useRef();
    const userIdElement = useRef();
    const tagsElement = useRef();

    const handleAddPost = (event) =>{
        event.preventDefault();
        const title =titleElement.current.value;
        const content = contentElement.current.value;
        const reactions =reactionsElement.current.value;
        const userId = userIdElement.current.value;
        const tags =tagsElement.current.value.split(" ");
        addPost(title,content,reactions,userId,tags);
        titleElement.current.value="";
        contentElement.current.value="";
        reactionsElement.current.value="";
        userIdElement.current.value="";
        tagsElement.current.value="";
    }

    return(
        <>
          <form className="create-post" onSubmit={handleAddPost}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" ref={titleElement} className="form-control" id="title" aria-describedby="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Content</label>
                    <textarea rows="4" ref={contentElement} type="text" className="form-control" id="body" aria-describedby="body"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Reactions</label>
                    <input type="text" ref={reactionsElement} className="form-control" id="reactions" aria-describedby="reactions"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">UserId</label>
                    <input type="text" ref={userIdElement} className="form-control" id="userId" aria-describedby="userId"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" ref={tagsElement} className="form-control" id="tags" aria-describedby="tags"/>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
                </form>
        </>
    )
}

export default CreatePost;