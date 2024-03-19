# Data Validation in HTML and JavaScript using Regex and REST API

In this task, we aim to create a web application consisting of two pages. The first page will feature a form for data input, and the second page will provide a summary of the entered data. The application will include validation for input data. If users input incorrect data, fields with erroneous values will be highlighted as errors, and users will be informed about the incorrectness in the respective field.

## Input Fields of the Form:
1. **First Name and Last Name:** Can only contain characters of the English alphabet and spaces.
2. **Email:** Must be a valid email address.
3. **Date of Birth:** Must be over 18 years old.
4. **Country:** A select field with options loaded from Rest Countries API.
5. **Button to submit the form:** Users cannot proceed if all fields are not correctly filled. All fields are required.

## Summary
The summary page will simply display:

- **First Name and Last Name:** John Doe
- **Email:** john@doe.com
- **Date of Birth:** 30-3-1999
- **Country:** Slovakia
- **Currency:** EUR

Currency is one of the data provided by the Rest Countries API.

### Notes about Using Node.js and Angular:
- **Node.js:** If you're working with Node.js, you can use it to handle server-side operations, such as processing form submissions and interacting with databases.
- **Angular:** Angular can be used to build the frontend of the application, including the form for data input and the summary page for displaying the entered data. Angular's powerful features, such as data binding and form validation, can be utilized to create a dynamic and interactive user experience. Additionally, Angular's HttpClient module can be used to make HTTP requests to the Rest Countries API for fetching country data.


# AngularDataValidation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
