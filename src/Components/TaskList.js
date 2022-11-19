import React from "react";
import Task from "./Task";

//This is a list of tasks that passes down the data from App.js (the entire array of tasks)
//into one single task to be rendered into an <li> item.
function TaskList({
  todoitems,
  toggleTaskByID,
  deleteTaskByID,
  editTaskByID,
  toggleShowTask,
  inputValue,
  setInputValue,
  updateValue,
  setUpdateValue,
  copyCurrentFieldValue,
  disableButton,
  setDisableButton,
}) {
  return (
    <div>
      {todoitems.map((item) => (
        <Task
          task={item}
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
          key={item.id}
        />
      ))}
    </div>
  );
}

export default TaskList;
