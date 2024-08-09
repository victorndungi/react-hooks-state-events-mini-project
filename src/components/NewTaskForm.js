import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State for form inputs
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]); // Default to the first category

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new task object
    const newTask = { text, category };
    // Pass the new task to the callback
    onTaskFormSubmit(newTask);
    // Reset the form
    setText("");
    setCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories
            .filter(cat => cat !== "All") // Exclude "All" from the options
            .map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
