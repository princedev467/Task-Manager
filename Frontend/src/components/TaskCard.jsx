import React from 'react';
import { Calendar, Edit3, Trash2, CheckCircle2, Circle, AlertTriangle } from 'lucide-react';

const TaskCard = ({ task, onToggleComplete, onEdit, onDelete }) => {
  const { _id, title, description, completed, priority, dueDate } = task;

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isOverdue = () => {
    if (!dueDate || completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(dueDate);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate < today;
  };

  return (
    <div className={`task-card glass-panel ${completed ? 'task-completed' : ''} priority-${priority}`}>
      <div className="task-card-body">
        <button
          onClick={() => onToggleComplete(_id, !completed)}
          className={`checkbox-btn ${completed ? 'checked' : ''}`}
          aria-label={completed ? 'Mark task as pending' : 'Mark task as completed'}
        >
          {completed ? (
            <CheckCircle2 className="checkbox-icon icon-checked" size={22} />
          ) : (
            <Circle className="checkbox-icon icon-unchecked" size={22} />
          )}
        </button>

        <div className="task-content">
          <h3 className="task-title">{title}</h3>
          {description && <p className="task-desc">{description}</p>}

          <div className="task-meta">
            <span className={`priority-badge badge-${priority}`}>
              {priority.toUpperCase()}
            </span>

            {dueDate && (
              <span className={`date-badge ${isOverdue() ? 'overdue' : ''}`}>
                {isOverdue() ? (
                  <AlertTriangle size={14} className="meta-icon animated-pulse" />
                ) : (
                  <Calendar size={14} className="meta-icon" />
                )}
                <span>{formatDate(dueDate)}</span>
                {isOverdue() && <span className="overdue-text">Overdue</span>}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button onClick={() => onEdit(task)} className="btn-icon btn-edit" title="Edit Task">
          <Edit3 size={18} />
        </button>
        <button onClick={() => onDelete(_id)} className="btn-icon btn-delete" title="Delete Task">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
