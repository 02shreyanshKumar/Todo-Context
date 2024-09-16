import { useEffect, useState } from "react"
import { TodoContextProvider } from "./Context"
import { TodoForm, TodoItem } from "./Components";

function App() {
  const todoses=JSON.parse(localStorage.getItem("todos")) || []
  const [todos,setTodos]=useState(todoses);
  const addTodo=(text)=>{
    setTodos((prev)=>[{id:Date.now(),...text},...prev])
  }
  const updateTodo=(id,text)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id? text : prevtodo))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevtodo)=>prevtodo.id!==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===id ? {...todo,completed:!todo.completed} : todo))
  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoContextProvider value={{addTodo,updateTodo,deleteTodo,toggleComplete,todos}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
             <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {todos.map((todo)=>(
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo}/>
                </div>
              ))}
              
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
