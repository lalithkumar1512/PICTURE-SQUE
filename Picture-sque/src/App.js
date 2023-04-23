import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/homepage/home";
import Aboutus from "./Pages/about/Aboutus";
import Contactus from "./Pages/contact/ContactUs";
import Post from "./Components/post/Post";
import Contest from "./Pages/Contest/Contest";
import AdminLogin from "./Pages/adminlogin/AdminLogin";
import Contestregistration from "./Pages/Contest/Contestregistration";
// import Admin from "./Pages/adminlogin/Customer"
import Writeblog from "./Pages/Writeblog/Writeblog";
import EditBlog from "./Pages/EditBlog/EditBlog";
import Myblogs from "./Components/Myblogs/Myblogs";
import Blogcards from "./Components/Blogcards/Blogcards";
import Landingpage from "./Pages/Landingpage/Landingpage";
import Blog from "./Pages/Blog/Blog";
import "./index.css";
import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Admin1 from "./Pages/Admin/Admin1";
import Admin2 from "./Pages/Admin/Admin2";
// const redux=require("redux")
// const createStore=redux.createStore()

export const UserContext = React.createContext();
var initialstate = null;
if (AdminLogin.initialstate !== null) {
  var initialstate = "admin";
}

function App() {
  const [data, setData] = useState({});
  return (
    <UserContext.Provider value={{ data, setData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Myblogs" element={<Myblogs />} />
          <Route path="/Allblogs" element={<Blogcards />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Admin1" element={<Admin1 />} />
          <Route path="/Admin2" element={<Admin2 />} />
          <Route path="/Write" element={<Writeblog />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Myblogs" element={<Myblogs />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/EditBlog" element={<EditBlog />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contest" element={<Contest />} />
          <Route
            path="/Contestregistration"
            element={<Contestregistration />}
          />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
