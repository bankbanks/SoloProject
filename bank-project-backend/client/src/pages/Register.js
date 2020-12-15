import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from '../config/axios';

function Register(props) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit =(e)=>{
      e.preventDefault()
      console.log('submiting')
    axios.post("/users/register", {
        firstname:firstName,
        lastname:lastName,
        email,
        password,
        
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="register-form">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button
         
          // formValue={formValue} setFormValue={setFormValue}
          className="btn btn-primary btn-block"
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="http://localhost:3000/login">sign in?</a>
        </p>
      </div>
    </form>
  );
}

export default withRouter(Register);
