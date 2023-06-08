import { useEffect, useState } from "react"

import './App.css'
import logo from '../public/quest.png'
import coins_icon from '../public/coin.png'
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(){
 let coins = 0
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("TodoData")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("TodoData", JSON.stringify(todo))
  }, [todo]) 

  function addTodo(title) {
    setTodo(currentTodo => {
      return [
        ...currentTodo,
        {id: crypto.randomUUID(), title, completed: false},
        
      ]
    })
    
  }

  function toggleTodo(id, completed){
    setTodo(currentTodo =>{
      return currentTodo.map(todo => {
        if (todo.id == id) {
          todo.completed = completed
          return { ...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id != id)
    })
  }

  

/*TODO: Create a in-app Currency that is earned by completing task 
    with the more difficult tasks giving more coins*/
  return (
    <>
    
    <section className="coin-container"><img src={coins_icon} alt="" className="logo-Icon" /> {coins}</section>
    <div>
    <img src={logo} alt="Logo" className="logo" />
    <h1>Pandora's Quest </h1>
    </div>

  <NewTodoForm addTodo={addTodo}/>

  <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}