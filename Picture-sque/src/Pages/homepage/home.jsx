import { useLocation } from "react-router";
import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Topbar from "../../Components/topbar/Topbar";
import "./homepage.css";
import Footer from "../Footer/Footer"

export default function Homepage() {
  const location = useLocation();
  return (
    <>
    <div className="home">
      <Topbar /> 
      <div className="homeheader"><Header /></div>
      <div className="homediv">
        <div className="homeposts"><Posts /></div>
      </div>
    </div>
   <Footer/>
    </>
  );
}
