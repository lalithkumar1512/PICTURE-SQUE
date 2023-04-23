import "./admin.css"
import MainDash from "../MainDash/MainDash";
import Sidebar from "../Admin/Sidebar"
import Landingpage from "../Landingpage/Landingpage";
import AdminLogin from "../adminlogin/AdminLogin";
import App from "../../App";
import { Link,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Admin(){
  const auth = useSelector(state => state.validauth)
  console.log(auth)
  const navigate=useNavigate()
  const h=()=>navigate("/")
    return(
      auth === true ? <>
              <div className="adcir"></div>

        <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
      </div>
    </div>
        </> : <h2>Err Page</h2>
    )
}