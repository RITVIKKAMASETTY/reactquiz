import React, { useEffect } from 'react'

export default function Timer({dispatch,secondsremaining}) {
const minutes=Math.floor(secondsremaining/60);
const seconds=secondsremaining%60;
    useEffect(function(){const id=setInterval(function(){dispatch({type:"tick"})},1000);return()=>clearInterval(id)},[dispatch])
  return (
    <div className="timer">{minutes<10&&"0"}{minutes}:{seconds<10&&"0"}{seconds}</div>
  )
}
