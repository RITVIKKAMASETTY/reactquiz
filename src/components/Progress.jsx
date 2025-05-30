import React from 'react'
import { useQuiz,Quizcontext } from '../components/context/Quizcontext'
export default function Progress() {
  const {index,answer,points,numquestion,maxpoint}=useQuiz();
  return (
 <header className="progress">
  <progress max={numquestion} value={index+Number(answer!=null)}></progress> {/*Number(false)==0 and Number(true)==1 */}
    <p>Question<strong>{index+1}</strong>/{numquestion}</p>
    <p><strong>{points}</strong>/{maxpoint}</p>
 </header>
  )
}
