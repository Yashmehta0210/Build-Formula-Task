import React, { useState } from "react";
import './TaskPage.css';

function Task() {

    const [tasks,setTasks]= useState([]);
    const [newTask,setNewTask] = useState('');

    const handleAddTask = () => {
        if(newTask.trim() !== ''){
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const deleteTask=tasks.filter((_, i) => i !== index);
        setTasks(deleteTask);
    }

    const handleUpdateTask = (index, deleteTask) => {
        const updatedTask=tasks.map((task,i) => (i === index ? deleteTask : task))
        setTasks(updatedTask)
    }

    return (
        <div className="task-container">
            <h1 className="task-heading">Task List</h1>

            <input className="task-input" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a new task" />
            <button className="task-button" onClick={handleAddTask}>Add Task</button>

            <ul className="task-list">
                {tasks.map((task,index) => (
                    <li key={index} className="task-list-item">
                       <span className="task-text"> {task}</span>
                        <button className="task-button task-delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button className="task-button task-update-button" onClick={() => handleUpdateTask(index,'Update Task')}>Update</button>
                    </li>
                ) )}
            </ul>
        </div>
    )

}

export default Task;