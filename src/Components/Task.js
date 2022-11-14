import React from "react";
import "./Task.css";

function Task(props) {
  {
    /* Reading the entire array of objects, but only pulling the names of the tasks and rendering those.*/
  }
  return <li>{props.task.taskName}</li>;
}

export default Task;
