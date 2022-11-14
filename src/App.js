import "./App.css";
import Task from "./Components/Task";
import Header from "./Header";

import { useState } from "react";

const DUMMY_DATA = [
  {
    id: 0,
    taskName: "Go for a walk",
    complete: false,
  },
  {
    id: 1,
    taskName: "Have some tea",
    complete: true,
  },
  {
    id: 2,
    taskName: "Feed the cat",
    complete: false,
  },
];

function App() {
  const [taskList, setTaskList] = useState("");
  const [task, setTask] = useState("");

  //function to handle adding to list
  function handleAdd() {
    //add item
  }

  return (
    <div className="App">
      <Header />

      <label>
        <input
          type="text"
          value={task}
          onChange={(t) => {
            setTask(t.target.value);
          }}
        />
      </label>
      <button onClick={handleAdd}>Add To List</button>

      <ul>
        {DUMMY_DATA.map((item) => {
          return <li key={item.id}>{item.taskName}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
