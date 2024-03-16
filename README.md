# DataValidation
# Data Validation in HTML and JavaScript using Regex and REST API

In this task, we aim to create a web application consisting of two pages. The first page will feature a form for data input, and the second page will provide a summary of the entered data. The application will include validation for input data. If users input incorrect data, fields with erroneous values will be highlighted as errors, and users will be informed about the incorrectness in the respective field.

## Input Fields of the Form:

- **First Name and Last Name:** Can only contain characters of the English alphabet and spaces.
- **Email:** Must be a valid email address.
- **Date of Birth:** Must be over 18 years old.
- **Country:** A select field with options loaded from [Rest Countries API](https://restcountries.com/v2/all).
- **Button to submit the form:** Users cannot proceed if all fields are not correctly filled.
  
_All fields are required._

## Summary

The summary page will simply display:

- **First Name and Last Name:** John Doe
- **Email:** john@doe.com
- **Date of Birth:** 30-3-1999
- **Country:** Slovakia
- **Currency:** EUR

Currency is one of the data provided by the API [Rest Countries API](https://restcountries.com/v2/all).
