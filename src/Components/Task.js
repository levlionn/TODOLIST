import { React } from "react";
import "./Task.css";

/* Reading the entire array of objects, but only pulling the names of the tasks and rendering those.*/
function Task({
  task,
  toggleTaskByID,
  deleteTaskByID,
  editTaskByID,
  showTask,
  setShowTask,
  updateValue,
  setUpdateValue,
}) {
  return (
    <>
      <span className="TaskBox">
        <input
          className="TaskBox_Checkbox"
          type="checkbox"
          checked={task.complete}
          onChange={() => toggleTaskByID(task.id)}
        />

        <li className="TaskBox_TaskRow" key={task.id}>
          {!showTask ? <input type="text" /> : <div>{task.taskName}</div>}
        </li>

        <button onClick={() => deleteTaskByID(task.id)}>Delete</button>

        {showTask ? (
          <button
            onClick={() => {
              setShowTask(false);
              editTaskByID(task.id);
            }}
          >
            Edit
          </button>
        ) : (
          <button onClick={() => setShowTask(true)}>Done</button>
        )}
      </span>
    </>
  );
}

export default Task;
