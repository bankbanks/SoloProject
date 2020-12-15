import React from "react";
import { Button, Form, FormControl, Jumbotron, Nav, Navbar, Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Logo from "../images/500_F_265192450_G3FOyZ6nygZg4LqQAQ1Q0x3NJSvyVAjc.jpg";
import "../css/home.css"
import Top from "../components/Header/top"

function Home(props) {
  return (
    <div style={{ height: "100%" }}>
      <Top/>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <img
          style={{
            width: "100px",
            height: "100px",
          }}
          src={Logo}
          alt="App log"
        />
        <h1 style={{}}>Tutor information</h1>
      </div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Science</Nav.Link>
          <Nav.Link href="#features">Math</Nav.Link>
          <Nav.Link href="#pricing">Programing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="search" className="mr-sm-2" />
          <Button variant="outline-info">search</Button>
        </Form>
      </Navbar>
      <div>
        <Table striped bordered hover variant="dark">
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
        </Table>
      </div>
    </div>
  );
}

export default withRouter(Home);
