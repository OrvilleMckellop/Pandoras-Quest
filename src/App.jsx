export default function App(){
  return (
    <>
    <h1>Pandora's Notes</h1>

  <form className="newItemForm">
    <div className="formRow">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
    </div>
    <button className="addBtn">Add</button>
  </form>
    </>
  )
}