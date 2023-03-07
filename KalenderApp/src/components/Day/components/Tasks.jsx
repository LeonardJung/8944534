import React from "react";
import Task from "./Task";

// This is a functional component called Tasks that takes in two props, tasks and onDelete.
const Tasks = ({ tasks, onDelete }) => {
  // Render the list of tasks using map().
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
