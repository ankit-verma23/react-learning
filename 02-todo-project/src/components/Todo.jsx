import React, { useContext, useState } from "react";
import { TodoDataContext } from "../context/TodoContext";

function Todo() {
  const {todos, addTodo} = useContext(TodoDataContext)
  const [task, setTask] = useState("")

  const insertTodo = () => {
    let todo = {
      id: Date.now(),
      todo: task,
      completed: false
    }

    addTodo(todo)
    setTask('')
  }


  return (
    <div className="mt-10 flex w-full justify-center mb-5">
      <input
        className="text-white text-xs font-normal border border-white py-3 px-3 w-1/3 rounded-2xl mr-5 shadow-md shadow-black"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task..."
      />
      <button 
        className="bg-red-300 py-3 px-3 rounded-xl text-xs font-bold shadow-md shadow-black cursor-pointer"
        onClick={() => insertTodo()}  
      >
        Add Task
      </button>
    </div>
  );
}

export default Todo;
