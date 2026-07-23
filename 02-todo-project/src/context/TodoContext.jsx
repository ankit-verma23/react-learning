import React, { createContext, useEffect, useState } from "react";

export const TodoDataContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

const TodoContext = (props) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <div>
      <TodoDataContext.Provider
        value={{
          todos,
          addTodo,
          updateTodo,
          deleteTodo,
          toggleTodo,
        }}
      >
        {props.children}
      </TodoDataContext.Provider>
    </div>
  );
};

export default TodoContext;
