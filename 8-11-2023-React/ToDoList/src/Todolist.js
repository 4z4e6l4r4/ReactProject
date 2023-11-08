import './App.css';
import React, { useState } from "react";


function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [newtodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newtodo) {
            setTodos([...todos, newtodo]);
            setNewTodo("");
        }
    };

    return (
        <div className="list">
            <h2>Add Duty</h2>
            <ul className="listul">
                {todos.map((todo, index) => ( 
            <li key = {index}> 
                {todo}&nbsp;
                
            </li>
                ))}

            </ul>

            <input className="inputBtn" type="text"
                value={newtodo}
                onChange={
                    (e) => {
                        setNewTodo(e.target.value);
                    }
                }
            />

            <button className="listBtn" onClick={addTodo}>
                Add
            </button>

        </div>
    );
}

export default ToDoList;
