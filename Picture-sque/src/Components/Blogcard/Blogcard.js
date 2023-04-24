import "./Blogcard.css";
import React, { Component, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Blogcard({ id, file, img, title, desc, tag, likes }) {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  // const count = 0;
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
  // const handleview = async() => {
  //   console.log("view");
  //   navigate("/Blog", {
  //     state: {
  //       id: id,
  //       img: img,
  //       title: title,
  //       desc: desc,
  //       tag: tag,
  //       likes: likes,
  //     },
  //   });
  // };

  return (
    <div className="card">
      <img src={img} alt="Image is taking longer time to load" />
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
      </div>
      {/* <button onClick={handleview}>View</button> */}
    </div>
  );
}
