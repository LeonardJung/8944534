import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./Day.css";

function Day() {
  // State for showing/hiding the "Add Task" form
  const [showAddTask, setShowAddTask] = useState(false);

  // State for storing the list of tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Task 1",
    },
    {
      id: 2,
      task: "Task 2",
    },
    {
      id: 3,
      task: "Task 3",
      description: "Example",
    },
  ]);

  // Function for adding a new task to the list
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Function for deleting a task from the list
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      {/* Header component with button for showing/hiding "Add Task" form */}
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* "Add Task" form (conditionally rendered) */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* Displayes text when no Task availabal*/}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default Day;
