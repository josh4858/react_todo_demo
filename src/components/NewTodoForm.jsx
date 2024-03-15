import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [todoTitle, setTitle] = useState("")
  // const [todoDescription,setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if (todoTitle === "") return

    onSubmit(todoTitle)

    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      
      <div className="form-row">
        <h1>React todo</h1>
      </div>
      
      <div className="form-row">
        <label htmlFor="item">Title</label>
        <input
          value={todoTitle}
          onChange={e => setTitle(e.target.value)}
          type="text"
          id="item"
        />
        
      </div>
      <button className="btn">Add</button>
    </form>
  )
}