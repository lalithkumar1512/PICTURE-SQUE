import "./admin.css"
import MainDash1 from "../MainDash/MainDash1";
import Sidebar1 from "./Sidebar1"
import App from "../../App";

export default function Admin(){
    return(
        <>
                <div className="adcir"></div>

        <div className="App">
      <div className="AppGlass">
        <Sidebar1/>
        <MainDash1/>
      </div>
    </div>
        </>
    )
}