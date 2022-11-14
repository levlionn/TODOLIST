import React from "react";
import Task from "./Task";

//This is a list of tasks that passes down the data from App.js (the entire array of tasks)
//into one single task to be rendered into an <li> item.
function TaskList(props, onCompletedItemChange) {
  return (
    <div>
      {props.todoitems.map((item) => {
        {
          /*Passing entire array of objects as {item} */
        }
        return <Task task={item} passDownData={onCompletedItemChange} />;
      })}
    </div>
  );
}

export default TaskList;
