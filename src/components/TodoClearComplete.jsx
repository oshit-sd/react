import React from 'react';
import PropTypes from 'prop-types';

TodoClearComplete.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
};

function TodoClearComplete(props) {
  return (
    <button
      onClick={props.clearCompleted}
      className="border py-1 px-2 rounded-md text-sm"
    >
      Clear completed
    </button>
  );
}

export default TodoClearComplete;
