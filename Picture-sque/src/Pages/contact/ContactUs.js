import "./contact.css";
import { useState, Link } from "react";
import axios from "axios";
import Topbar from "../../Components/topbar/Topbar"
import {
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    query: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
    axios.post("https://backend-0sjh.onrender.com/contactus", {
      username: formValues.username,
      email: formValues.email,
      query: formValues.query,
    });    
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.query) {
      errors.query = "query is required!";
    }
    return errors;
  };
  return (
    <div>
      <Topbar/>
      <div className="contcir"></div>
      <div className="contcir1"></div>
      <img className="contimg" src="https://startbloggingonline.com/wp-content/uploads/2019/04/35-website-pages-list.png" alt="img"/>
      <div className="drop1">
      <div className="contactus">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          navigate("/Home"),
          alert("Successfully sent...")
        ) : (
          <form className="contactForm" onSubmit={handleSubmit}>
            <span className="contactTitle">ContactUs</span>
            <label className="contpr">
              UserName: 
              <input
                className="contactInput"
                type="text"
                placeholder="Enter your name..."
                name="username"
                val={formValues.username}
                onChange={handleChange}
              />
            </label>

            <p className="error">{formErrors.username}</p>
            <label className="contpr">
              Email:
              <input
                className="contactInput"
                type="text"
                placeholder="Enter your email..."
                name="email"
                val={formValues.email}
                onChange={handleChange}
              />
            </label>

            <p className="error">{formErrors.email}</p>
            <label className="contpr">
              Query:
              <textarea
                className="contactInput"
                placeholder="Enter your Query..."
                name="query"
                val={formValues.query}
                onChange={handleChange}
              />
            </label>

            <p className="error">{formErrors.query}</p>

            <button className="contactusButton">send</button>
          </form>
        )}
      </div>
      </div>
    </div>
  );
}
