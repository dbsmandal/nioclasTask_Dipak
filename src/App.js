import React, {  useState } from "react";
import './App.css'
import Question from "./Components/Question";

function App() {
  const [count, setcount] = useState(0);
  function forward() {
    setcount(count + 1)
  }
  function backward() {
    setcount(count - 1);
  } 

  return (
    <div>
      <Question id={count} />
      <div className='buttons'>
        {
          count <= 0 ? <button className='button' onClick={backward} disabled >Prev</button> : <button className='button' onClick={backward}>Prev</button>
        }

        {count >= 2 ? <button className='button' onClick={forward} disabled >Next</button> : <button className='button' onClick={forward}  >Next</button>}

      </div>

    </div>
  );
}

export default App;
