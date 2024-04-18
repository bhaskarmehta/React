import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";
function CreatePost(){
    
    const navigate = useNavigate();
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

        titleElement.current.value="";
        contentElement.current.value="";
        reactionsElement.current.value="";
        userIdElement.current.value="";
        tagsElement.current.value="";
        // addPost(title,content,reactions,userId,tags);
        fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            body:content,
            reactions: reactions,
            userId: userId,
            tags: tags,
        })
        })
        .then(res => res.json())
        .then(post => {
            addPost(post);
            navigate('/');
        });
    // navigate('/'); If we use this here, then first previous al data will be shown and then after some time current 
    // data will be added. SO to avoid this , we will use this after addPost().
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