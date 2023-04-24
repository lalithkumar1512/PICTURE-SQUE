import React from "react";
import { useState, useEffect, Link } from "react";
import axios from "axios";
import "./admin.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Admin() {
  const [qs, setqs] = useState([]);
  const d=(id) => {
    console.log("functin called")
    try{
      axios.delete(`https://backend-0sjh.onrender.com/qs/${id}`).then((resp) => {
        let temp = qs;
        temp = qs.filter(q => q.id != id);
        setqs(temp);
      })
  } 
    catch(err){
      console.log(err.message)
    }
  }
  useEffect(() => {
    axios
      .get("https://backend-0sjh.onrender.com/qs")
      .then((res) => {
        setqs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // {
  //   "username": "chimtu",
  //   "email": "chitu@gail.com",
  //   "query": "hello",
  //   "id": 1
  // }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2kxe94t', 'template_q60oaah', form.current,'K59exiF50R09rLBAC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    
    <div className="admin">
      <div className="admintitle">

        Queries:
        {qs.map((q) => {
          return (
            <div>
                    <button className="homebutton">
          <i class="fa fa-home" aria-hidden="true"><a href="/">
             HOME</a>
            </i></button>
              <div className="button">
              <h6>
                {q.query} : {q.username}
              </h6>
              <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" name="user_name" /> */}
      <label>Email</label> 
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button className="delete" type="Submit" value ="Send">Send</button>
      {/* <input type="Submit" value="Send" /> */}
    </form>
                {/* <button className="reply">Reply</button> */}
                <button className="delete" onClick={() => d(q.id)}>Delete</button>
                </div>
              
            </div>
          );
        })}
      </div>
  </div>

);
}