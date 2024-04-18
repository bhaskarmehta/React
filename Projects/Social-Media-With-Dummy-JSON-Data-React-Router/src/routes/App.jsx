import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "./App.css";
import CreatePost from "../components/create-post";
import PostList from "../components/postlist";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {

  const [selectedTab,setSelectedTab]=useState("Home");

  return (
    <>
    <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} ></Sidebar>
           <div className="content">
            <Header></Header>
            <Outlet></Outlet>
            {/* {selectedTab==="Home"? <PostList></PostList> : <CreatePost></CreatePost>}     */}
            <Footer></Footer>
          </div>
        </div>
    </PostListProvider>
    </>
  )
}

export default App
   