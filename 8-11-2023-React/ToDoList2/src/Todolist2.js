import './App.css';
import React, { useState } from "react";


function Todolist2() {
  const [ list, setList ] = useState([]);
  const [ newHeader, setHeader ] = useState("");
  const [ newDescription, setDescription ] = useState("");

  const addToList = () => {
    setList([...list, {newHeader, newDescription}]);
    setHeader("");
    setDescription("");
  }

  const deleteItem = (deleteIndex) => {
    setList(list.filter(((item,index) => index !== deleteIndex)));
  }



return (
  <div className="App">
    <h2>Add Duty and Description</h2>
    <ul className="listul">
    {list.map((todo, index) => ( 
            <li key = {index}> 
                {todo.newHeader}&nbsp;
                {todo.newDescription}&nbsp;&nbsp;
                <button className='listBtn' onClick={() => deleteItem(index)}>Delete </button>
            </li>
                ))}

    </ul>

    <input className="inputBtn" type="text"
      value={newHeader}
      onChange={
        (e) => {
          setHeader(e.target.value);
        }
      }/>

    <input className="inputBtn" type="text"
      value={newDescription}
      onChange={
        (e) => {
          setDescription(e.target.value);
        }
      }/>

    <button className="listBtn" onClick={addToList}>
      Add
    </button>

  </div>
);
}

export default Todolist2;
