import { useState, useEffect } from 'react';
import { tasksAPI } from '../services/api';

export const useTasks = (filters = {}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pages: 1,
    total: 0
  });

  const fetchTasks = async (params = {}) => {
    try {
      setLoading(true);
      const response = await tasksAPI.getTasks({ ...filters, ...params });
      setTasks(response.data.tasks);
      setPagination(response.data.pagination);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData) => {
    try {
      const response = await tasksAPI.createTask(taskData);
      setTasks(prev => [response.data.task, ...prev]);
      return { success: true, task: response.data.task };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create task';
      return { success: false, message };
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const response = await tasksAPI.updateTask(id, taskData);
      setTasks(prev => 
        prev.map(task => 
          task._id === id ? response.data.task : task
        )
      );
      return { success: true, task: response.data.task };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update task';
      return { success: false, message };
    }
  };

  const deleteTask = async (id) => {
    try {
      await tasksAPI.deleteTask(id);
      setTasks(prev => prev.filter(task => task._id !== id));
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete task';
      return { success: false, message };
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    pagination,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    refetch: () => fetchTasks()
  };
};