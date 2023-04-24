import "./login.css";
import emailjs from "emailjs-com";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
function a(otp){
  return (
    <form>
      <textarea name="name">lalith</textarea>
      <textarea name="message">{otp}</textarea>
    </form>
  )
}
export default function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    checkuser(formValues);
    console.log(formValues);
  };
  var otp = Math.floor(Math.random() * 9999) + 1000;
  const sendEmail = (e) => {
    otp = Math.floor(Math.random() * 9999) + 1000;
    const h=a(otp)
    console.log(h)
    emailjs.sendForm('gmail', 'template_q60oaah', <html>h</html>, 'K59exiF50R09rLBAC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const checkuser = async (e) => {
    const res = await axios.post("https://backend-0sjh.onrender.com/login",{
      email: formValues.email,
      password: formValues.password,
    });
    console.log(res)
    // for (let i of allusers.data) {
      if (res.data.status) {
        // console.log(i);
        localStorage.setItem("current-user", JSON.stringify(formValues));
        // sendEmail();
        
        navigate("/Home");
        // break;
      // }
    }
    else{
      alert('Wrong credentials')
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };
  
  return (
    <>
    <div className="logcir"></div>
    <div className="loginpage">
      <img className="logipic" src="https://raw.githubusercontent.com/trananhtuat/animated-login-registration/353a7bb31a0e21f6344af06868805656476d26d3/assets/undraw_creative_team_r90h.svg" alt="" />
          <Link to="/">
            <button className="homebutton">
          <i class="fa fa-home" aria-hidden="true">
            HOME
            </i></button>
          </Link>
          <div className="login">
            <div className="drop">
            <form className="loginForm" onSubmit={handleSubmit}>
            <span className="loginTitle">LOGIN</span>
              <label className="ht">Email</label>
              <input
                className="loginInput"
                type="text"
                placeholder="Enter your email..."
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p className="error">{formErrors.email}</p>
              <label className="ht">Password</label>
              <input
                className="loginInput"
                type="password"
                placeholder="Enter your password..."
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="error">{formErrors.password}</p>

              <button className="loginButton">Login</button>
            </form>
            </div>

            <Link to="/Register">
              <button className="loginRegisterButton">Register</button>
            </Link>
          </div>
          </div>
      </>
  );
}





// import "./login.css";
// import emailjs from "emailjs-com";
// import { useNavigate, Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// function a(otp){
//   return (
//     <form>
//       <textarea name="name">lalith</textarea>
//       <textarea name="message">{otp}</textarea>
//     </form>
//   )
// }
// export default function Login() {
//   const navigate = useNavigate();
//   const [formValues, setFormValues] = useState({ email: "", password: "" });
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));

//     setIsSubmit(true);
//     checkuser(formValues);
//     console.log(formValues);
//   };
//   var otp = Math.floor(Math.random() * 9999) + 1000;
//   const sendEmail = (e) => {
//     otp = Math.floor(Math.random() * 9999) + 1000;
//     const h=a(otp)
//     console.log(h)
//     emailjs.sendForm('gmail', 'template_q60oaah', <html>h</html>, 'K59exiF50R09rLBAC')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   const checkuser = async (e) => {
//     const res = await axios.post("http://localhost:5000/login",{
//       email: formValues.email,
//       password: formValues.password,
//     });
//     console.log(res)
//     // for (let i of allusers.data) {
//       if (res.data.status) {
//         // console.log(i);
//         localStorage.setItem("current-user", JSON.stringify({...formValues,accesstoken:res.data.accesstoken}));
//         // sendEmail();
        
//         navigate("/Home");
//         // break;
//       // }
//     }
//     else{
//       alert('Wrong credentials')
//     }
//   };
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required!";
//     }
//     return errors;
//   };
//   // useEffect(() => {
//   //   axios.get("http://localhost:5000/users").then((res) => {
//   //     console.log(formValues);

//   //     checkuser(formValues, res.data);
//   //   });
//   // }, []);
//   return (
//     <>
//     <div className="logcir"></div>
//     <div className="loginpage">
//       <img className="logipic" src="https://raw.githubusercontent.com/trananhtuat/animated-login-registration/353a7bb31a0e21f6344af06868805656476d26d3/assets/undraw_creative_team_r90h.svg" alt="" />
//           <Link to="/">
//             <button className="homebutton">
//           <i class="fa fa-home" aria-hidden="true">
//             HOME
//             </i></button>
//           </Link>
//           <div className="login">
//             <div className="drop">
//             <form className="loginForm" onSubmit={handleSubmit}>
//             <span className="loginTitle">LOGIN</span>
//               <label>Email</label>
//               <input
//                 className="loginInput"
//                 type="text"
//                 placeholder="Enter your email..."
//                 name="email"
//                 value={formValues.email}
//                 onChange={handleChange}
//               />
//               <p className="error">{formErrors.email}</p>
//               <label>Password</label>
//               <input
//                 className="loginInput"
//                 type="password"
//                 placeholder="Enter your password..."
//                 name="password"
//                 value={formValues.password}
//                 onChange={handleChange}
//               />
//               <p className="error">{formErrors.password}</p>

//               <button className="loginButton">Login</button>
//             </form>
//             </div>

//             <Link to="/Register">
//               <button className="loginRegisterButton">Register</button>
//             </Link>
//           </div>
//           </div>
//       </>
//   );
// }




