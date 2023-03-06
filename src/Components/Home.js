import React, { useState } from "react";
import '../App.css'
import Question from "./Question"

function Home() {
  const [count, setcount] = useState(0);

  function forward() {
    setcount(count + 1);
  }
  
  function backward() {
    setcount(count - 1);
  }
  console.log(count)
  return (
    <div className='home_screen'>
      <Question id={count} />
      <div className='buttons'>
        {
          count <= 0 ? '' : <button className='btn left' onClick={backward}
          // disabled={count <= 0}
          >Prev</button>
        }
        {
          count >= 2 ? '' : <button className='btn right' onClick={forward}
          //  disabled={count>=2}
          >Next</button>
        }


      </div>

    </div >
  );
}

export default Home;
