import React from "react";
import { useState } from "react";

const tasks = [
  {
    id: 1,
    text: "Task 1",
    day: "March 7.",
  },
  {
    id: 2,
    text: "Task 2",
    day: "March 8.",
  },
  {
    id: 3,
    text: "Task 3",
    day: "March 9.",
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
