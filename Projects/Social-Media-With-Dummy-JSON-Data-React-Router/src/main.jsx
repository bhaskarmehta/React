import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import CreatePost from './components/create-post.jsx';
import PostList, { postLoader } from "./components/postlist";

const router = createBrowserRouter([
  { 
    path:"/", 
    element: <App/>,
    children: [
    { path: "/", element: <PostList />, loader: postLoader},
    { path: "/create-post", element: <CreatePost/>}
  ],},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
