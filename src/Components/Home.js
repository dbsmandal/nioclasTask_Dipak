import React, { useState,useEffect} from "react";
import '../App.css'
import Question from "./Question";
import QuestionIDs from "./QuestionIDs";

function Home() {
  const [count, setcount] = useState(0);
  const [QuestionID,setQuestionID]=useState();

  function forward() {
    setcount(count + 1);
  }
  
  function backward() {
    setcount(count - 1);
  }
useEffect(()=>{
  setQuestionID(QuestionIDs[count])
})

console.log(QuestionID)

  console.log(count)
  return (
    <div className='home_screen'>
      <Question ids={QuestionID} />
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
