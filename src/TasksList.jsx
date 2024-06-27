import { PureComponent } from "react";

class TasksList extends PureComponent {
    
    state = { 
        inputValue: '',
        description: [
            {toDo: "Task1", id: 1, completed: false}, 
            {toDo: "Task2", id: 2, completed: false}
        ]
    } 

    onChange = (e) => {
        const value = e.target.value;
        this.setState({
            inputValue: value
        });
    }

    addTask = (e) => {
        e.preventDefault();

        const newTask = {
            id: this.state.description.length + 1,
            toDo: this.state.inputValue,
            completed: false
        };

        this.setState(prevState => ({
            description: [...prevState.description, newTask],
            inputValue: ''
        }));
    }

    toggleComplete = (id) => {
        this.setState(prevState => ({
            description: prevState.description.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        }));
    }

    deleteTask = (id) => {
        this.setState(prevState => ({
            description: prevState.description.filter(task => task.id !== id)
        }));
    }

    render() {
        return (
            <div className="cont">
                <div className="title">
                    <h1>ToDo List</h1>
                </div>
                <form onSubmit={this.addTask}>
                    <input 
                        type="text" 
                        className="add-input" 
                        value={this.state.inputValue} 
                        onChange={this.onChange}
                    />
                    <button type="submit" className="add">Add</button>
                </form>
                <div className="cont2">
                    <div className="toDO">
                        <h1 className="heading">ToDo</h1>
                        {this.state.description.filter(task => !task.completed).map((descr) => (
                            <div key={descr.id}>
                                <p>{descr.toDo}</p>
                                <button onClick={() => this.toggleComplete(descr.id)}>Complete</button>
                                <button onClick={() => this.deleteTask(descr.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <div className="done">
                        <h1 className="heading">Done</h1>
                        {this.state.description.filter(task => task.completed).map((descr) => (
                            <div key={descr.id}>
                                <p>{descr.toDo}</p>
                                <button onClick={() => this.toggleComplete(descr.id)}>Undo</button>
                                <button onClick={() => this.deleteTask(descr.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default TasksList;