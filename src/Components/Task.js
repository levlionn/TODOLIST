import React from "react";
import "./Task.css";

function Task(props) {
  return (
    <>
      <span className="TaskArea">
        <input className="TaskArea_Checkbox" type="checkbox"></input>
        <li className="TaskArea_TaskName" key={props.key}>
          {props.taskName}
        </li>
      </span>
    </>
  );
}

export default Task;
