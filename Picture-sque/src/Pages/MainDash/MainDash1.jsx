import React from "react";
import { useEffect, useState } from "react";
import axios from"axios";
import Cards from "../Cards/Cards"
import Table1 from "../Table/Table1"
import "./MainDash.css";
const MainDash1 = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Winner Updated Successfully')
    // setFormErrors(validate(formValues));
    const res = await axios.post("https://backend-0sjh.onrender.com/contestwinner",{
      email: formValues.email,
    });
  };
  return (
    <div className="MainDash">
      <h1>Admin portal</h1>
      <Cards />
      <br></br>
      <form className="loginForm" onSubmit={handleSubmit}>
            <span className="loginTitle">CONTEST WINNER FORM</span>
              <label>Email</label>
              <input
                className="loginInput"
                type="text"
                placeholder="Enter Winner's email..."
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.email}</p>
              <button className="loginButton">Submit</button>
            </form>
      <Table1 />
    </div>
  );
};

export default MainDash1;
