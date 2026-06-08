import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/Slice/user.slice';
import { fetchTasks, createTask, updateTask, deleteTask } from '../redux/Slice/task.slice';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import Filters from './Filters';
import { LogOut, Plus, CheckCircle, Clock, ShieldAlert, PlusCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, error } = useSelector((state) => state.tasks);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Filter & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Fetch all tasks on mount
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Handle Task Completion Toggle
  const handleToggleComplete = async (taskId, completedStatus) => {
    try {
      await dispatch(updateTask({ taskId, taskData: { completed: completedStatus } })).unwrap();
      toast.success(completedStatus ? 'Task completed! 🎉' : 'Task reopened');
    } catch (err) {
      toast.error('Failed to update task');
    }
  };

  // Handle Create Task Submission
  const handleCreateTask = async (taskData) => {
    try {
      await dispatch(createTask(taskData)).unwrap();
      setIsModalOpen(false);
      toast.success('Task created successfully!');
    } catch (err) {
      toast.error('Failed to create task');
    }
  };

  // Handle Edit Task Submission
  const handleEditTask = async (taskData) => {
    try {
      await dispatch(updateTask({ taskId: taskToEdit._id, taskData })).unwrap();
      setTaskToEdit(null);
      setIsModalOpen(false);
      toast.success('Task updated successfully!');
    } catch (err) {
      toast.error('Failed to update task');
    }
  };

  // Handle Delete Task
  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await dispatch(deleteTask(taskId)).unwrap();
        toast.success('Task deleted');
      } catch (err) {
        toast.error('Failed to delete task');
      }
    }
  };

  // Handle Logout
  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  };

  // Launch Create Modal
  const openCreateModal = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  // Launch Edit Modal
  const openEditModal = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  // Calculations for Sidebar Statistics
  const totalCount = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed);
  const completedCount = completedTasks.length;
  const pendingCount = totalCount - completedCount;

  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const highPriorityPending = tasks.filter((t) => !t.completed && t.priority === 'high').length;

  // Filtering & Sorting Process
  const filteredTasks = tasks
    .filter((task) => {
      // 1. Search Query Filter
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        const matchTitle = task.title.toLowerCase().includes(query);
        const matchDesc = task.description ? task.description.toLowerCase().includes(query) : false;
        if (!matchTitle && !matchDesc) return false;
      }

      // 2. Status Filter
      if (statusFilter === 'pending' && task.completed) return false;
      if (statusFilter === 'completed' && !task.completed) return false;

      // 3. Priority Filter
      if (priorityFilter !== 'all' && task.priority !== priorityFilter) return false;

      return true;
    })
    .sort((a, b) => {
      // 4. Sort Options
      if (sortBy === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortBy === 'oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      if (sortBy === 'dueDate') {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      if (sortBy === 'priority') {
        const priorityWeight = { high: 3, medium: 2, low: 1 };
        return priorityWeight[b.priority] - priorityWeight[a.priority];
      }
      return 0;
    });

  return (
    <div className="dashboard-container">
      {/* Sidebar Panel */}
      <aside className="sidebar glass-panel">
        <div className="sidebar-brand">
          <div className="brand-logo">✓</div>
          <span className="brand-name">TaskFlow</span>
        </div>

        <div className="user-profile">
          <div className="user-avatar">
            {user?.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U'}
          </div>
          <div className="user-info">
            <h4 className="user-name">{user?.name || 'Task Manager User'}</h4>
            <p className="user-email">{user?.email || 'user@example.com'}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="sidebar-stats">
          <h5 className="section-title">Overview</h5>
          <div className="stat-card">
            <div className="stat-icon-wrapper check-icon">
              <CheckCircle size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{completedCount}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper pending-icon">
              <Clock size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{pendingCount}</span>
              <span className="stat-label">Pending</span>
            </div>
          </div>

          {highPriorityPending > 0 && (
            <div className="stat-card urgent-card animated-pulse">
              <div className="stat-icon-wrapper urgent-icon">
                <ShieldAlert size={18} />
              </div>
              <div className="stat-info">
                <span className="stat-value">{highPriorityPending}</span>
                <span className="stat-label">High Priority Pending</span>
              </div>
            </div>
          )}

          {/* Progress Indicator */}
          <div className="progress-section">
            <div className="progress-header">
              <span>Task Progress</span>
              <span className="progress-value">{completionPercentage}%</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-logout" title="Sign Out">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Panel */}
      <main className="main-content">
        <header className="dashboard-header">
          <div className="header-greeting">
            <h1>Hello, {user?.name ? user.name.split(' ')[0] : 'User'} 👋</h1>
            <p>Here is your personal task workspace. Let's make today productive!</p>
          </div>

          <button onClick={openCreateModal} className="btn-primary btn-add-task">
            <Plus size={20} />
            <span>New Task</span>
          </button>
        </header>

        {/* Filtering Options */}
        <Filters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Errors Block */}
        {error && <div className="error-alert">{error}</div>}

        {/* Task Lists Section */}
        <section className="task-section">
          <div className="section-header">
            <h2>
              {statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Tasks
              <span className="task-count-badge">{filteredTasks.length}</span>
            </h2>
          </div>

          {isLoading ? (
            <div className="loading-container">
              <div className="spinner-large"></div>
              <p>Loading your tasks...</p>
            </div>
          ) : filteredTasks.length > 0 ? (
            <div className="task-grid">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onToggleComplete={handleToggleComplete}
                  onEdit={openEditModal}
                  onDelete={handleDeleteTask}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state glass-panel animated-fade-in">
              <div className="empty-icon-badge">
                <PlusCircle size={40} className="empty-icon" />
              </div>
              <h3>No Tasks Found</h3>
              <p>
                {searchQuery || priorityFilter !== 'all' || statusFilter !== 'all'
                  ? "We couldn't find any tasks matching your filters."
                  : "You don't have any tasks in this view. Start creating now!"}
              </p>
              {(searchQuery || priorityFilter !== 'all' || statusFilter !== 'all') ? (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setStatusFilter('all');
                    setPriorityFilter('all');
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              ) : (
                <button onClick={openCreateModal} className="btn-primary">
                  Create Your First Task
                </button>
              )}
            </div>
          )}
        </section>
      </main>

      {/* Task Creation/Editing Overlay Modal */}
      <TaskForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setTaskToEdit(null);
        }}
        onSubmit={taskToEdit ? handleEditTask : handleCreateTask}
        taskToEdit={taskToEdit}
      />
    </div>
  );
};

export default Dashboard;
