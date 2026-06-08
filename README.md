# 📋 Task Manager

> A clean, intuitive, and powerful task management application to help you stay organized and productive.

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)

---

## 📸 Preview

| Light Mode | Dark Mode |
|---|---|
| ![Light Mode](https://via.placeholder.com/500x300?text=Light+Mode+Screenshot) | ![Dark Mode](https://via.placeholder.com/500x300?text=Dark+Mode+Screenshot) |

---

## ✨ Features

- **Task Creation & Management** — Create, edit, and delete tasks with ease
- **Priority Levels** — Assign low, medium, or high priority to tasks
- **Status Tracking** — Mark tasks as pending, in-progress, or completed
- **Dark / Light Mode** — Seamless theme switching with a blue-accented UI
- **Filtering & Sorting** — Filter tasks by status, priority, or due date
- **Responsive Design** — Fully optimized for desktop, tablet, and mobile
- **Persistent Storage** — Tasks are saved and restored across sessions
- **Search** — Quickly find any task by keyword

---

## 🗂️ Project Structure

```
task-manager/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── TaskCard/
│   │   ├── TaskForm/
│   │   ├── TaskList/
│   │   └── Sidebar/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   │   └── theme.css
│   └── main.jsx
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

```bash
cp .env.example .env
```

Then fill in the required values in `.env` (see [Environment Variables](#️-environment-variables)).

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**

```
http://localhost:5173
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory. Use `.env.example` as a reference:

```env
# App
VITE_APP_NAME=TaskManager
VITE_APP_URL=http://localhost:5173

# API
VITE_API_BASE_URL=http://localhost:3000/api

# Database
DATABASE_URL=your_database_connection_string

# Auth (if applicable)
JWT_SECRET=your_jwt_secret
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

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

### Example Request

```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Design new landing page",
  "description": "Create wireframes and final design",
  "priority": "high",
  "status": "pending",
  "dueDate": "2025-07-01"
}
```

### Example Response

```json
{
  "id": "abc123",
  "title": "Design new landing page",
  "description": "Create wireframes and final design",
  "priority": "high",
  "status": "pending",
  "dueDate": "2025-07-01",
  "createdAt": "2025-06-08T10:00:00.000Z"
}
```

---

## 🎨 Theme

This project uses a custom blue-accented CSS variable theme with full dark/light mode support.

```css
/* Primary Brand Color */
--primary: #3B82F6;
--primary-hover: #2563EB;

/* Accent */
--secondary: #14B8A6;
--secondary-hover: #0D9488;
```

Toggle between themes by switching the class on `:root`:

```js
document.documentElement.className = 'dark-theme';  // or 'light-theme'
```

---

## 🧪 Running Tests

```bash
# Unit tests
npm run test

# Test with coverage report
npm run test:coverage

# End-to-end tests
npm run test:e2e
```

---

## 📦 Build for Production

```bash
npm run build
```

Output is generated in the `/dist` folder. To preview the production build locally:

```bash
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a new branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m "feat: add your feature"`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

---

## 🐛 Reporting Issues

Found a bug? Please [open an issue](https://github.com/your-username/task-manager/issues/new) with:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)
- Email: your.email@example.com

---

<p align="center">Made with ❤️ and ☕ — Happy tasking!</p>
