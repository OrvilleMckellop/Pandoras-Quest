import { useState } from "react"
import './App.css'

export function NewTodoForm({addTodo}){
    const [newItem, setNewItem] = useState("")


    function submitData(e){
        //prevents page reload
        e.preventDefault()
        
        //check if input bar is empty
        if(newItem ==""){
            return 
        }

        addTodo(newItem)
    
        setNewItem("")
      }
      
    return (
        <form onSubmit={submitData} className="newItemForm">
    <div className="inputRow">
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
      <button className="addBtn">Add</button>
    </div>
    
  </form>
      )
}