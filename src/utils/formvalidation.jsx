// utils/formValidation.js

import { EMAIL_REGEX } from "./constants";

export const validateForm = (
  { fName, lName, age, gender, email, password },
  errorHandler
) => {
  // Clear any previous error
  errorHandler("");

  // Validate first name
  if (fName.length < 3) {
    errorHandler("First name should be at least 3 characters.");
    return false;
  }

  // Validate last name
  if (lName.length < 3) {
    errorHandler("Last name should be at least 3 characters.");
    return false;
  }

  // Validate age (should be a number between 18 and 100)
  if (isNaN(age) || age < 18 || age > 100) {
    errorHandler("Age should be a number between 18 and 100.");
    return false;
  }

  // Validate email
  if (email && !EMAIL_REGEX.test(email)) {
    errorHandler("Please enter a valid email address.");
    return false;
  }

  // Validate password length
  if (password && password.length < 3) {
    errorHandler("Password should be at least 3 characters.");
    return false;
  }

  // Gender selection
  if (!gender) {
    errorHandler("Gender is required.");
    return false;
  }

  return true;
};
