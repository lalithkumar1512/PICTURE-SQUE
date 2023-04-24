import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  useNavigate ,
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import "./topbar.css";

export default function Topbar() {
  // const navigate=useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("current-user"))
  //console.log(currentUser)
  const [user_name, setUser_name] = useState("");
  const [user_pic, setUser_pic] = useState("");
    axios.post("https://backend-0sjh.onrender.com/topbar",{
    email: currentUser.email,
    // password: currentUser.password,
  }).then((res)=>{
    console.log(res.data)
    setUser_name(res.data.username)
    setUser_pic(res.data.picture)
  });

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   Axios.get(`http://localhost:5000/users/?email=${currentUser.email}`)
  //     .then((res) => {
  //       setPosts(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  //console.log(posts[0].picture);
  // const cu= async () => {
  //   const result = await axios.get(`http://localhost:5000/users/?email=${currentUser.email}`);
  //   console.log(result);
  // }
  // console.log(result)
  return (
    <div className="topinblogs">
      <div className="topLeft">
      <img
              className="topImg"
              src={user_pic}
              //src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />

      <h2>&nbsp;{user_name}</h2>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/Home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Allblogs">
              ALLBLOGS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Myblogs">
              UPLOADS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Contest">
              CONTEST
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/Contactus">
              CONTACT<span>US</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
      <ul className="topListItem"><Link className="link" to="/">
          LOGOUT
         </Link></ul>
      </div>
    </div>
  );
}
