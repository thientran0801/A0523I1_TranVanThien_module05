import './App.css';
import Calculator from "./ex02/Calculator";
import ListStudent from "./ex03/ListStudent";
import Introduce from "./ex04/Introduce";
import LogInOut from "./ex06/LogInOut";
import React from "react";
import ToDoList from "./ex07/ToDoList";

function App() {
  return (
      <div>
        <Calculator />
        <hr/>
        <h2>Exercise 03 </h2>
        <ListStudent />
          <hr/>
          <h2>Exercise 04 </h2>
          <Introduce />
          <hr/>
          <h2>Exercise 06 </h2>
          <LogInOut />
          <hr/>
          <h2>Exercise 07 </h2>
          <ToDoList />
      </div>

  );
}

export default App;
