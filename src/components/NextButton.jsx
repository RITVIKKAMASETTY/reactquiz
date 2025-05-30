import React from 'react'
import { useQuiz,Quizcontext } from '../components/context/Quizcontext'
export default function NextButton() {
  const {index,answer,numquestion,dispatch}=useQuiz();
console.log("index",index,"answer",answer,"numberofquestions",numquestion);
    if(answer==null)return null;
    if(index<numquestion-1)
  return (<button className="btn btn-next" onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>)
    if(index===numquestion-1)
      return (<button className="btn btn-next" onClick={()=>dispatch({type:"finish"})}>Finish</button>)
}
