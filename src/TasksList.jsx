import React, { useState } from "react";

const TasksList = () => {
    const [inputValue, setInputValue] = useState('');
    const [description, setDescription] = useState([
        { toDo: "Task1", id: 1, completed: false },
        { toDo: "Task2", id: 2, completed: false }
    ]);
 
 

    return (
        <div className="container">
            <div>
                <h3>Backlog</h3>
                <input type="text" />
            </div>
            <div>
                <h3>In progress</h3>
                <input type="text" />
            </div>
            <div>
                <h3>Done</h3>
                <input type="text" />
            </div>
        </div>
    );
}

export default TasksList;