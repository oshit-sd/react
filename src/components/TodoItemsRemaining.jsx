import React from 'react';
import PropTypes from 'prop-types';

TodoItemsRemaining.propTypes = {
  remaining: PropTypes.number.isRequired,
};

function TodoItemsRemaining(props) {
  return <div className="text-sm">{props.remaining} items remaining</div>;
}

export default TodoItemsRemaining;
