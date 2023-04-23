import ImageSlider from "./Imageslider";
import "./Slide.css"
const Slide = () => {
  const slides = [
    { url: "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__340.jpg", title: "beach" },
    { url: "https://i.natgeofe.com/n/dde3c72a-7612-451e-9796-5498d6386a04/yourshot-underwater-1869254.jpg", title: "Seabed" },
    { url: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg", title: "forest" },
    { url: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-169647.jpg&fm=jpg", title: "city" },
    { url: "https://cdn.pixabay.com/photo/2014/03/03/16/12/village-279013__480.jpg", title: "italy" },
  ];
  const containerStyles = {
    padding:"3.125rem",
    width: "90%",
    height: "31.25rem",
    margin: "0 auto",   
  };
  return (
    <div className="container" >
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slide;