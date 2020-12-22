import React,{useContext, useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Jumbotron,
  Nav,
  Navbar,
  Table,
} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Logo from "../images/500_F_265192450_G3FOyZ6nygZg4LqQAQ1Q0x3NJSvyVAjc.jpg";
import "../css/home.css";
import Top from "../components/Header/top";
import TutorList from "../components/TutorList/TutorList";
import axios from "../config/axios";
import SubjectContext from "../context/SubjectContext";

function Home(props) {

  const [data, setData] = useState([]);
  const {selectSubject , setSelectSubject} = useContext(SubjectContext)

  const onSearch = (value) => {
    console.log("searching", value);
    axios.get(`/tutors/tutor?name=${value}`).then((res) => {
      console.log("res.data", res.data);
      setData(res.data);
    });
  };

const handleSelectSubject =(e)=>{
  console.log(e.target.innerText)
  setSelectSubject(e.target.innerText)
}




  return (
    <div style={{ height: "100%" }}>
      <Top />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <div
            
          >
            <h1>Tutor information</h1>
          </div>
          <div>
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              src={Logo}
              alt="App log"
            />
          </div>
        </div>
      </div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onSearch={(value) => onSearch(value)} href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={handleSelectSubject} >Science</Nav.Link>
          <Nav.Link onClick={handleSelectSubject}>Math</Nav.Link>
          <Nav.Link onClick={handleSelectSubject}>Programming</Nav.Link>
        </Nav>
        <Form inline>
        </Form>
      </Navbar>
      <div>
        <TutorList />
        {/* <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Tel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>English</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table> */}
      </div>
    </div>
  );
}

export default withRouter(Home);
