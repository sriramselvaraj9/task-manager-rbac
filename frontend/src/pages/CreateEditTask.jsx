import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';
import Navbar from '../components/Navbar';

const CreateEditTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createTask, updateTask } = useTasks();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if we're editing an existing task
  const taskToEdit = location.state?.task;
  const isEditing = !!taskToEdit;

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setError('');

    try {
      let result;
      
      if (isEditing) {
        result = await updateTask(taskToEdit._id, formData);
      } else {
        result = await createTask(formData);
      }

      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={handleCancel}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </button>
            
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditing ? 'Edit Task' : 'Create New Task'}
            </h1>
            <p className="mt-2 text-gray-600">
              {isEditing 
                ? 'Update your task details below' 
                : 'Fill in the details to create a new task'
              }
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {/* Task Form */}
          <TaskForm
            task={taskToEdit}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default CreateEditTask;