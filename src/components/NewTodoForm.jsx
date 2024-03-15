import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [todoTitle, setTitle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todoTitle.trim() === "") {
      setError("Title cannot be empty");
      return;
    }

    onSubmit(todoTitle);
    setTitle("");
    setError("");
  }

  
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <h1>Josh's Generic todo</h1>
      </div>
      <div className="form-row">
        <label htmlFor="item">Title</label>
        <input
          value={todoTitle}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="item"
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
