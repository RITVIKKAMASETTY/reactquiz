import React from 'react'
export default function Option({question,dispatch,answer}) {
    const hasanswered=answer!=null;
    console.log(question);
  return (
    <div>
      <div className="options">
        {question.options.map((option,index)=><button className={`btn btn-option ${index===answer?"answer":""} ${hasanswered?index===question.correctOption?"correct":"wrong":""}`} disabled={hasanswered} key={option} onClick={()=>dispatch({type:"newAnswer",payload:index})}>{option}</button>)}
        </div>
    </div>
  )
}
