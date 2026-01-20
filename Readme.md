🚀 MERN Stack Portfolio
A full-stack, responsive portfolio website built to showcase my frontend skills, projects, and real-world development experience.

This project is a dynamic MERN stack portfolio created to present my work as a Frontend-focused Web Developer.
Unlike a static portfolio, all project data and contact form submissions are managed using MongoDB, making the application scalable and easy to update.

✨ Features

Frontend + Backend Separation
Clean architecture with React on the frontend and Node.js + Express on the backend.

Dynamic Projects & Content
Project data is fetched from MongoDB using REST APIs.

RESTful API Integration
Smooth communication between frontend and backend using Axios.

Responsive UI
Mobile-first, modern UI built with Tailwind CSS.

Working Contact Form
User messages are handled by backend APIs and stored in the database.

🗂️ Project Structure
portfolio-main/
│
├── Server/        # Backend (Node.js, Express, MongoDB)
│
├── Client/        # Frontend (React, Tailwind CSS)

🛠️ Tech Stack
🔹 Frontend

React.js

React Router

Axios

Tailwind CSS

🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

CORS

⚙️ Installation & Setup
✅ Prerequisites

Node.js (latest version)

npm or yarn

📌 Step 1: Clone the Repository
git clone https://github.com/harshit-1318/portfolio-main.git

📌 Step 2: Backend Setup
cd portfolio-main/Server
npm install


Create a .env file inside the Server folder and add the environment variables (see below).

Start backend server:

node server.js

📌 Step 3: Frontend Setup
cd ../Client
npm install
npm run dev

🌐 Open in Browser
http://localhost:5173

🔐 Environment Variables
🖥️ Backend .env
MONGO_DB=your_mongodb_connection_string
MONGO_SECRET_KEY=your_secret_key

SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
SENDER_MAIL=your_email

FRONTEND_URL=http://localhost:5173

🌐 Frontend .env
BACKEND_URL=http://localhost:5000

🚀 Deployment

Frontend: Vercel

Backend: Render

Project is deployed and connected with live APIs and database.

🤝 Contributing

Contributions are always welcome 🙌

Fork the repository

Create your feature branch

git checkout -b feature/new-feature


Commit your changes

Push and create a Pull Request

🔗 Project Links

🔹 GitHub Repository
https://github.com/harshit-1318/portfolio-main

🔹 Live Project
https://portfolio-eta-inky-70.vercel.app/

👤 Author

Harshit Kumar

GitHub: https://github.com/harshit-1318

LinkedIn: https://www.linkedin.com/in/harshit-kumar-155469193
