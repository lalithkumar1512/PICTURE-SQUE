import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import "./contestregistrationform.css";
function Contestregistrationform() {
  
  const initialValues = {
    fullname: "",
    email: "",
    place: "",
    file:"",
  };
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialValues);
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
    axios.post("https://backend-0sjh.onrender.com/contestregistrations", {
      fullname: formValues.username,
      email: formValues.email,
      place:formValues.place,
      file:formValues.file,
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
    if (!values.place) {
      errors.place = "Place is required";
    } 
    return errors;
  };

  return (
    <div className="contestreg">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        navigate("/Home"),
        alert("Successfully registered!")
      ) : (
        <>
        <Link className="link" to="/Home">
            HOME
          </Link>
        <h2 className="contestregTitle">Contest Registration Form</h2>
        <form className="contestregForm" onSubmit={handleSubmit}>
          <label>User Name</label>
          <input
            className="contestregInput"
            type="text"
            name="username"
            placeholder="Username"
            val={formValues.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>
          <label>Email</label>
          <input
            className="contestregInput"
            type="text"
            name="email"
            placeholder="Email"
            val={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
          <label>Place</label>
          <input
            className="contestregInput"
            type="text"
            name="place"
            placeholder="Place"
            val={formValues.place}
            onChange={handleChange}
          />
          <p>{formErrors.place}</p>
          <label>Upload a photowork link to participate in the contest</label>
          <input
            className="contestregInput"
            type="text"
            name="file"
            placeholder="Link"
            val={formValues.file}
            onChange={handleChange}
          />
          <p>{formErrors.file}</p>
          <button className="contestregButton">Register</button>
        </form>
        </>
      )}
    </div>
  );
}

export default Contestregistrationform;
