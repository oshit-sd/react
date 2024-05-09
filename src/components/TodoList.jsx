import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItemsRemaining from './TodoItemsRemaining';
import TodoCompleteAll from './TodoCompleteAll';
import TodoClearComplete from './TodoClearComplete';
import TodosFilter from './TodosFilter';

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  masAsEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  remaining: PropTypes.func.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  todosFiltered: PropTypes.func.isRequired,
};

function TodoList(props) {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <ul className="space-y-2 overflow-auto max-h-60 pb-5 border-b border-gray-300">
        {props.todosFiltered(filter).map((item, index) => (
          <li key={index} className="flex items-center">
            <input
              onChange={() => props.completeTodo(item.id)}
              type="checkbox"
              className="form-checkbox mr-2"
              checked={item.isComplete}
            />
            <p className={`flex-1 ${item.isComplete ? 'line-through' : ''}`}>
              {!item.isEditing ? (
                <span onDoubleClick={() => props.masAsEditing(item.id)}>
                  {item.title}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={event => props.updateTodo(event, item.id)}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      props.updateTodo(event, item.id);
                    } else if (event.key === 'Escape') {
                      props.masAsEditing(item.id);
                    }
                  }}
                  defaultValue={item.title}
                  className="border px-3 py-1 rounded-lg w-full"
                  autoFocus
                />
              )}
            </p>
            <svg
              onClick={() => props.deleteTodo(item.id)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.95 4.95a1 1 0 010 1.41L11.41 10l5.54 5.54a1 1 0 01-1.41 1.41L10 11.41l-5.54 5.54a1 1 0 01-1.41-1.41L8.59 10 3.05 4.46a1 1 0 011.41-1.41L10 8.59l5.54-5.54a1 1 0 011.41 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        ))}
      </ul>

      {/* Check All Button */}
      <div className="flex justify-between items-center my-5 border-b pb-5 text-gray-600">
        <TodoCompleteAll completeAllTodos={props.completeAllTodos} />
        <TodoItemsRemaining remaining={props.remaining} />
      </div>

      {/* Filters */}
      <div className="flex justify-between mt-4  text-gray-600">
        <TodosFilter filter={filter} setFilter={setFilter} />
        <TodoClearComplete clearCompleted={props.clearCompleted} />
      </div>
    </>
  );
}

export default TodoList;
