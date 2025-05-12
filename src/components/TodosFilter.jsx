import React from 'react';
import PropTypes from 'prop-types';

TodosFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

function TodosFilter(props) {
  return (
    <div>
      <button
        onClick={() => props.setFilter('all')}
        className={`py-1 px-2 rounded-md text-sm ${
          props.filter === 'all' ? 'border' : ''
        }`}
      >
        All
      </button>
      <button
        onClick={() => props.setFilter('active')}
        className={`py-1 px-2 rounded-md text-sm ${
          props.filter === 'active' ? 'border' : ''
        }`}
      >
        Active
      </button>
      <button
        onClick={() => props.setFilter('complete')}
        className={`py-1 px-2 rounded-md text-sm ${
          props.filter === 'complete' ? 'border' : ''
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodosFilter;
