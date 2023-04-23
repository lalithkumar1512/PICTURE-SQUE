import "./about.css";
import Navbar from "../../Components/Navbar/Navbar"



export default function Aboutus() {
    return(

        <div>
            <Navbar/>
            <div className="containe">
            <img className="aboutimg" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80" alt="camera" />
            <div className="aboutinfo"><h2 className="abouth2">
                "PICTURESQUE"<br></br>A website providing a platform for photographers to showcase their talents</h2></div>
            
            </div>
            <div className="containe2">
             <b className="Text1" ><span>About Us</span></b>
            </div>
            <div className="container3">
             <p className="aboutp">We started it all in 2021. We are glad you came her to check on us. 
                In your daily life you encounter moments which you want to cherish forever, hold the moment forever. 
                Such moments can be held forever only by capturing them...Pictures are everywhere on your desk, 
                the internet, billboards, and your favorite cereal box. Almost everywhere you go you have been impacted 
                by a photograph. You have either been the person behind the camera, the one posing, or the one staring at
                an advertisement in a magazine. The world of photography has changed dramatically in the past couple years 
                and continues to change. So here we provide a platform for those photographers to showcase their talent...
                Join us and share your moments </p>
            </div>
            <div className="container4">
            <b className="Text2" ><span>Thank you</span></b>
            </div>
            <div className="section2">
            <div className="aboutinfo">
            <img className="aboutimg1" src="https://cloudfront.slrlounge.com/wp-content/uploads/2017/06/white-balance-modes.gif" alt="lightings" />
                <h2 className="abouth3">Our goal is to encourage and motivate every photogrpher by giving her/him 
                the goals to overcome everyday challenges</h2></div> 
            </div> 
        </div>
    )
}

