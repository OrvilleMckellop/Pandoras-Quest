import { TodoItem } from "./TodoItem"
import './App.css'

export function TodoList({todo, toggleTodo, deleteTodo}) {
    return (
        <ul>
        {todo.length == 0 && "No Tasks"}
        
        {todo.map(todo =>{
          return (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )
        })}
        
      </ul>
    )
}