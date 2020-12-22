import React, { useState, useEffect, useContext } from "react";
import axios from "../../config/axios";
import Card from "react-bootstrap/Card";
import { CardColumns, Pagination } from "react-bootstrap";
import SubjectContext from '../../context/SubjectContext'

function TutorList() {

  
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const {selectSubject} = useContext(SubjectContext)


  const getAllUser = async () => {
    await axios.get(`/tutors/?pages=${page}&size=12`).then((res) => {
      let newData = [...res.data]

      if ( selectSubject ) {
        newData = newData.filter(tutor => {
          return tutor.subject === selectSubject
        })
      }
      setData(newData);
      console.log(res.data);
      console.log(res.data.length)
      // console.log(res.data.allTutor[2].name)
    });
  };

  useEffect(() => {
    getAllUser();
  }, [page,selectSubject]);

  let active = page;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item onClick={() => {setPage(number)}} key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <CardColumns>
        {data.map((tutors) => (
          <Card
            style={{
              marginTop: "20px",
              marginLeft: "20px",
              marginBottom: "20px",
              marginRight: "20px",
              width: "250px",
              height:"25%"
            }}
          >
            <Card.Img variant="top" src={tutors.img? tutors.img : "https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png"} />
            {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.accountingandfinance365.com%2F%25E0%25B8%25AD%25E0%25B8%25A2%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%2588%25E0%25B8%25B0%25E0%25B9%2580%25E0%25B8%259B%25E0%25B9%2587%25E0%25B8%2599-tutor-%25E0%25B8%259A%25E0%25B8%25B1%25E0%25B8%258D%25E0%25B8%258A%25E0%25B8%25B5-%25E0%25B8%2595%25E0%25B9%2589%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B8%2597%25E0%25B8%25B3%2F&psig=AOvVaw2FAuHOTbjon1aUAoYzaE6Z&ust=1608707086363000&sourc"/> */}
            <Card.Body>
              <Card.Title>{tutors.name}</Card.Title>
              <div style={{height:"10%"}}>

              <Card.Text>
                <p>name : {tutors.fname} {" "} {tutors.lname}</p>
                <p>subject : {tutors.subject}</p>
                <p>Tel : {tutors.tel}</p>
                <p>graduate : {tutors.graduate}</p>
              </Card.Text>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
      <Pagination style={{ display: "flex", justifyContent: "center" }}>
        {items}
      </Pagination>
    </div>
  );
}

export default TutorList;
