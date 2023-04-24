import "./blog.css";
import Topbar from "../../Components/topbar/Topbar";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Blog() {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  const navigate = useNavigate();
  const location = useLocation();
  const handleupdate = () => {
    navigate("/EditBlog", {
      state: {
        id: location.state.id,
        img: location.state.img,
        tag: location.state.tag,
        title: location.state.title,
        desc: location.state.desc,
      },
    });
  };
  const handledelete = () => {
    axios.post("https://backend-0sjh.onrender.com/delete", {
      id: location.state.id,
    });
    navigate("/Allblogs");
  };
  return (
    <div className="blog">
      <Topbar />
      <div className="blg">
        <img className="wimg" src={location.state.img} alt="" />
        <div className="info">
          <div className="winput title">{location.state.title}</div>
          <div className="winput">{location.state.desc}</div>
        </div>
      </div>
      <div className="button">
        <button className="blog-btn" type="submit" onClick={handleupdate}>
          Update
        </button>  &nbsp; &nbsp; &nbsp;
        <button className="blog-btn" type="submit" onClick={handledelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
