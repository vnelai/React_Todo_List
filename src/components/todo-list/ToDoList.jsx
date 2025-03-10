import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css'; // Import the CSS file

function ToDoList({ tasks, addTask, handleChange, newTask, deleteTask, moveTaskUp, moveTaskDown, editTask, saveTask, toggleTaskCompletion }) {
    const [taskEdit, setTaskEdit] = useState(""); // State to hold the task editing
    
     // Handle function for the task editing
     function handleTaskEditChange(event) {
        setTaskEdit(event.target.value); // Update the task edit state
    }

    // Function to save the task edit
    function handleTaskEditSave(id) {
        saveTask(id, taskEdit); // Save the new text to the task
        setTaskEdit(""); // Clear the editing text state
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form className="toDoList" onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask || ""}
                    className="taskInput"
                    onChange={handleChange}
                />
                <button type="submit" className="add-btn">
                    Add Task
                </button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="taskItem">
                        <div>
                            {/* Checkbox to toggle completion */}
                            <input
                                type="checkbox"
                                checked={task.isComplete} 
                                onChange={() => toggleTaskCompletion(task.id)} //Function that toggles completion
                            />
                        {task.isEditing ? (
                            <div>
                                <input
                                    type="text"
                                    value={taskEdit || ""} // Use taskEdit state or task's text
                                    onChange= {handleTaskEditChange} 
                                />
                                <button onClick={() => handleTaskEditSave(task.id)}>Save</button>
                            </div>
                        ) : (
                            <p>{task.text}</p>
                        )}
                        </div>
                        <div className='taskIcons'>
                            <button className="taskIconButton" onClick={() => moveTaskUp(task.id)}>
                                <FontAwesomeIcon icon={faArrowUp} />
                            </button>
                            <button className="taskIconButton" onClick={() => moveTaskDown(task.id)}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                            <button className="taskIconButton" onClick={() => {
                                editTask(task.id);
                                setTaskEdit(task.text); // Set editing text
                            }}>
                                <FontAwesomeIcon icon={faPenToSquare} className="taskIcon" />
                            </button>
                            <button className="taskIconButton" onClick={() => deleteTask(task.id)} disabled={!task.isComplete}> 
                                <FontAwesomeIcon icon={faTrashCan} className="taskIcon" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;