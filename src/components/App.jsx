import { useEffect, useMemo, useRef, useState } from 'react';
import './../assets/css/style.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  // const [todos, setTodos] =  useState([
  //   {
  //     id: 1,
  //     title: 'Task 1',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Task 2',
  //     isComplete: true,
  //     isEditing: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Task 3',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  // ]);

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

  function remainingCalculation() {
    return todos.filter(todo => !todo.isComplete).length;
  }
  const remaining = useMemo(remainingCalculation, [todos]);

  function completeAllTodos() {
    const updatedTodos = todos.map(todo => {
      todo.isComplete = true;
      return todo;
    });
    setTodos(updatedTodos);
  }

  function clearCompleted() {
    setTodos([...todos].filter(todo => !todo.isComplete));
  }

  function todosFiltered(filter) {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    } else if (filter === 'complete') {
      return todos.filter(todo => todo.isComplete);
    }
  }

  // user name
  const [name, setName] = useLocalStorage('name', '');
  const nameInputEl = useRef(null);
  // useEffect(() => {
  //   nameInputEl.current.focus();
  //   console.log('Use Effect change by todos');
  // }, [todos]);

  // useEffect(() => {
  //   nameInputEl.current.focus();
  //   console.log('Use Effect change by name');
  // }, [name]);

  useEffect(() => {
    console.log('Use Effect running');
    // setName(JSON.parse(localStorage.getItem('name')) ?? '');
    return function cleanup() {
      console.log('Cleanup Effect');
    };
  }, []); //if use [] array its running in first time.

  function handleNameInput(event) {
    setName(event.target.value);
    // localStorage.setItem('name', JSON.stringify(event.target.value));
  }

  return (
    <div className="bg-gray-500">
      <div className="flex justify-center items-center h-screen">
        <div className="w-[40%] bg-white p-6 rounded-lg shadow-md">
          <div className="name-container">
            <h1 className="text-xl font-bold mb-4">What is your name ?</h1>
            <input
              value={name}
              onChange={handleNameInput}
              type="text"
              ref={nameInputEl}
              placeholder="Write your name here.."
              className="border px-3 py-2 rounded-lg w-[80%] mb-1 shadow-md "
            />
            <button
              type="button"
              className="border p-2 text-sm rounded-md float-end"
              onClick={() => nameInputEl.current.focus()}
            >
              GET REF
            </button>
            {name && (
              <p>
                Hello, <span className="font-bold">{name}</span>
              </p>
            )}
          </div>

          {/* Add task */}
          <h1 className="text-xl font-bold mb-4 mt-5">Todo APP</h1>
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
              remaining={remaining}
              completeAllTodos={completeAllTodos}
              clearCompleted={clearCompleted}
              todosFiltered={todosFiltered}
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
