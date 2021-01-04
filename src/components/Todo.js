import React from 'react';

const Todo = ({ text, todo, todos, setTodos}) => {
    const deletehandler = () =>{
        setTodos(todos.filter((task) => task.id !== todo.id ))
    }
    return(
        <div className = "task-li">
            <li>{text}</li>
            <button className="btn" onClick={deletehandler}>X</button>
        </div>
    );
};

export default Todo;