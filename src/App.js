import "./App.css";
import { useState } from "react";

import TaskList from "./Components/TaskList";
import Header from "./Header";

const DUMMY_DATA = [
  {
    id: 0,
    taskName: "Go for a walk",
    complete: false,
  },
  {
    id: 1,
    taskName: "Have some tea",
    complete: false,
  },
  {
    id: 2,
    taskName: "Feed the cat",
    complete: false,
  },
];

function App() {
  const [taskList, setTaskList] = useState(DUMMY_DATA);
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(DUMMY_DATA);

  return (
    <div className="App">
      {/* This displays the <h1> tag above the website*/}
      <Header />

      <label>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </label>
      <button>Add To List</button>

      {/* This will pass the entire array of tasks down to the TaskList componenent to be rendered into task by the Task componenent. */}
      <ul className="ListofTasks">
        <TaskList todoitems={taskList} onCompletedItemChange={setTaskList} />{" "}
      </ul>
    </div>
  );
}

export default App;
