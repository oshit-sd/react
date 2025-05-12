import React, { Component } from 'react';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todos: [
        {
          id: 1,
          title: 'Task 1',
          is_completed: false,
        },
        {
          id: 2,
          title: 'Task 2',
          is_completed: false,
        },
        {
          id: 3,
          title: 'Task 3',
          is_completed: false,
        },
      ],
    };
  }

  addTodo = event => {
    event.preventDefault();

    if (this.state.todoInput.trim().length === 0) {
      return;
    }

    this.setState(prevState => {
      const newTodos = [
        ...prevState.todos,
        {
          id: prevState.todos.length + 1,
          title: this.state.todoInput,
          is_completed: false,
        },
      ];

      return { todoInput: '', todos: newTodos };
    });
  };

  handleInput = event => {
    this.setState({
      todoInput: event.target.value,
    });
  };

  render() {
    return (
      <div className="bg-gray-500">
        <div className="flex justify-center items-center h-screen">
          <div className="w-[40%] bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">Todo Tasks</h1>

            {/* Added Field */}
            <form action="#" onSubmit={this.addTodo}>
              <input
                value={this.state.todoInput}
                onChange={this.handleInput}
                type="text"
                placeholder="Add a new task..."
                className="border px-3 py-2 rounded-lg w-full mb-4 shadow-md "
              />
            </form>

            {/* Task List */}
            <ul className="space-y-2 overflow-auto max-h-60 pb-5 border-b border-gray-300">
              {this.state.todos.map((item, index) => (
                <li key={index} className="flex items-center">
                  <input type="checkbox" className="form-checkbox mr-2" />
                  <p className="flex-1 line-through">{item.title}</p>
                  <svg
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
              <button className="border py-1 px-2 rounded-md text-sm">
                Check All
              </button>
              <div className="text-sm">2 items remaining</div>
            </div>

            {/* Filters */}
            <div className="flex justify-between mt-4  text-gray-600">
              <div>
                <button className="border py-1 px-2 rounded-md">All</button>
                <button className="py-1 px-2 rounded-md text-sm">Active</button>
                <button className="py-1 px-2 rounded-md text-sm">
                  Completed
                </button>
              </div>
              <button className="border py-1 px-2 rounded-md text-sm">
                Clear completed
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
