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
  const [inputValue, setInputValue] = useState("");

  const addTask = (name) => {
    //get next id for new array
    let taskIDs = taskList.map((item) => item.id);
    let maxID = Math.max(...taskIDs);
    let newID = maxID + 1;

    //append new task to array
    let newTaskList = [
      ...taskList,
      { id: newID, taskName: name, complete: false },
    ];

    //set tasklist to new array
    setTaskList(newTaskList);
  };

  const toggleTaskByID = (id) => {
    // return taskList.map((item) => {
    //   if (item.id == id) {
    //     setTaskList(!item[id].complete);
    //   }
    // });

    //create a new array where one of the objects has boolean set to true
    let newTaskList = taskList.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    //set tasklist to new array
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      {/* This displays the <h1> tag above the website*/}
      <Header />
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(taskList, null, 2)}
      </pre>

      <label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </label>
      <button onClick={() => addTask(inputValue)}>Add To List</button>

      {/* This will pass the entire array of tasks down to the TaskList componenent to be rendered into task by the Task componenent. */}
      <ul className="ListofTasks">
        <TaskList todoitems={taskList} toggleTaskByID={toggleTaskByID} />{" "}
      </ul>

      <button onClick={() => toggleTaskByID(1)}>Click Me</button>
    </div>
  );
}

export default App;
