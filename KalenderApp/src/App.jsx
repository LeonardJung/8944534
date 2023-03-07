import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
