import "./App.css";
import { useState } from "react";

import TaskList from "./Components/TaskList";
import Header from "./Header";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [filterSelection, setFilterSelection] = useState("");
  const [taskList, setTaskList] = useState([
    {
      id: 0,
      taskName: "Drink Milk",
      complete: false,
    },
  ]);

  let shownTaskList = taskList.filter((task) => {
    if (filterSelection === "completed") {
      return task.complete;
    } else if (filterSelection === "not finished") {
      return !task.complete;
    }

    return task;
  });

  if (filterSelection === "alphabetical") {
    shownTaskList = taskList.sort((task1, task2) => {
      return task1.taskName
        .toLowerCase()
        .localeCompare(task2.taskName.toLowerCase());
    });
  }

  const addTask = (name) => {
    //Returns an array of numbers corresponding to the IDs of each object in the array.
    let taskIDs = taskList.map((item) => item.id);
    let maxID = taskIDs.reduce((a, b) => Math.max(a, b), 0);
    let newID = maxID + 1;

    let newTaskList = [
      ...taskList,
      { id: newID, taskName: name, complete: false },
    ];

    //set tasklist to new array
    setTaskList(newTaskList);
    setInputValue("");
  };

  const toggleTaskByID = (id) => {
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

  //delete task from array
  const deleteTaskByID = (id) => {
    //return a shallow copy of the taskList array expect without the element that matches the id (aka the one that the user wants deleted.)
    let newTaskList = taskList.filter((task) => {
      return task.id !== id;
    });

    setTaskList(newTaskList);
  };

  //edit task in array
  const editTaskByID = (id, userEdits) => {
    let newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          taskName: userEdits,
        };
      }
      return task;
    });

    setTaskList(newTaskList);
  };

  const deleteAllTasks = () => {
    let newTaskList = taskList.filter((task) => {
      return task.id === -1;
    });
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <Header />
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(taskList, null, 2)}
      </pre>

      <label>
        <input
          type="text"
          placeholder="Type to start..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask(inputValue);
            }
          }}
        />
      </label>
      <button onClick={() => addTask(inputValue)} disabled={!inputValue}>
        Add To List
      </button>

      <select
        value={filterSelection}
        onChange={(e) => {
          setFilterSelection(e.target.value);
        }}
      >
        <option value="">Filter/Sort By</option>
        <option value="completed">Filter: Completed</option>
        <option value="alphabetical">Sort: Alphabetical</option>
        <option value="not finished">Filter: Not Finished</option>
      </select>

      {/* This will pass the entire array of tasks down to the TaskList componenent to be rendered into task by the Task componenent. */}
      <ul className="ListofTasks">
        <TaskList
          todoitems={shownTaskList}
          toggleTaskByID={toggleTaskByID}
          deleteTaskByID={deleteTaskByID}
          editTaskByID={editTaskByID}
        />
      </ul>
      <br></br>
      <button onClick={deleteAllTasks}>Delete All</button>
    </div>
  );
}

export default App;
