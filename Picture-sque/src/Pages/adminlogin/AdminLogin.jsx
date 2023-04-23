import "./adminlogin.css";
import {useNavigate, Link } from "react-router-dom";
import React,{useEffect,useState} from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
export default function AdminLogin(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({email: "", password: ""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    checkuser(formValues)
    //setFormErrors(validate(formValues));
    // setIsSubmit(true);
    // console.log(formValues);
    
  };
  const checkuser=async(e)=>{
    if(e.email==="picturesque@gmail.com"&&e.password==="picturesque"){
      navigate("/Admin")
      dispatch({type : "setTrue"})
    }
  }
//   useEffect(()=>{
//         axios.get("http://localhost:5000/users")
//         .then((res)=>{
//             console.log(formValues)
            
//             checkuser(formValues,res.data)

//        })
// },[])
    return(
      <>
      <div className="admin-page">
                <Link to="/">
            <p className="homebutton1">
          <i class="fa fa-home" aria-hidden="true">
             HOME
           </i> </p>
          </Link>
          <div className="admincir"></div>
          <div className="admincir1"></div>
          <div className="admincir2"></div>
          <div className="admincir3"></div>
          <div className="admincir4"></div>

          <img className="svgadmin" src="https://demobinarysimple.2eg.in/app/admincp/img/img-login.svg" alt="admin" />
        <div className="AdminLogin">
        <form className="adminloginForm" onSubmit={handleSubmit}>
        <span className="AdminloginTitle">Admin Login</span>

        <label>Email</label>
        <input className="adminloginInput" type="text" value = {formValues.email} onChange={handleChange} name="email"placeholder="Enter your email..." />
        <label>Password</label>
        <input className="adminloginInput" type="password"  value = {formValues.password} onChange={handleChange} name="password" placeholder="Enter your password..." />
        <button className="adminloginButton">Login</button>
      </form>
        </div>
        </div>
        </>
    )
}