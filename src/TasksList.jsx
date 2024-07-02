import React, { useState } from "react";

const TasksList = () => {
    const [inputValue, setInputValue] = useState('');
    const [description, setDescription] = useState([
        { toDo: "Task1", id: 1, completed: false },
        { toDo: "Task2", id: 2, completed: false }
    ]);

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();

        const newTask = {
            id: description.length + 1,
            toDo: inputValue,
            completed: false
        };

        setDescription(prevDescription => [...prevDescription, newTask]);
        setInputValue('');
    }

    const toggleComplete = (id) => {
        setDescription(prevDescription =>
            prevDescription.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const deleteTask = (id) => {
        setDescription(prevDescription =>
            prevDescription.filter(task => task.id !== id)
        );
    }

    return (
        <div className="cont">
            <div className="title">
                <h1>ToDo List</h1>
            </div>
            <form onSubmit={addTask}>
                <input 
                    type="text" 
                    className="add-input" 
                    value={inputValue} 
                    onChange={onChange}
                />
                <button type="submit" className="add">Add</button>
            </form>
            <div className="cont2">
                <div className="toDO">
                    <h1 className="heading">ToDo</h1>
                    {description.filter(task => !task.completed).map((descr) => (
                        <div key={descr.id}>
                            <p>{descr.toDo}</p>
                            <button onClick={() => toggleComplete(descr.id)}>Complete</button>
                            <button onClick={() => deleteTask(descr.id)}>Delete</button>
                        </div>
                    ))}
                </div>
                <div className="done">
                    <h1 className="heading">Done</h1>
                    {description.filter(task => task.completed).map((descr) => (
                        <div key={descr.id}>
                            <p>{descr.toDo}</p>
                            <button onClick={() => toggleComplete(descr.id)}>Undo</button>
                            <button onClick={() => deleteTask(descr.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TasksList;
