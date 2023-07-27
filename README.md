## Objective

Create a basic web application using React/Next.js and GraphQL that mimics a contacts list and contact card like the ones found in your phone.

## Expectations

- Users should be able to view/scroll their contact list
- Users should be able to add new contacts
- If a user clicks on a contact, they should be routed to the specific contact’s page.
- Users should be able to view said contacts details and perform edits to the information
- Users should be able to remove contacts from their list

## Evaluation Criteria

- Good use of React / Next.js
- Proper implantation of CRUD functionality
- Code readability and organization

### Installation

- Clone the repo and run `npm install` to install dependencies
- Add the `aws-exports.js` file provided in the email to the src folder
- Run `npm run dev` to start the application
- Navigate to `http://localhost:3000/` to view the application

## Backend

The backend is using AWS AppSync and DynamoDB and has already been setup. The API provides 2 queries and 3 mutation. You can find the schema in the `schema.graphql` file found in the **graphql** folder for reference.

### Apollo Client

We are using Apollo Client to connect to our API and the `apolloConfig.tsx` has already been setup for you and will be ready to use once you add the `aws-exports.js` file provided in the email to the src folder.

### Styling

SASS is already setup for you. You can find the styles in the **styles** folder and ready for your customization.

### Deployment

- Deploy your application to a hosting service of your choice (AWS, Heroku, Netlify, etc.)
- Add the details in `aws-exports.js` as environment variables to your hosting service.
- Update the `apolloConfig.tsx` file to use the environment variables instead of the `aws-exports.js` file.

### Deliverables

- A link to a public repo with your code
- A link to a live demo of your application
- A short write up on your thought process and any challenges you faced
