import "./MyBlogcard.css";
import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function MyBlogcard({ id, file, img, title, desc, tag, likes }) {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  // const count = 0;
  const navigate = useNavigate();
  const [Like, setLike] = useState(likes);
  const [Likecheck, setLikecheck] = useState(true);

  const handleclick = async (file) => {
    await axios
      .post("https://backend-0sjh.onrender.com/likecheck", {
        file: file,
        email: currentUser.email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          console.log(1);
          setLike(Like + 1);
          axios.post("https://backend-0sjh.onrender.com/increaselikecount", {
            file: file,
            email: currentUser.email,
          });
        } else {
          alert("You already liked it");
        }
        setLikecheck(res.data.status);
      });
  };

  const handleview = async () => {
    console.log("view");
    navigate("/Blog", {
      state: {
        id: id,
        img: img,
        title: title,
        desc: desc,
        tag: tag,
        likes: likes,
      },
    });
  };

  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>
          <a
            title="Love it"
            className="btn btn-counter multiple-count"
            onClick={() => handleclick({ file })}
            data-count={Like}
          >
            <span>&#x2764;</span>
          </a>
        </p>
        <button className="view-btn" onClick={handleview}>View</button>
        <h5></h5>
      </div>
    </div>
  );
}
