import React, { useState } from "react";
import { Form, Col, Button, InputGroup, Image, ProgressBar } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";
import Top from "../components/Header/top";
import axios from "../config/axios";
import "../css/font.css";
import Footer from "../components/Footer"

const schema = yup.object({
  fname: yup.string().required(),
  lname: yup.string().required(),
  email: yup.string().required(),
  subject: yup.string().required(),
  available: yup.string().required(),
  tel: yup.string().required(),
  file: yup.string().required(),
  // terms: yup.bool().required(),
});

function Tutor(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [fname, setfName] = useState("");
  const [lname, setlname] = useState("");
  const [subject, setSubject] = useState("");
  const [available, setAvailable] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [graduate, setGraduate] = useState("");
  const [detail, setDetail] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleFile = (e) => {
    console.log("handleChange");
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setLoading(true)

    reader.onloadend = () => {
      uploadImage(reader.result);
      setLoading(false)
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setLoading(false)
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submiting", imageUrl);
    axios
      .post("/tutors/", {
        fname,
        lname,
        available,
        tel,
        subject,
        email,
        detail,
        graduate,
        img: imageUrl,
        gender,
        // location,
      })
      .then((res) => {
        console.log(res);
        alert("welcome Tutor");
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const res = await axios.post("/upload", { data: base64EncodedImage });
      setImageUrl(res.data.url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Top />
      <div
        style={{
          display: "flex",
          margin: "auto",
          // marginTop:"400px",
          backgroundColor: "white",
          height: "100%",
          width: "60%",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius:"16px",
        }}
      >
        <h1 style={{ fontFamily: "Bungee Inline" }}>Tutor Profile</h1>
        <Formik validationSchema={schema} onSubmit={onSubmit}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={onSubmit} 
            
              style={{
                display: "flex",
                margin: "auto",
                // marginTop:"400px",
                backgroundColor: "white",
                height: "100%",
                width: "60%",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius:"16px",
              
              marginBottom:"100px"
            }}>


              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={fname}
                    onChange={(e) => setfName(e.target.value)}
                    isValid={touched.fname && !errors.fname}
                    placeHolder="First name"
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={lname}
                    onChange={(e) => setlname(e.target.value)}
                    isValid={touched.lastName && !errors.lname}
                    placeHolder="Last name"
                  />

                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>email</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="email"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>




              <Form.Row>
                <Form.Group as={Col} md="4" controlId="formGridState">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control onChange={(e) => setSubject(e.target.value)} value={subject} as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Math</option>
                    <option>Science</option>
                    <option>Programming</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md="4" >
                  <Form.Label>available</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="available"
                    name="available"
                    value={available}
                    onChange={(e) => setAvailable(e.target.value)}
                    isInvalid={!!errors.available}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.available}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>tel</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="tel"
                    name="tel"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    isInvalid={!!errors.tel}
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.tel}
                  </Form.Control.Feedback>
                </Form.Group>
                  </Form.Row>
                  <Form.Row>

                
                  <Form.Group as={Col} md="4" controlId="formGridState">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control onChange={(e) => setGender(e.target.value)} value={gender} as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>


                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Graduate</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="graduate"
                    name="detail"
                    value={graduate}
                    onChange={(e) => setGraduate(e.target.detail)}
                    isInvalid={!!errors.detail}
                    />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.detail}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <input type="file" onChange={handleFile} />

              <Image
                style={{
                  width: "200px",
                  height: "200px",
                }}
                src={file}
                roundedCircle
              />
              <div style={{ marginBottom:"20px"}}>

          <ProgressBar animated now={45} />
              </div>
              <Button disabled={loading} type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>
        
      </div>
      <Footer/>
    </div>
  );
}
export default withRouter(Tutor);
