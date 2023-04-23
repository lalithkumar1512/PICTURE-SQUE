import { Link } from "react-router-dom";
import "./navbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">PICTURESQUE</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Aboutus">
              ABOUT
            </Link>
          </li>
          {/* <li className="topListItem">
          <Link className="link" to="/Contactus">
                CONTACTUS
              </Link>
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/Login">
              <button className="log1" style={{ "--clr": "#1e9bff" }}>
                <span>LOGIN</span>
                <i></i>
              </button>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Register">
              <button className="log1" style={{ "--clr": "#6eff3e" }}>
                <span>REGISTER</span>
                <i></i>
              </button>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/AdminLogin">
              <button className="log1" style={{ "--clr": "#ff1867" }}>
                <span>ADMINLOGIN</span>
                <i></i>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
