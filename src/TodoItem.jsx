import './App.css'
export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <div className="list">
            <li>
            <label>
              <input type="checkbox" checked={completed} 
              onChange={e => toggleTodo(id, e.target.checked)}/>
              {title}
            </label>
          <button onClick={() => deleteTodo(id)} className="deleteBtn">X</button>
          </li>
        </div>
    )
}