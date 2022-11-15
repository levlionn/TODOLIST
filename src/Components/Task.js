import { React } from "react";
import "./Task.css";

/* Reading the entire array of objects, but only pulling the names of the tasks and rendering those.*/
function Task({ task, toggleTaskByID, deleteTaskByID }) {
  return (
    <>
      <span className="TaskBox">
        <input
          className="TaskBox_Checkbox"
          type="checkbox"
          checked={task.complete}
          onChange={() => toggleTaskByID(task.id)}
        />
        <li className="TaskBox_Checkbox" key={task.id}>
          {task.taskName}
        </li>
        <button onClick={() => deleteTaskByID(task.id)}>Delete</button>
      </span>
    </>
  );
}

export default Task;
