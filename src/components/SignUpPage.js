
import Swal from 'sweetalert2'
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  console.log(formData);
  
  //const [message, setMessage] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  //const navigate = useNavigate();

  // function handleClick() {
  //   navigate.push("/");
  // }

  function handleMessage() {  
      Swal.fire('Your Registration was success!!')
    }


    return (
    
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="signup-heading">Sign Up</h2>
          <div className="signup-name-container">
            <label className="signup-label">
               Name
              <input
                className="signup-input"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="signup-label">
            phone
            <input
              className="signup-input"
              type="phone"
              name="phone"
              value={formData.phone}
              placeholder="Enter Your Phone Number"
              onChange={handleChange}
            />
          </label>
          <label className="signup-label">
            Email
            <input
              className="signup-input"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
          </label>
          <label className="signup-label">
            Password
            <input
              className="signup-input"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
          </label>
          <button className="signup-button" type="submit" onClick={handleMessage}>
            Sign Up
          </button>
          <br />
          <a href="/">Already SignedUp ? Login</a> <br />
          {/* {message ? <p>Your registration was successfull !!</p> : ""} */}
          {/* <button className="signup-button" onClick={handleClick}>
            Login
          </button> */}
        </form>
      </div>
    );
  }

  


export default SignUpPage;