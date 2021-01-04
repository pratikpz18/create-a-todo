import React from 'react';

const Form = ({ setInputText,todos,setTodos,inputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text:inputText,id:(new Date().getTime()).toString()},
        ]);
        setInputText("");
    };

    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
            <button onClick={submitTodoHandler} className="todo-button">Add</button>
        </form>
    );
};

export default Form;


