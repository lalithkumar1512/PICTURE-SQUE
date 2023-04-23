import { FormLabel} from "@mui/material";
import Sidebar from "../Sidebar";
import "./Contest.css";

export default function Contest() {
    return(
        <>
        <Sidebar/>
        <div className="contest">
            <form>
                <h2>Post Contests</h2>
                <span><label> Prize Pool :   
                <input type="text" className="inputtext"/></label></span><br></br>
                <label>Contest Name : 
               <input type="text" className="inputtext"/></label><br></br>
                <label>Entry Fee : </label>
                <label>Description</label>
                <textarea ></textarea><br></br>
                <button className="submit-btn">Post Contest</button>
            </form>
        </div>
        </>
    );
}