import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
