import React from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

const Filters = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="filters-container glass-panel">
      <div className="search-box">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search tasks by title or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="filter-controls">
        <div className="control-group">
          <label><Filter size={14} /> Status</label>
          <div className="filter-chips">
            {['all', 'pending', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`chip ${statusFilter === status ? 'active' : ''}`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>


        <div className="control-group">
          <label><Filter size={14} /> Priority</label>
          <div className="filter-chips">
            {['all', 'high', 'medium', 'low'].map((prio) => (
              <button
                key={prio}
                onClick={() => setPriorityFilter(prio)}
                className={`chip ${priorityFilter === prio ? 'active' : ''} ${prio !== 'all' ? `chip-${prio}` : ''}`}
              >
                {prio.charAt(0).toUpperCase() + prio.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group sort-group">
          <label><ArrowUpDown size={14} /> Sort By</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select options">
            <option  className="option " value="newest">Newest Created</option>
            <option  className="option " value="oldest">Oldest Created</option>
            <option  className="option " value="dueDate">Due Date (Soonest)</option>
            <option  className="option " value="priority">Priority (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
