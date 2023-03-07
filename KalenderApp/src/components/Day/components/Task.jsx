import React from "react";
import { FaTimes } from "react-icons/fa";

//functional component called Task that renders a single task.
const Task = ({ task, onDelete }) => {
  // Render the task with its details.
  return (
    <div className="task">
      {/* Render the task name and a delete button. */}
      <h3>
        {task.task}{" "}
        <FaTimes
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      {/* Render the task description. */}
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
