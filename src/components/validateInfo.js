import { useAccordionToggle } from "react-bootstrap";

export default function validateInfo(values, setValues) {
    let errors = {};
    errors.show = true;
    errors.variant = "danger";
    errors.message = "An unknown error occured. Please try again later"
    errors.fname = false;
    errors.lname = false;
    errors.mnumber = false;
    errors.email = false;

    //First name
    console.log(values.firstName);
    if (!/^[a-zA-Z]*$/.test(values.firstName)) {
        errors.message = "Alphabet only"
    } else {
        errors.fname = true;
    }

    // if (values.lastName === null || !values.lastName.trim()) {
    //     errors.message = "Last name  is not complete";
    // } else if (!/^[a-zA-Z]*$/.test(values.lastName)) {
    //     errors.message = "Alphabet only"
    // } else {
    //     errors.lname = true;
    // }

    // // use email validator
    // if (values.email === null || !values.email.trim()) {
    //     errors.message = "Email  is not complete";
    // } else if (!/^.*@.*$/.test(values.email)) {
    //     errors.message = "Email address must contain @"
    // } else {
    //     errors.email = true;
    // }

    // if (values.mobileNumber === null || !values.email.trim()) {
    //     errors.message = "Email  is not complete";
    // } else if (!/[0-9\b]+$/.test(values.mobileNumber)) {
    //     errors.message = "Phone Number must only contain numbers"
    // } else {
    //     errors.number = true;
    // }

    if (
        errors.fname
    // errors.fname &&
    // errors.lname &&
    // errors.mobileNumber &&
    // errors.email
    ) {
    errors.variant = "success";
    errors.message = "Updating details...";
    // const hash = generateCipher(values, values.ccvv);
    // console.log(hash.toString());
    // Push(hash);
    }

    return errors;
    }
