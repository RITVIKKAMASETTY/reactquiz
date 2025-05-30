import React from 'react';
import { useQuiz,Quizcontext} from '../components/context/Quizcontext';
export default function Option({question}) {
const {answer,dispatch}=useQuiz();
console.log(answer);
    const hasanswered=answer!=null;
  return (
    <div>
      <div className="options">
        {question.options.map((option,index)=><button className={`btn btn-option ${index===answer?"answer":""} ${hasanswered?index===question.correctOption?"correct":"wrong":""}`} disabled={hasanswered} key={option} onClick={()=>dispatch({type:"newAnswer",payload:index})}>{option}</button>)}
        </div>
    </div>
  )
}
