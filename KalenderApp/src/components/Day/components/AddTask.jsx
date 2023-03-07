import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  // Declare two pieces of state to keep track of the task name and its description.
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  // Define a submit handler function that prevents the default form submission behavior.
  const onSubmit = (e) => {
    e.preventDefault();

    // If no task name is provided, it displays an alert and returns early.
    if (!task) {
      alert("Please add Task");
      return;
    }
    // Otherwise, it calls the onAdd function with an object containing the task and its description.
    onAdd({ task, description });

    // Lastly, it resets the task and description states to empty strings.
    setTask("");
    setDescription("");
  };

  // Render a form with two input fields (for task name and description) and a submit button.
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Taskname"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Save Task"
        className="btn btn-block"
        style={{ backgroundColor: "green" }}
      />
    </form>
  );
};

export default AddTask;
