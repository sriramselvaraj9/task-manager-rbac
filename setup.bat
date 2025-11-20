@echo off
echo 🚀 Setting up Task Manager with RBAC...

:: Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js v18 or higher.
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version

:: Setup Backend
echo.
echo 📦 Setting up Backend...
cd backend

:: Copy environment file
if not exist .env (
    copy .env.example .env
    echo ✅ Created .env file. Please update it with your configuration.
) else (
    echo ✅ .env file already exists
)

:: Install backend dependencies
call npm install
if errorlevel 1 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)
echo ✅ Backend dependencies installed

:: Setup Frontend
echo.
echo 📦 Setting up Frontend...
cd ..\frontend

:: Copy environment file
if not exist .env (
    copy .env.example .env
    echo ✅ Created frontend .env file
) else (
    echo ✅ Frontend .env file already exists
)

:: Install frontend dependencies
call npm install
if errorlevel 1 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✅ Frontend dependencies installed

cd ..

echo.
echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Update backend/.env with your MongoDB URI and JWT secret
echo 2. Start MongoDB (if using local installation)
echo 3. Start the backend: cd backend ^&^& npm run dev
echo 4. Start the frontend: cd frontend ^&^& npm run dev
echo.
echo Demo accounts:
echo - Admin: admin / admin123
echo - User: user / user123

pause
