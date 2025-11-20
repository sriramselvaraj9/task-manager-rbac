# Task Manager with Role-Based Access Control

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring JWT authentication and role-based access control.

## 🚀 Features

### Authentication & Authorization
- User registration and login
- JWT token-based authentication
- Password hashing with bcrypt
- Role-based access control (User & Admin)

### Task Management
- Create, read, update, and delete tasks
- Task status tracking (pending, in-progress, completed)
- Users can only manage their own tasks
- Admins can view and delete all tasks

### User Interface
- Responsive React frontend
- Protected routes
- Search and filter functionality
- Pagination for task lists
- Clean and intuitive design

### Bonus Features
- Form validation with Joi
- Search functionality
- Status filtering
- Pagination
- Reusable components
- Error handling

## 📋 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Joi** - Data validation
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **Custom Hooks** - Reusable logic

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   JWT_SECRET=your_very_long_random_secret_key_here_make_it_secure
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   NODE_ENV=development
   ```

4. **Start MongoDB:**
   - Local: Make sure MongoDB service is running
   - Atlas: Update MONGODB_URI with your connection string

5. **Start the backend server:**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will start on `http://localhost:5173`

✅ Frontend: Live on Vercel (Global CDN)
✅ Backend: Live on Railway (Auto-scaling)
✅ Database: MongoDB Atlas (Connected!)
✅ Authentication: JWT-based security
✅ All Features: Working perfectly

## 📚 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/api/register` | Register new user | Public |
| POST | `/api/login` | User login | Public |
| GET | `/api/me` | Get current user | Private |

### Task Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/api/tasks` | Get tasks (filtered by role) | Private |
| POST | `/api/tasks` | Create new task | Private |
| GET | `/api/tasks/:id` | Get single task | Private |
| PUT | `/api/tasks/:id` | Update task | Private (Owner/Admin) |
| DELETE | `/api/tasks/:id` | Delete task | Private (Owner/Admin) |

### Query Parameters for GET /api/tasks
- `page` - Page number for pagination
- `limit` - Number of tasks per page
- `status` - Filter by task status (pending, in-progress, completed)
- `search` - Search in title and description

## 👥 User Roles

### User Role
- Create new tasks
- View only their own tasks
- Edit their own tasks
- Delete their own tasks

### Admin Role
- All user permissions
- View all tasks in the system
- Delete any task (but cannot edit other users' tasks)

## 🗂️ Project Structure

```
task-manager-rbac/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── taskController.js     # Task management logic
│   ├── middleware/
│   │   ├── auth.js              # JWT verification
│   │   └── validation.js        # Joi validation schemas
│   ├── models/
│   │   ├── User.js              # User model
│   │   └── Task.js              # Task model
│   ├── routes/
│   │   ├── auth.js              # Auth routes
│   │   └── tasks.js             # Task routes
│   ├── .env                     # Environment variables
│   ├── server.js                # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Navigation component
│   │   │   ├── ProtectedRoute.jsx # Route protection
│   │   │   ├── TaskCard.jsx     # Task display component
│   │   │   └── TaskForm.jsx     # Task creation/editing form
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Authentication context
│   │   ├── hooks/
│   │   │   └── useTasks.js      # Custom hook for task operations
│   │   ├── pages/
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Register.jsx     # Registration page
│   │   │   ├── Dashboard.jsx    # Main dashboard
│   │   │   └── CreateEditTask.jsx # Task creation/editing page
│   │   ├── services/
│   │   │   └── api.js           # API configuration
│   │   ├── App.jsx              # Main App component
│   │   └── main.jsx             # React entry point
│   ├── package.json
│   └── vite.config.js           # Vite configuration
└── README.md
```

## 🔧 Usage

### Getting Started

1. **Register a new account** or use demo credentials:
   - Admin: `admin` / `admin123`
   - User: `user` / `user123`

2. **Create tasks** using the "Create New Task" button

3. **Manage tasks** with edit and delete options

4. **Filter and search** tasks using the filters panel

### Admin Features

- View all tasks from all users
- Delete any task in the system
- Admin badge displayed in navigation

### User Features

- Create and manage personal tasks
- View only own tasks
- Full CRUD operations on own tasks

## 🛡️ Security Features

- Password hashing with bcrypt (12 rounds)
- JWT token authentication
- Protected API routes
- Input validation and sanitization
- Role-based access control
- CORS protection
- Error handling without information leakage

## 🔍 Testing

### Manual Testing Scenarios

1. **Authentication:**
   - Register with valid/invalid data
   - Login with correct/incorrect credentials
   - Access protected routes without authentication

2. **Task Management:**
   - Create tasks with valid/invalid data
   - Edit own tasks vs. other users' tasks
   - Delete tasks based on role permissions

3. **Authorization:**
   - Test admin vs. user access levels
   - Verify task visibility based on role
   - Check API endpoint security

## 🚨 Known Issues & Limitations

- No password reset functionality
- No email verification
- No real-time updates
- No file attachments for tasks
- Basic UI without advanced styling framework

## 🔮 Future Enhancements

- [ ] Real-time notifications with Socket.io
- [ ] File upload for task attachments
- [ ] Task assignment to other users
- [ ] Task due dates and reminders
- [ ] Advanced task filtering and sorting
- [ ] Email notifications
- [ ] Password reset functionality
- [ ] User profile management
- [ ] Task categories and tags
- [ ] Activity logs and audit trail

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/taskmanager

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_make_it_long_and_random

# Server Configuration
PORT=5000
NODE_ENV=development

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- AVPL International for the assignment requirements
- MERN stack community for excellent documentation
- Contributors and testers


