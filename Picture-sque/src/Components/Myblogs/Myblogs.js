import MyBlogcard from "../MyBlogcard/MyBlogcard";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../MyBlogcard/MyBlogcard.css";
import Topbar from "../topbar/Topbar";
import Footer from "../../Pages/Footer/Footer"
export default function Blogcards() {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  console.log(currentUser);
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    Axios.post("https://backend-0sjh.onrender.com/myposts", {
      email: currentUser.email,
    })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div className="myblogspage">
      <Topbar />
      &nbsp;&nbsp;&nbsp;
      <input
      className="searchbar"
        placeholder="Enter Post Title"
        onChange={(event) => setQuery(event.target.value)}
      /><br></br>
      <div className="cards">
        {posts
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map((post) => {
            return (
              <div>
                <MyBlogcard
                  id={post._id}
                  file={post.file}
                  img={post.file}
                  title={post.title}
                  desc={post.desc}
                  tag={post.tag}
                  likes={post.likes}
                />
              </div>
            );
          })}
      </div>
      <div className="side">{/* <Sidebar /> */}</div>
    </div>
    <Footer/>
    </>
  );
}
