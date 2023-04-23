import "./admin.css"
import MainDash2 from "../MainDash/MainDash2";
import Sidebar2 from "./Sidebar2"

export default function Admin(){
    return(
        <>
                <div className="adcir"></div>

        <div className="App">
      <div className="AppGlass">
        <Sidebar2/>
        <MainDash2/>
      </div>
    </div>
        </>
    )
}