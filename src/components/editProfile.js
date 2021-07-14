import React from "react";
import useFormAsync from "./useFormAsync";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form"
import "bootstrap/dist/css/bootstrap.min.css";



function NewForm(){
  const { handleChangeText, handleChangeNumbers, handleChangeUpload, handleFocus, handleSubmit, toDisplayProfile, values, errors } = useFormAsync();
  const register = useForm();
  return (
  <div className="Card">
    <div className='upper-container'>
    </div>
    
    <div className="lower-container">
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
          value={values.mobileNumber}
          onChange={handleChangeNumbers}
          onFocus={handleFocus}
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
        />
        </Form.Group>
        <input type ="file" name="picture" onChange={handleChangeUpload}/>
      <Button
        onClick={handleSubmit}
        data-testid="saveChanges"
        id="saveChanges"
        type="submit"
      >
        Save Changes
      </Button>
      </Form>
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
