import React, { useState } from 'react'; 

const Done = () => {
    const [inputValue, setInputValue] = useState('')
    const [description, setDescription] = useState([
        { toDo: 'Task1', id: 1, completed: false },
        { toDo: 'Task2', id: 2, completed: false }
    ]);

    const colors = ["#3d99e2", "#3d99e2","#fac622","#92ce54"]
    const random = colors[Math.floor(Math.random() * colors.length)]

    const taskSyle = {
        height: "50px",
        margin: '10px 0',
        border: `1px solid ${random}`,
        borderLeft: `6px solid ${random}`,
        display: 'inline-block',
        transition: '0.2s ease-in',
        paddingLeft: '20px',
        borderRadius: '7px',
        outline: 'none',
    }

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newTask = {
            id: description.length + 1,
            toDo: inputValue,
            completed: false
        }

        setDescription((prevDescription) => [...prevDescription, newTask]);
        setInputValue('');
    }

    const addstyle = {
        width: '115%',
        backgroundColor: '#ffffff',
        borderRadius: '5px'
    }

    const linestyle = {
        width: '300px',
        height: '3px',
        backgroundColor: 'green',
        margin: '5px auto'
    }

    const h3style = {
        paddingTop: '15px',
        paddingLeft: '25px',
        color: 'gray'
    }

    const marginbottom = {
        paddingTop: '10px',
        border: 'none'
    }

    const formstyle = {
        marginLeft: '22px'
    }

    const addbtn = {
        backgroundColor: '#ffffff',
        border: 'none',
        color: 'gray',
        fontSize: '30px',
        cursor: 'pointer'
    }

    return (
        <div>
            <div style={addstyle}>
                <h3 style={h3style}>Done</h3>
                <div style={linestyle}></div>
                <form style={formstyle} onSubmit={addTask}>
                    <ul>
                        {description.map((task) => (
                            <li key={task.id}>
                                <span style={taskSyle}>
                                    {task.toDo}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <button className='add-btn' type='submit' style={addbtn}>+</button>
                    <input
                        type="text"
                        style={marginbottom}
                        value={inputValue}
                        onChange={onChange}
                    />
                </form>
            </div>
        </div>
    );
};

export default Done
