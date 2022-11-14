import { useState, React } from "react";
import "./Task.css";

/* Reading the entire array of objects, but only pulling the names of the tasks and rendering those.*/
function Task(props) {
  return (
    <>
      <span className="TaskBox">
        <input
          className="TaskBox_Checkbox"
          type="checkbox"
          defaultChecked={props.task.complete}
        />
        <li className="TaskBox_Checkbox" key={props.task.id}>
          {props.task.taskName}
        </li>
      </span>
    </>
  );
}

export default Task;
