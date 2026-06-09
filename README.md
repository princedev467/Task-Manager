<div align="center">

```text
████████╗  █████╗  ███████╗ ██╗  ██╗
╚══██╔══╝ ██╔══██╗ ██╔════╝ ██║ ██╔╝
   ██║    ███████║ ███████╗ █████╔╝
   ██║    ██╔══██║ ╚════██║ ██╔═██╗
   ██║    ██║  ██║ ███████║ ██║  ██╗
   ╚═╝    ╚═╝  ╚═╝ ╚══════╝ ╚═╝  ╚═╝

███╗   ███╗  █████╗  ███╗   ██╗  █████╗   ██████╗  ███████╗ ██████╗
████╗ ████║ ██╔══██╗ ████╗  ██║ ██╔══██╗ ██╔════╝  ██╔════╝ ██╔══██╗
██╔████╔██║ ███████║ ██╔██╗ ██║ ███████║ ██║  ███╗ █████╗   ██████╔╝
██║╚██╔╝██║ ██╔══██║ ██║╚██╗██║ ██╔══██║ ██║   ██║ ██╔══╝   ██╔══██╗
██║ ╚═╝ ██║ ██║  ██║ ██║ ╚████║ ██║  ██║ ╚██████╔╝ ███████╗ ██║  ██║
╚═╝     ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═╝  ╚═╝  ╚═════╝  ╚══════╝ ╚═╝  ╚═╝
```

</div>

# <div align="center">📋 Task Manager</div>

<div align="center">

<h3>⚡ Modern Full Stack Task Management Application</h3>

<p><em>Organize your work. Achieve your goals. One task at a time.</em></p>

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-3B82F6?style=for-the-badge)](https://your-demo-link.vercel.app/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📖 About The Project

**Task Manager** is a modern Full Stack productivity application built using **React 19**, **Vite 7**, **Node.js**, **Express.js**, and **MongoDB**.

The platform allows users to:

- 📝 Create, edit, and delete tasks effortlessly
- 🏷️ Categorize tasks with priorities and labels
- 📅 Set due dates and track deadlines
- ✅ Monitor task progress and completion
- 🌙 Switch between beautiful Dark & Light themes

Built with a strong focus on:

- ⚡ Performance & Speed
- 🎨 Clean UI/UX with Blue Theme
- 📱 Fully Responsive Design
- 🔐 Secure Authentication
- 🚀 Seamless User Experience

---

## 🌐 Live Demo

| Platform | Link |
|---|---|
| 🖥️ Frontend | https://your-taskmanager.vercel.app/ |
| 📦 GitHub Repo | https://github.com/your-username/task-manager |

---

## ✨ Features

### 🔐 Authentication
- Secure Login & Signup
- JWT Authentication
- Protected Routes
- Role-Based Access Control

### 📋 Task Management
- Create, Edit & Delete Tasks
- Assign Priority Levels (Low / Medium / High)
- Set Due Dates & Reminders
- Drag & Drop Task Ordering

### 📊 Dashboard & Analytics
- Task Overview & Statistics
- Progress Charts
- Completed vs Pending Summary
- Recent Activity Feed

### 🔍 Filter & Search
- Filter by Status, Priority, or Date
- Search Tasks by Keyword
- Sort Ascending / Descending

### 🎨 UI/UX
- Blue-Accented Dark & Light Theme
- Fully Responsive Layout
- Smooth Animations & Transitions
- Toast Notifications & Loading States

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite 7
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- Formik + Yup

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt.js
- Dotenv

### Deployment
- Vercel (Frontend)
- Render / Railway (Backend)
- MongoDB Atlas (Database)

---

## 🏁 Getting Started

### Clone Repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### Start Development Server

```bash
# Frontend
npm run dev

# Backend
npm run start
```

### Build For Production

```bash
npm run build
```

---

## 🔑 Environment Variables

Create `.env` file in the **root** and **server** directories:

```env
# Frontend (.env)
VITE_API_BASE_URL=your_backend_url

# Backend (.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🗂️ Project Structure

```
task-manager/
├── client/                  # Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/           # Redux slices
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
│   │       └── theme.css    # Blue theme variables
│   └── vite.config.js
│
├── server/                  # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
└── README.md
```

---

## 📡 API Reference

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Get all tasks |
| `GET` | `/api/tasks/:id` | Get a single task |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update a task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login user |
| `GET` | `/api/auth/me` | Get current user |

---

## 🎨 Theme

This project features a custom **blue-accented** CSS variable theme with full dark/light mode support.

```css
/* Dark Mode */
:root.dark-theme {
  --bg-color: #0B1215;
  --primary: #3B82F6;
  --primary-hover: #2563EB;
  --secondary: #14B8A6;
}

/* Light Mode */
:root.light-theme {
  --bg-color: #F8FAFC;
  --primary: #3B82F6;
  --primary-hover: #2563EB;
  --secondary: #14B8A6;
}
```

Toggle themes via:

```js
document.documentElement.className = 'dark-theme'; // or 'light-theme'
```

---

## 🤝 Contributing

```bash
# Fork the project
# Create feature branch
git checkout -b feature/AmazingFeature

# Commit changes
git commit -m "feat: add AmazingFeature"

# Push branch
git push origin feature/AmazingFeature

# Open a Pull Request
```

---

## 👨‍💻 Author

<div align="center">

### Your Name

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-linkedin)
[![Portfolio](https://img.shields.io/badge/Portfolio-3B82F6?style=for-the-badge&logo=vercel&logoColor=white)](https://your-portfolio.com)

</div>

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

Made with ❤️ by **Your Name**

</div>
