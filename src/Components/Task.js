import { React, useState, useEffect } from "react";
import "./Task.css";

/* Reading the entire array of objects, but only pulling the names of the tasks and rendering those.*/
function Task({ task, toggleTaskByID, deleteTaskByID, editTaskByID }) {
  const [inEditMode, setInEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(""); //this input value is specific to this component – no one else cares about this.

  useEffect(() => {
    setInputValue(task.taskName);
  }, [task.taskName]);

  const handleDone = () => {
    setInEditMode(false);
    editTaskByID(task.id, inputValue);
  };

  return (
    <>
      <span className="TaskBox">
        <input
          className="TaskBox_Checkbox"
          type="checkbox"
          checked={task.complete}
          onChange={() => toggleTaskByID(task.id)}
        />
        {!inEditMode ? (
          <li className="TaskBox_TaskRow" key={task.id}>
            <div>{task.taskName}</div>
          </li>
        ) : (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleDone();
              }
            }}
          />
        )}

        {!inEditMode ? (
          <button onClick={() => setInEditMode(true)}>Edit</button>
        ) : (
          <button onClick={() => handleDone()}>Done</button>
        )}

        <button onClick={() => deleteTaskByID(task.id)}>Delete</button>
      </span>
    </>
  );
}

export default Task;
