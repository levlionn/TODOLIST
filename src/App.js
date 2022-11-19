import "./App.css";
import { useState } from "react";

import TaskList from "./Components/TaskList";
import Header from "./Header";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [taskList, setTaskList] = useState([
    {
      id: 0,
      taskName: "Go for a walk",
      complete: false,
      isShown: true,
    },
  ]);

  const addTask = (name) => {
    //Returns an array of numbers corresponding to the IDs of each object in the array.
    let taskIDs = taskList.map((item) => item.id);
    let maxID = taskIDs.reduce((a, b) => Math.max(a, b), 0);
    let newID = maxID + 1;

    let newTaskList = [
      ...taskList,
      { id: newID, taskName: name, complete: false, isShown: true },
    ];

    //set tasklist to new array
    setTaskList(newTaskList);
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

  const toggleShowTask = (id) => {
    let newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isShown: !task.isShown };
      }
      return task;
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
          isShown: !task.isShown,
        };
      }
      return task;
    });

    setTaskList(newTaskList);
  };

  //not a pure function - oops - changing the state of something outside the scope of this function.
  const copyCurrentFieldValue = (id) => {
    //find the task that matchs the field the user pressed
    let currentTask = taskList.filter((task) => {
      return task.id === id;
    });
    setUpdateValue(currentTask[0].taskName);
  };

  return (
    <div className="App">
      {/* This displays the <h1> tag above the website*/}
      <Header />
      {/* <pre style={{ textAlign: "left" }}>
        {JSON.stringify(taskList, null, 2)}
      </pre> */}

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
        <TaskList
          todoitems={taskList}
          toggleTaskByID={toggleTaskByID}
          deleteTaskByID={deleteTaskByID}
          editTaskByID={editTaskByID}
          toggleShowTask={toggleShowTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
          updateValue={updateValue}
          setUpdateValue={setUpdateValue}
          copyCurrentFieldValue={copyCurrentFieldValue}
          disableButton={disableButton}
          setDisableButton={setDisableButton}
        />
      </ul>
    </div>
  );
}

export default App;
