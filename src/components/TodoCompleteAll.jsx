import React from 'react';
import PropTypes from 'prop-types';

TodoCompleteAll.propTypes = {
  completeAllTodos: PropTypes.func.isRequired,
};

function TodoCompleteAll(props) {
  return (
    <button
      onClick={props.completeAllTodos}
      className="border py-1 px-2 rounded-md text-sm"
    >
      Check All
    </button>
  );
}

export default TodoCompleteAll;
