import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "../config/axios";
import Status from "../components/Notification/Status";
import Top from "../components/Header/top";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        props.history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>

    <Top/>
    <form onSubmit={onSubmit}>
      <div className="login-from">
        <h3>Sign In</h3>

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

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
    <div style={{height:"100px"}}>

    </div>
              </div>
  );
}

export default withRouter(Login);
