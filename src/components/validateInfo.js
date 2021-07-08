import valid from "card-validator";
import { useAccordionToggle } from "react-bootstrap";
import Push from "./Push";
import generateCipher from "./encrypt";

export default function validateInfo(values, setValues) {
  let errors = {};
 
  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured. Please try again later"
  errors.cname = false;
  errors.cnumber = false;
  errors.ccvv = false;
  errors.cexp = false;


  //Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = "Credit card CVC is not complete";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = "Credit card CVC is invalid";
  }

  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.message = "Credit card expiration date is not complete";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "Credit card expiration date is invalid";
  }

  //Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = "Credit card number is not complete";
  } else 
  if (creditCard.isPotentiallyValid) {
    errors.cnumber = true;
    errors.message = "Credit card number is valid";

  } else {
    errors.message = "Credit card number is invalid";
  }

  //Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = "Cardholder name is not complete";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Cardholder name is invalid";
  }

  if (values.userid === null || !values.cardName.trim()) {
    errors.message = "Please login";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Cardholder name is invalid";
  }

  if (
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "Storing credit card...";
    const hash = generateCipher(values, values.ccvv);
    // console.log(hash.toString());
    Push(hash);
  }

  return errors;
}
