import { useState } from 'react';
import './../assets/css/style.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Task 1',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Task 2',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Task 3',
      isComplete: false,
      isEditing: false,
    },
  ]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: todo,
        isComplete: false,
      },
    ]);
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function masAsEditing(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }

        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  return (
    <div className="bg-gray-500">
      <div className="flex justify-center items-center h-screen">
        <div className="w-[40%] bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4">Todo Tasks</h1>

          {/* Added Field */}
          <TodoForm addTodo={addTodo} />

          {/* Task List */}
          {todos.length > 0 ? (
            <TodoList
              todos={todos}
              completeTodo={completeTodo}
              masAsEditing={masAsEditing}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ) : (
            <NoTodos />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
