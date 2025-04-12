
import { useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts'
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodo] = useState([])

  const addTodo=(todo)=>{
     setTodo(prev=> [{id: Date.now(),...todo},...prev]) //...spread oparator
  }

  const updateTodo=(id, todo)=>{
    setTodo(prev=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo =(id)=>{
    setTodo(prev=> prev.filter(todo => todo.id !==id))
  }

  const toggleComplete = (id)=>{
    setTodo(prev => 
      prev.map((prevTodo)=>
        (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo)))
  }

  useEffect(()=>{
   const todos= JSON.parse(localStorage.getItem("todos")); //localStorage not work on server sit
   if (todos && todos.length>0) {
    setTodo(todos)
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                        {/* //()=>() auto return */}
                        {/* ()=>{} we need to return */}
                    </div>
                </div>
       </div>
    </TodoContextProvider>
  )
}

export default App
