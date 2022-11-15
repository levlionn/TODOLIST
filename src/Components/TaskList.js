import React from "react";
import Task from "./Task";

//This is a list of tasks that passes down the data from App.js (the entire array of tasks)
//into one single task to be rendered into an <li> item.
function TaskList({ todoitems, toggleTaskByID, deleteObjectFromArray }) {
  return (
    <div>
      {todoitems.map((item) => (
        <Task
          task={item}
          toggleTaskByID={toggleTaskByID}
          deleteObjectFromArray={deleteObjectFromArray}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default TaskList;
