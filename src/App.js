import "./App.css";
import { useState } from "react";

import TaskList from "./Components/TaskList";
import Header from "./Header";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 0,
      taskName: "This is a task",
      complete: false,
    },
  ]); //set to empty array, not empty string!
  const [inputValue, setInputValue] = useState("");

  const addTask = (name) => {
    //get next id for new array
    let taskIDs = taskList.map((item) => item.id);
    console.log(taskIDs, "this is the Task ID");

    let newTaskList;
    if (taskIDs.length === 0) {
      newTaskList = [...taskList, { id: 0, taskName: name, complete: false }];
    } else {
      let maxID = Math.max(...taskIDs); //Math.max expects numbers, but passing in an array won't work. So we need to use the spread operator to extract the numbers only from the array otherwise we will get a NaN error.
      let newID = maxID + 1;
      newTaskList = [
        ...taskList,
        { id: newID, taskName: name, complete: false },
      ];
    }

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

  //delete item from array
  const deleteObjectFromArray = (id) => {
    //search array for current object
    // let newTaskList = taskList.map((item) => {
    //   if (item.id === id) {
    //     //return object
    //     return { ...item };
    //   }
    //   return item;
    // });

    let newTaskList = [...taskList];
    let findIndexofTask = newTaskList.findIndex((task) => {
      return task.id === id;
    });
    console.log(findIndexofTask, "this is the index of clicked item.");
    newTaskList.splice(findIndexofTask, 1);
    //update state, and trigger rerender
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
        <TaskList
          todoitems={taskList}
          toggleTaskByID={toggleTaskByID}
          deleteObjectFromArray={deleteObjectFromArray}
        />{" "}
      </ul>

      <button onClick={() => toggleTaskByID(1)}>Click Me</button>
    </div>
  );
}

export default App;
