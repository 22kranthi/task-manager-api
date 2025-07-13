# 📝 Task Manager API

A simple RESTful Task Manager API built with **Node.js**, **Express**, and **MongoDB**, following the **MVC architecture**.

---

## 📁 Project Structure

```
taskmanagerapi/
├── controllers/
│   └── taskController.js
├── model/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── server.js
├── package.json
└── README.md
```

---

## 🚀 Features

- Create a task
- Read all tasks
- Read a task by ID
- Update a task by ID
- Delete a task by ID
- Clean MVC structure with Express routing

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Nodemon (for development)

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/22kranthi/task-manager-api.git
cd taskmanagerapi
```

2. **Install dependencies**
```bash
npm install
```

3. **Start MongoDB**
```bash
mongod
```

4. **Run the server (in dev mode)**
```bash
npm run dev
```

---

## 📬 API Endpoints

| Method | Endpoint      | Description          |
|--------|---------------|----------------------|
| GET    | `/tasks`      | Get all tasks        |
| GET    | `/tasks/:id`  | Get task by ID       |
| POST   | `/tasks`      | Create new task      |
| PUT    | `/tasks/:id`  | Update task by ID    |
| DELETE | `/tasks/:id`  | Delete task by ID    |

---

## 📄 Sample JSON for POST/PUT

```json
{
  "title": "Learn Express",
  "description": "Understand routing, middleware, and MVC",
  "completed": false
}
```

---

## 👨‍💻 Author

**Kranthi Kumar Sabavat**

---

## 📝 License

This project is open-source.