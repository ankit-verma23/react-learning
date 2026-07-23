import React, { useContext, useState } from 'react'
import { TodoDataContext } from '../context/TodoContext'
// import 'remixicon/fonts/remixicon.css'


function TodoList( {todo}) {
  const { todos, deleteTodo, updateTodo, toggleTodo } = useContext(TodoDataContext)
  const [ todoMsg, setTodoMsg] = useState(todo.todo)
  const [editable, setEditable] = useState(false)


  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo:todoMsg})
    setEditable(false)
  }

  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleTodo(todo.id)
  }
  return (

    <div
      className='text-4xl h-fit w-1/2 rounded-2xl'>
        {
            <div
              className='bg-red-400 border border-black rounded-2xl shadow-md shadow-black flex justify-between py-2 px-4 text-center m-1'
            >
              <input type="checkbox"
                className="cursor-pointer accent-green-500"
                checked={todo.completed}
                onChange={toggleCompleted}
              />
              <input type="text" 
                className= {`text-black text-sm font-medium w-full outline-none mx-2 ${editable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""} `}
                value={todoMsg}
                readOnly={!editable}
                onChange={(e) => setTodoMsg(e.target.value)}
              />
              <div className='flex gap-2'>
                <i onClick={() => {
                  if(todo.completed) return;

                  if (editable) {
                    editTodo();
                  } else setEditable((prev) => !prev)
                }} class="ri-edit-box-line text-sm cursor-pointer"></i>
                <i onClick={() => (deleteTodo(todo.id))} class="ri-delete-bin-line text-sm cursor-pointer"></i>
              </div>
            </div>
        }
      
    </div>
  )
}

export default TodoList
