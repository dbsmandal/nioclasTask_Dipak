import React, { useEffect, useState } from 'react';
import QuestionIDs from './QuestionIDs';
import axios from 'axios';
import { MathJaxContext, MathJax } from 'better-react-mathjax';


const Question = (props) => {
    const [currentQuestion, setCurrentQuestin] = useState([]);

    useEffect(() => {
        const APi = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuestionIDs[props.id]}`
        axios.get(APi)
            .then((res) => {
                setCurrentQuestin(res.data)
                console.log(currentQuestion)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [props.id])
    return (
        <div className='question_div'>
            {currentQuestion.map((item, i) => {
                return (
                    <div key={i}>
                        <MathJaxContext>
                            <MathJax>
                                <p> Questions Id is : {item.QuestionID}</p>
                                <p>Questions : {item.Question}</p>
                            </MathJax>
                        </MathJaxContext>
                    </div>
                )
            })}
        </div>
    )
}

export default Question
