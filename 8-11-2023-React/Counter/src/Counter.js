import './App.css';
import {useState} from "react";
import React from "react";

function Counter() {
    const [count , setCount] = useState(0);

    const plus = () => {
        if (count !=10) {
            setCount(count + 1);
        }
        else{
            alert("Maksimum 10'a kadar arttırabilirsiniz");

        }
    };

    const minus = () => {
        if (count !=0) {
            setCount(count - 1);
        }    
        else{
            alert("Minimum 0'a kadar azaltabilirsiniz");

        }
    };

  return (
    <div className="App-header">
 <div className="CounterStyle">
<p>Counter = {count} </p>

 <div className="counterBtn">
 <button onClick={plus}>Arttır</button>
<button onClick={minus}>Azaltır</button>
 </div>


 </div>
    </div>
  );
}

export default Counter;
