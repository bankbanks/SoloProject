import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Status from "../Notification/Status"

function Top() {
  return (
    <Jumbotron className="home">
      <div style ={{
        display:"flex",
        justifyContent:"flex-end"
    }}>
        <Button href="/home"  variant="outline-primary" >Home</Button> 
        <Button href="/login" style={{marginLeft:"20px"}}  variant="outline-primary" >Login</Button> 
        <Button href= "/tutor" style={{marginLeft:"20px"}} type="submit"  variant="outline-primary">become a tutor</Button>{" "}
        <Button href= "/register" style={{marginLeft:"20px"}} type="submit"  variant="outline-primary">register</Button>{" "}
        
      </div>
      <h1 style={{color:"white"}}>Tutor</h1>
      <p style={{color:"white"}}>find you tutor below</p>
    </Jumbotron>
  );
}

export default Top;
