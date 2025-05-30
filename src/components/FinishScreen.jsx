import React from 'react'
import { useQuiz,Quizcontext} from '../components/context/Quizcontext'

export default function FinishScreen() {
const {points,highscore,maxpoint,dispatch}=useQuiz();
console.log("points=",points,maxpoint);
const percentage=(points/maxpoint)*100;
console.log(percentage);
let emoji;
if(percentage===100) emoji="🥇";
if(percentage>=80 && percentage<100) emoji="🎉";
if(percentage>=50 && percentage<80) emoji="🙌";
if(percentage>=0 && percentage<50) emoji="🤕";
if(percentage===0) emoji="🤦";
  return (<><p className='result'><span>{emoji}</span>you scored<strong>{points}</strong>out of {maxpoint}({Math.ceil(percentage)}%)</p><p className="highscore">(Highscore: {highscore} points)</p><button className="btn btn-ui" onClick={() => dispatch({type:"reset"})}>restart</button></>)
}
