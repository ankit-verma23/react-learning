import { useContext } from "react"
import Todo from "./components/Todo"
import TodoList from "./components/TodoList"
import { TodoDataContext } from "./context/TodoContext"

function App() {
  const {todos} = useContext(TodoDataContext)
  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col justify-start items-center p-5">
      <h1 className="text-white text-3xl font-bold py-5 text-shadow-md text-shadow-black">Task Manager</h1>
      <Todo />
      {
        todos.map((todo) => (<TodoList todo={todo}/>))
      }
    </div>
  )
}

export default App
