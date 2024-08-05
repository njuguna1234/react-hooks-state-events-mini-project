import React from "react";

function Task({task, onDeleteTask}) {
  return (
    <>
    <div>
      <span>{task.text}</span>
      <span>{task.category}</span>
      <button onClick={() => onDeleteTask(task.text)}>Delete</button>
    </div>
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
    </>
  );
}

export default Task;
