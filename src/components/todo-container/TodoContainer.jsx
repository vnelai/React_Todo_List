import React, { useState } from 'react';
import ToDoList from '../todo-list/ToDoList'
import { v4 as uuidv4 } from 'uuid';
import './TodoContainer.css'; // Import the CSS file



function TodoContainer() {
    //Variables for useState
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

     //Function that handles changes in the input field
     function handleChange(event) {
        setNewTask(event.target.value);
    }

    // Function to add a new task
    function addTask(event) {
        event.preventDefault();
        if (newTask.trim() == "") return; //Prevent users adding empty tasks
        const newTaskObject = { 
            id: uuidv4(), 
            text: newTask,
            iscompleted: false,
            isEditing: false,
        };
        setTasks((prevTasks)=>[newTaskObject,...prevTasks ]);
        setNewTask(""); //To clear the input filed after adding the task in tasks array
    }

    //Function to delete a task
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // Function to edit a task
    function editTask(id) {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, isEditing: !task.isEditing } : task
        ));
    }

    // Function to save edited task 
    function saveTask(id, newText) {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, text: newText, isEditing: false } : task
        ));
    }

    //Function to move task up
    function moveTaskUp(id) {
        const index = tasks.findIndex(task => task.id === id)
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }  
    }

    //Function to move task down
    function moveTaskDown(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index +1 ]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    //Function to toggle checkbox completion
    function toggleTaskCompletion(id) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    const updatedTask = { ...task, isComplete: !task.isComplete };
                    return updatedTask;
                }
                return task;
            })
        );
    }
    

  return (
    <div className='todoContainer'>
        <ToDoList 
        tasks = {tasks}
        addTask={addTask}
        handleChange={handleChange}
        newTask={newTask}
        deleteTask={deleteTask}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
        editTask={editTask}
        saveTask={saveTask}
        toggleTaskCompletion={toggleTaskCompletion}
        />
    
    </div>
  );
}

export default TodoContainer
