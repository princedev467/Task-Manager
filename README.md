# 🚀 Task Manager

A modern full-stack Task Management Application built with the MERN Stack that helps users organize, track, and manage their tasks efficiently.

![GitHub stars](https://img.shields.io/github/stars/princedev467/Task-Manager?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/princedev467/Task-Manager?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/princedev467/Task-Manager?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 📖 Overview

Task Manager is a full-stack web application designed to help users manage their daily tasks in a simple and productive way. Users can create, update, delete, search, filter, and organize tasks based on priority and status.

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Forgot Password
- Profile Management
- Secure Password Hashing with Bcrypt

### 📋 Task Management
- Create Tasks
- Update Tasks
- Delete Tasks
- View All Tasks
- Search Tasks
- Filter Tasks
- Sort Tasks

### 📊 Task Status
- Pending
- In Progress
- Completed

### 🎯 Priority Levels
- Low Priority
- Medium Priority
- High Priority

### 🎨 User Experience
- Responsive Design
- Modern UI
- Fast Performance
- User-Friendly Dashboard

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- RTK Query
- React Router DOM
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt.js

### Tools
- Git
- GitHub
- Postman

---

## 📂 Project Structure

```bash
Task-Manager/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── assets/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
│
└── README.md
```

---

## 📸 Screenshots

### Login Page
> Add your screenshot here

### Dashboard
> Add your screenshot here

### Task Management
> Add your screenshot here

### Profile Page
> Add your screenshot here

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/princedev467/Task-Manager.git
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| POST | /api/auth/forgot-password | Forgot Password |
| PUT | /api/auth/profile | Update Profile |

### Tasks

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/task | Get All Tasks |
| POST | /api/task | Create Task |
| PUT | /api/task/:id | Update Task |
| DELETE | /api/task/:id | Delete Task |

---

## 🎯 Future Enhancements

- Drag & Drop Tasks
- Task Categories
- Dark Mode
- Team Collaboration
- Email Notifications
- Task Reminders
- Calendar Integration

---

## 👨‍💻 Author

### Prince Movaliya

- GitHub: https://github.com/princedev467

---

## ⭐ Support

If you found this project useful:

- Give it a Star ⭐
- Fork the Repository 🍴
- Share it with others 🚀

---

## 📜 License

This project is licensed under the MIT License.

---

### 🌟 Thank You For Visiting This Repository!
