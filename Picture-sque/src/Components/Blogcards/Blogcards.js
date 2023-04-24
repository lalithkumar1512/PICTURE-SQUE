import Blogcard from "../Blogcard/Blogcard";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Blogcard/Blogcard.css";
import Topbar from "../topbar/Topbar";
import Footer from "../../Pages/Footer/Footer";

export default function Blogcards() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("current-user"))
  );
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    Axios.post("https://backend-0sjh.onrender.com/getposts", {
      email: currentUser.email,
      accesstoken: currentUser.accesstoken,
    })
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div className="allblogspage">
      <Topbar />
      &nbsp;&nbsp;&nbsp;
      <input
      className="searchbar"
        placeholder="Enter Post Title to search"
        onChange={(event) => setQuery(event.target.value)}
      />
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
                <Blogcard
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
