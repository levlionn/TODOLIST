import React from "react";
import Task from "./Task";

//This is a list of tasks that passes down the data from App.js (the entire array of tasks)
//into one single task to be rendered into an <li> item.
function TaskList({ todoitems, toggleTaskByID, deleteTaskByID, editTaskByID }) {
  return (
    <>
      {todoitems.map((item) => (
        <Task
          task={item}
          toggleTaskByID={toggleTaskByID}
          deleteTaskByID={deleteTaskByID}
          editTaskByID={editTaskByID}
          key={item.id}
        />
      ))}
    </>
  );
}

export default TaskList;
