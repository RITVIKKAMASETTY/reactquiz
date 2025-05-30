import React from 'react'
import Option from './Option'
import { useQuiz,Quizcontext} from '../components/context/Quizcontext'
export default function QUESTION() {
const {questions,dispatch,answer,index}=useQuiz();
const Question=questions.at(index);
return (
    <div>
      <h4>{Question.question}</h4>
      <Option question={Question}/>
    </div>
  )
}
