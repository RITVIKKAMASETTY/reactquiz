import React, { useEffect } from 'react'
import { useQuiz,Quizcontext } from '../components/context/Quizcontext'
export default function Timer() {
const {dispatch,secondsremaining}=useQuiz();
const minutes=Math.floor(secondsremaining/60);
const seconds=secondsremaining%60;
    useEffect(function(){const id=setInterval(function(){dispatch({type:"tick"})},1000);return()=>clearInterval(id)},[dispatch])
  return (
    <div className="timer">{minutes<10&&"0"}{minutes}:{seconds<10&&"0"}{seconds}</div>
  )
}
