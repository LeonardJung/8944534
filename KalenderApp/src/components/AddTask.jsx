import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      alert("Please add Task");
      return;
    }

    onAdd({ task, description });

    setTask("");
    setDescription("");
  };

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
