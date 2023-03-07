import { useState } from "react";
import Day from "./components/Day/Day";
import Month from "./components/Month/Month";

// define the main App component of the ToDoList app.
// render the Day and Month components within a div element.

function App() {
  return (
    <div>
      <Day />

      <Month />
    </div>
  );
}

export default App;
