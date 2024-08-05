
import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[1]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories
          .filter((cat) => cat !== "All")
          .map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
