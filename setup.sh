#!/bin/bash

echo "🚀 Setting up Task Manager with RBAC..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if MongoDB is running (optional check)
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB found"
else
    echo "⚠️  MongoDB not found locally. Make sure to use MongoDB Atlas or install MongoDB."
fi

# Setup Backend
echo "\n📦 Setting up Backend..."
cd backend

# Copy environment file
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file. Please update it with your configuration."
else
    echo "✅ .env file already exists"
fi

# Install backend dependencies
npm install
if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed"
else
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

# Setup Frontend
echo "\n📦 Setting up Frontend..."
cd ../frontend

# Copy environment file
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created frontend .env file"
else
    echo "✅ Frontend .env file already exists"
fi

# Install frontend dependencies
npm install
if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed"
else
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

cd ..

echo "\n🎉 Setup complete!"
echo "\nNext steps:"
echo "1. Update backend/.env with your MongoDB URI and JWT secret"
echo "2. Start MongoDB (if using local installation)"
echo "3. Start the backend: cd backend && npm run dev"
echo "4. Start the frontend: cd frontend && npm run dev"
echo "\nDemo accounts:"
echo "- Admin: admin / admin123"
echo "- User: user / user123"