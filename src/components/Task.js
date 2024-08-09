import React from "react";

function Task({text, category, onDelete}) {
   return (
    <div className="task">
      <div className="task-details">
        <h3>{text}</h3>
        <p>{category}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
   )
}

export default Task;
