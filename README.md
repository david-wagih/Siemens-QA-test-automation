# QA Test Automation

## Project Description

1. UI testing for the [My Store](http://automationpractice.multiformis.com/index.php) using [Nightwatch.js](https://nightwatchjs.org/), focusing on two main parts:

- the Search for a dress Feature
- the Contact Us Form

2. API testing for the [mock-user-auth-npm](https://www.npmjs.com/package/mock-user-auth) using [supertest](https://www.npmjs.com/package/supertest) and [jest](https://jestjs.io/), focusing on:

- Testing all the endpoints routes
- using valid / invalid request body
- using valid / invalid authorization

3. Setting up CI/CD pipeline using [CircleCI](https://circleci.com/).

## Project Structure

1. UI

   - ui_tests: contains the UI tests
   - tests_output: contains the UI test reports

2. API

   - contains the API tests
   - jest-stare: contains the API test reports

3. .circleci
   - contains the CircleCI config file for CI/CD

## Table of contents

- Requirements
- Installation And Running

## Requirements

This module requires the following modules/libraries:

- [Node.js](https://nodejs.org/en/)
- [Nightwatch.js](https://nightwatchjs.org/)
- [supertest](https://www.npmjs.com/package/supertest)
- [jest](https://jestjs.io/)
- [CircleCI](https://circleci.com/)
- [mock-user-auth-npm](https://www.npmjs.com/package/mock-user-auth)
- [jest-stare-npm](https://www.npmjs.com/package/jest-stare)

## Installation And Running

To install the project, run the following commands:

- Clone the repo `git clone https://github.com/david-wagih/Siemens-QA-test-automation.git`
- Install the dependencies `cd Siemens-QA-test-automation && npm install`
- Run the UI tests `npm run test:ui`
- Run the API tests `npm run test:api`

## View the test reports

- UI test report: `./UI/tests_output/nightwatch-html-report/index.html`
  - Example: [UI test report](./reports-examples/UI-Report.png)
- API test report: `./API/jest-stare/index.html`
  - Example: [API test report](./reports-examples/API-Report.png)

### Circle CI Status

[![CircleCI](https://circleci.com/gh/david-wagih/Siemens-QA-test-automation.svg?style=svg)](https://circleci.com/gh/david-wagih/Siemens-QA-test-automation)
