import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

function Top() {
  return (
    <Jumbotron className="home">
      <div style ={{
        display:"flex",
        justifyContent:"flex-end"
    }}>
        <Button href="#"  variant="outline-primary" >Home</Button> 
        <Button href= "/register"style={{marginLeft:"20px"}} type="submit"  variant="outline-primary">become a tutor</Button>{" "}
        
      </div>
      <h1 style={{color:"white"}}>Tutor</h1>
      <p>find you tutor below</p>
    </Jumbotron>
  );
}

export default Top;
