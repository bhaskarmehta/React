import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

function CreatePost(){
    const {addPost}=useContext(PostList);

    return(
        <>
          <Form className="create-post" method="post">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" id="title" aria-describedby="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Content</label>
                    <textarea rows="4" name="content" type="text" className="form-control" id="body" aria-describedby="body"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Reactions</label>
                    <input type="text" name="reactions" className="form-control" id="reactions" aria-describedby="reactions"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">UserId</label>
                    <input type="text" name="userId" className="form-control" id="userId" aria-describedby="userId"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" name="tags" className="form-control" id="tags" aria-describedby="tags"/>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
                </Form>
        </>
    )
}

export const createPostAction = async (data) =>{
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");

    console.log(postData);
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => {
            console.log(post);
        });
    return redirect("/")
}

export default CreatePost;