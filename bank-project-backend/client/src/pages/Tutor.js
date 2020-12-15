import React, { useState } from "react";
import {
  Form,
  Col,
  Button,
  InputGroup,
  Image,
  Row,
  Container,
} from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  subject: yup.string().required(),
  available: yup.string().required(),
  tel: yup.string().required(),
  file: yup.string().required(),
  // terms: yup.bool().required(),
});

function Tutor(props) {
  const [file, setFile] = useState(null);

  const handleFile = (event) => {
    console.log("handleChange");
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div style={{
      display:"flex",
      height:"500px",
      width:"500px",
      flexDirection:"column",
      justifyContent:"center",
      marginLeft:"350px"
    }}>
      <h1>Tutor Profile</h1>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "Mark",
          lastName: "Otto",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik101">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback tooltip>
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik102">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback tooltip>
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikemail2">
                <Form.Label>email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik103">
                <Form.Label>subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  isInvalid={!!errors.subject}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.subject}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik104">
                <Form.Label>available</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="available"
                  name="available"
                  value={values.available}
                  onChange={handleChange}
                  isInvalid={!!errors.available}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.available}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik105">
                <Form.Label>tel</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="tel"
                  name="tel"
                  value={values.tel}
                  onChange={handleChange}
                  isInvalid={!!errors.tel}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.tel}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <input type="file" onChange={handleFile} />
            {/* <img src={file} /> */}

            <Image
              style={{
                width: "200px",
                height: "200px",
              }}
              src={file}
              roundedCircle
            />

            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default withRouter(Tutor);
