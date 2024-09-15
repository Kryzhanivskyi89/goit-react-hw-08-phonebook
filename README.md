# Phonebook Application

## Overview

This project is a phonebook application that allows users to store, manage, and
interact with their contacts securely and efficiently. The application features
a robust backend integrated with MongoDB, a dynamic frontend using React and
Redux, and has been successfully deployed on Render and Netlify.

## Key Features

1. **JWT Authorization System**

   - Implemented secure user authentication using JSON Web Tokens (JWT).
   - Ensures protected access to user data, enhancing overall application
     security.

2. **CRUD Operations for Contacts**

   - Developed a complete set of CRUD (Create, Read, Update, Delete) operations.
   - Provides users with the ability to efficiently manage their contacts.

3. **MongoDB Integration**

   - Integrated MongoDB for reliable data storage and processing.
   - Ensures the application is scalable and robust.

4. **Frontend Authorization with Redux**

   - Implemented a seamless authentication system on the frontend using Redux.
   - Ensures consistent state management and secure data access.

5. **Dynamic Contact Management Interface**

   - Developed an intuitive and user-friendly interface for managing contacts.
   - Enhances the user experience with a responsive and easy-to-navigate UI.

6. **Error Handling**

   - Implemented effective error handling mechanisms.
   - Significantly improves user experience and application stability.

7. **Deployment on Render and Netlify**

   - Successfully deployed both backend and frontend to Render and Netlify.
   - Ensures the application runs smoothly in a production environment.

8. **Environment Configuration and Troubleshooting**

   - Resolved authorization issues on the hosting environment.
   - Ensured stable operation of the authentication system.

9. **Database Connectivity Issue Resolution**

   - Fixed issues with incorrect database connections.
   - Ensured proper data storage and retrieval.

10. **Form Input Debugging**

- Resolved mismatches between form input names and backend parameters.
- Ensured correct addition of new contacts.

## Technologies Used

- **Frontend:** React, Redux
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Security:** JWT (JSON Web Tokens)
- **Deployment:** Render, Netlify

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/your-username/phonebook-application.git>
   ```
1. Navigate to the project directory:
    
    ```bash
    cd phonebook-application
    
    ```
    
2. Install the dependencies for both frontend and backend:
    
    ```bash
    npm install
    cd client
    npm install
    
    ```
    
3. Create a `.env` file in the root directory and add your environment variables:
    
    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    
    ```
    
4. Start the backend server:
    
    ```bash
    npm run server
    
    ```
    
5. Start the frontend development server:
    
    ```bash
    cd client
    npm start
    
    ```
    

## Usage

- Navigate to `http://localhost:3000` to interact with the application.
- Use the authentication system to securely log in and manage contacts.

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.


## Conclusion

This project was a valuable opportunity to enhance my skills in web application development, database integration, deployment, and debugging. It allowed me to develop real-world problem-solving abilities and further my technical knowledge, making me well-prepared for new challenges in web development.

If you're interested in collaborating or have any questions, feel free to reach out!