# **MERN Stack Portfolio**
A full-stack, responsive portfolio website to showcase my skills and projects, built with the MERN stack.
This project is a dynamic, full-stack portfolio designed to highlight my work as a developer. Unlike a static site, this application uses a MongoDB database to manage and serve project and contact information, making it easy to update without touching the frontend code.

✨ Features

Full-Stack Architecture:

Separated frontend (React) and backend (Node.js / Express) for a modular and scalable application.

Dynamic Content:

Project details and related information are stored in MongoDB, allowing easy updates without code changes.

RESTful API:

A well-structured API serves data from the database to the React frontend.

Responsive Design:

Clean, modern UI that adapts seamlessly to different screen sizes.

Contact Form:

Form submissions are handled by the backend and securely saved to the database.

Project Structure

The project is divided into two main directories:

Server:

Contains server-side code including API routes, controllers, models, and configuration files.

Client:

Contains client-side code built with React.js, including components, pages, and routing logic.

🚀 Tech Stack

Frontend


React – JavaScript library for building user interfaces

React Router – Client-side routing for single-page applications

Axios – Promise-based HTTP client for API communication

Tailwind CSS – Utility-first CSS framework for styling

Backend

Node.js & Express.js – Server environment and backend framework

MongoDB – NoSQL database for data storage

Mongoose – MongoDB object modeling tool

CORS – Middleware to enable cross-origin resource sharing

🛠️ Installation Guide

Prerequisites

Ensure you have the following installed:

Node.js (latest stable version)

npm or yarn

To set up the project locally, follow these steps:

1. Clone the Repository
git clone https://github.com/harshit-1318/portfolio-main.git

2. Backend Setup

Navigate to the backend directory:

cd portfolio-main/Server


Install required dependencies:

npm install


Create a .env file in the Server directory and configure the required environment variables.

Start the backend server:

node server.js

3. Frontend Setup

Navigate to the frontend directory:

cd ../Client


Install required dependencies:

npm install


Start the frontend server:

npm run dev

4. Access the Application

Open your browser and navigate to:

http://localhost:5173

Environment Variables
Backend .env
MONGO_DB=your_mongodb_connection_string
MONGO_SECRET_KEY=your_secret_key

SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
SENDER_MAIL=your_email

FRONTEND_URL=http://localhost:5173

Frontend .env
BACKEND_URL=http://localhost:5000

🤝 Contributing

Contributions make the open-source community a great place to learn and grow.
Any contributions are greatly appreciated.

Fork the project

Create your feature branch

git checkout -b feature/AmazingFeature


Commit your changes

git commit -m "Add some AmazingFeature"


Push to the branch and open a Pull Request

🚀 Deployment

Frontend is deployed on Vercel

Backend is deployed on Render

Update vite.config.js if required for alias or build configuration

🔗 Links

GitHub Repository:
https://github.com/harshit-1318/portfolio-main

Live Project:
https://portfolio-eta-inky-70.vercel.app/

GitHub Profile:
https://github.com/harshit-1318

LinkedIn:
https://www.linkedin.com/in/harshit-kumar-155469193
