import { useAccordionToggle } from "react-bootstrap";
import Push from "./Push";

export default function validateInfo(values, setValues) {
    let errors = {};
    errors.show = true;
    errors.variant = "danger";
    errors.message = "An unknown error occured. Please try again later"
    errors.fname = false;
    errors.lname = false;
    errors.mobileNumber = false;
    errors.email = false;

    //First name
    if (values.firstName === null || !values.firstName.trim()) {
        errors.message = "First name  is incomplete";
    } else if (!/^[a-zA-Z]*$/.test(values.firstName)) {
        errors.message = "First name: Only alphabetical characters allowed"
    } else {
        errors.fname = true;
    }

    //Last name
    if (values.lastName === null || !values.lastName.trim()) {
        errors.message = "Last name  is incomplete";
    } else if (!/^[a-zA-Z]*$/.test(values.lastName)) {
        errors.message = "Last name: Only alphabetical characters allowed"
    } else {
        errors.lname = true;
    }

    if (values.mobileNumber === null || !values.email.trim()) {
        errors.message = "Mobile number is incomplete";
    } else if (!/[0-9\b]+$/.test(values.mobileNumber)) {
        errors.message = "Phone Number: Only numbers allowed"
    } else {
        errors.mobileNumber = true;
    }

    // use email validator
    if (values.email === null || !values.email.trim()) {
        errors.message = "Email  is not complete";
    } else if (!/^.*@.*$/.test(values.email)) {
        errors.message = "Email address must contain @"
    } else {
        errors.email = true;
    }

    

    if (
    errors.fname &&
    errors.lname &&
    errors.mobileNumber &&
    errors.email
    ) {
    errors.variant = "success";
    errors.message = "Updating details...";
    Push(values);
    }

    return errors;
    }
