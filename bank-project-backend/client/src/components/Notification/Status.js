import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function Status() {
    const [show, setShow] = useState(true);
    
  return (
    <>
    <Alert show={show} variant="success">
      <Alert.Heading>How's it going?!</Alert.Heading>
      <p>
       Login Complete :D
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
          OK
        </Button>
      </div>
    </Alert>

    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
  </>
   
  );
}

// export default Status;
