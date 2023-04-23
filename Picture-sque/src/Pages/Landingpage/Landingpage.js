import Navbar from "../../Components/Navbar/Navbar"
import "./landingpage.css"  
import BGvideo from "../imgs/BGvid.mp4";
import Slide from "../Slide/Slide"
import Footer from "../Footer/Footer"

export default function Home() {
    return (
        <>
            <div className="cont">
                <div className=".three_bg"></div>
                <Navbar />
                <div className="bgvid">
                        <video className="BGvid" src={BGvideo}   autoPlay={true} loop muted/>
                    </div>
                <div className="circle"></div>

                <div className="ho">
                    <h2 className="mainheading">PictureSque</h2>
                    <p className="untitle">
                        "We take photos as a return ticket to a moment, otherwise
                        gone"
                    </p>

                   
                
            </div>
        </div>
        <Slide/>
        {/* <Box/> */}
        {/* <Contact/> */}
        <Footer/>
    </> 
    )
}