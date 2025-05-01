import React from 'react'

export default function Progress({index,numquestions,points,maxpoints,answer}) {
  return (
 <header className="progress">
  <progress max={numquestions} value={index+Number(answer!=null)}></progress> {/*Number(false)==0 and Number(true)==1 */}
    <p>Question<strong>{index+1}</strong>/{numquestions}</p>
    <p><strong>{points}</strong>/{maxpoints}</p>
 </header>
  )
}
