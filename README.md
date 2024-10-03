# Movies GPT Backend

This is the backend for the **Movies GPT** project built using **Node.js**, **Express**, and **MongoDB**. It handles user authentication (signup and login), password encryption using **bcrypt**, and token-based authentication using **JWT**. The project also includes **Swagger** for API documentation.

## Installation

Follow these steps to install and run the project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/movies-gpt-backend.git
    cd movies-gpt-backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory and add the following variables:

    ```
    MONGO_URI=your-mongo-connection-uri
    JWT_SECRET=your-secret-key
    ```

4. **Start the server**:

    ```bash
    npm start
    ```

The app will be running on `http://localhost:3000`.

## Features

- **User Authentication**: Secure signup and login functionality with password hashing.
- **JWT-based Authentication**: JSON Web Tokens are used for authentication and authorization.
- **API Documentation**: Integrated with Swagger to provide detailed API documentation.

## Project Structure

The project is organized as follows:

```bash
movies-gpt-backend/
├── models/
│   └── User.model.js          # Mongoose model for User
├── middleware/
│   └── Authentication.middleware.js  # JWT-based authentication logic
├── controllers/
│   └── AuthController.js       # Logic for user signup and login
├── routes/
│   └── auth.routes.js          # API routes for authentication
├── bin/
│   └── www                     # Server entry point
├── swagger.js                  # Swagger setup for API documentation
├── .env                        # Environment variables file (not included in repo)
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
