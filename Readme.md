MERN Stack Portfolio

A full-stack, responsive portfolio application developed to showcase my frontend expertise, projects, and practical experience in modern web development.

This portfolio is built using the MERN stack and follows a clean, scalable architecture. Unlike a static portfolio, all project data and contact form submissions are managed through MongoDB and served via RESTful APIs, enabling easy updates and real-world backend integration.

Features

Separation of Concerns
Frontend and backend are developed as independent modules using React and Node.js with Express.

Dynamic Data Management
Project information and contact messages are stored in MongoDB and fetched dynamically through APIs.

RESTful API Architecture
Well-structured APIs ensure smooth communication between the client and server.

Responsive User Interface
Mobile-first, modern UI implemented using Tailwind CSS.

Contact Form Integration
User inquiries are securely handled by the backend and persisted in the database.

Project Structure
portfolio-main/
│
├── Server/        Backend (Node.js, Express, MongoDB)
│
├── Client/        Frontend (React, Tailwind CSS)

Technology Stack
Frontend

React.js

React Router

Axios

Tailwind CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

Installation and Setup
Prerequisites

Node.js (latest stable version)

npm or yarn

Step 1: Clone the Repository
git clone https://github.com/harshit-1318/portfolio-main.git

Step 2: Backend Setup
cd portfolio-main/Server
npm install


Create a .env file in the Server directory and configure the required environment variables.

Start the backend server:

node server.js

Step 3: Frontend Setup
cd ../Client
npm install
npm run dev

Application Access
http://localhost:5173

Environment Variables
Backend
MONGO_DB=your_mongodb_connection_string
MONGO_SECRET_KEY=your_secret_key

SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
SENDER_MAIL=your_email

FRONTEND_URL=http://localhost:5173

Frontend
BACKEND_URL=http://localhost:5000

Deployment

Frontend: Deployed on Vercel

Backend: Deployed on Render

The application is live, production-ready, and connected with active APIs and database services.

Contributing

Contributions are welcome and appreciated.

Fork the repository

Create a feature branch

git checkout -b feature/new-feature


Commit your changes

Push the branch and open a Pull Request

Project Links

GitHub Repository
https://github.com/harshit-1318/portfolio-main

Live Application
https://portfolio-eta-inky-70.vercel.app/

Author

Harshit Kumar
GitHub: https://github.com/harshit-1318

LinkedIn: https://www.linkedin.com/in/harshit-kumar-155469193
