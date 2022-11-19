import { React } from "react";
import "./Task.css";

/* Reading the entire array of objects, but only pulling the names of the tasks and rendering those.*/
function Task({
  task,
  toggleTaskByID,
  deleteTaskByID,
  editTaskByID,
  toggleEditMode,
  updateValue,
  setUpdateValue,
  copyCurrentFieldValue,
  disableButton,
  setDisableButton,
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

        {task.inEditMode ? (
          <>
            <li className="TaskBox_TaskRow" key={task.id}>
              <div>{task.taskName}</div>
            </li>
            <button
              onClick={() => {
                toggleEditMode(task.id);
                copyCurrentFieldValue(task.id, updateValue);
                setDisableButton(true);
              }}
              disabled={disableButton}
            >
              Edit
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={updateValue}
              onChange={(e) => setUpdateValue(e.target.value)}
            />
            <button
              onClick={() => {
                toggleEditMode(task.id);
                editTaskByID(task.id, updateValue);
                setDisableButton(false);
              }}
            >
              Done
            </button>
          </>
        )}

        <button onClick={() => deleteTaskByID(task.id)}>Delete</button>
      </span>
    </>
  );
}

export default Task;
