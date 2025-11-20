import React from 'react';
import { useAuth } from '../context/AuthContext';

const TaskCard = ({ task, onEdit, onDelete, showActions = true }) => {
  const { user, isAdmin } = useAuth();

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const canModify = user?.id === task.createdBy?._id || isAdmin;
  const canDelete = user?.id === task.createdBy?._id || isAdmin;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {task.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(task.status)}`}>
          {task.status.replace('-', ' ').toUpperCase()}
        </span>
      </div>
      
      {task.description && (
        <p className="text-gray-600 mb-4 line-clamp-3">
          {task.description}
        </p>
      )}
      
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>
          Created by: <span className="font-medium">{task.createdBy?.username}</span>
        </span>
        <span>
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
      
      {showActions && (
        <div className="flex justify-end space-x-2">
          {canModify && (
            <button
              onClick={() => onEdit(task)}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Edit
            </button>
          )}
          {canDelete && (
            <button
              onClick={() => onDelete(task._id)}
              className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskCard;