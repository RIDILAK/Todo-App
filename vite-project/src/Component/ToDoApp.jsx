

import React, { useState } from "react";
import "./ToDoApp.css";

function ToDoApp() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]); 

  function handleChange(e) {
    setInputValue(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim()) { 
      setItems([...items, inputValue]); 
      setInputValue(""); 
    }
  }

 
  function handleDelete(index) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  return (
    <div className="Todo-container">
      <form className="input-section" onSubmit={handleSubmit}>
        <h1>Todo App</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter items..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <i
              className="fa-solid fa-trash"
              onClick={() => handleDelete(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
