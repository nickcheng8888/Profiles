import React from "react";
import useForm from "./useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"



function NewForm(){
  const { handleChangeText, handleChangeNumbers, handleFocus, handleSubmit, addUserID, values, errors } = useForm();
  return (
    <div className="container">
      <div className="box justify-content-center align-items-center">
        <div className="formDiv">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              id="firstName"
              maxLength= "16"
              data-testid="firstName"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChangeText}
              onFocus={handleFocus}
              isValid={errors.cnumber}
            />
          </Form.Group>
          <Form.Group>
          <Form.Control
              type="text"
              id="lastName"
              maxLength= "16"
              data-testid="lastName"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChangeText}
              onFocus={handleFocus}
              isValid={errors.cnumber}
            />
           </Form.Group>
           <Form.Group>
          <Form.Control
              type="mobileNumber"
              id="mobileNumber"
              maxLength= "10"
              data-testid="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={values.lastName}
              onChange={handleChangeNumbers}
              onFocus={handleFocus}
              isValid={errors.cnumber}
            />
           </Form.Group>
           <Form.Group>
          <Form.Control
              type="email"
              id="email"
              data-testid="email"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChangeText}
              onFocus={handleFocus}
              isValid={errors.cnumber}
            />
           </Form.Group>
          <Button
            size={"block"}
            data-testid="saveChanges"
            id="saveChanges"
            type="submit"
          >
            Save Changes
          </Button>
        </Form>
        </div>
        <Alert
          id="alertMessage"
          data-testid="alertMessage"
          variant={errors.variant}
          show={errors.show}
        >
          {errors.message}
        </Alert>{" "}
      </div>
    </div>
  );

};

export default NewForm;
