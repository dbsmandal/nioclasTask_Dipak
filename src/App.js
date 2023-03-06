import React, { useState } from "react";
import './App.css'
import Question from "./Components/Question";

function App() {
  const [count, setcount] = useState(0);

 
  function forward() {
    setcount(count + 1);
  }
  function backward() {
    setcount(count - 1);
    
  }
  return (
    <div className='home_screen'>
      <Question id={count} />
      <div className='buttons'>
      <button className='btn left' onClick={backward} disabled={count<=0}
       >Prev</button>
      <button className='btn right' onClick={forward} disabled={count>=2}
       >Next</button> 

    </div>

    </div >
  );
}

export default App;
