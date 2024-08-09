import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  return (
    <div>
        {tasks.map(task => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
  
}

export default TaskList;
