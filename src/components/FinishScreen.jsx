import React from 'react'


export default function FinishScreen({points,maxpoints,highscore,dispatch}) {
console.log("points=",points,maxpoints);
const percentage=(points/maxpoints)*100;
let emoji;
if(percentage===100) emoji="🥇";
if(percentage>=80 && percentage<100) emoji="🎉";
if(percentage>=50 && percentage<80) emoji="🙌";
if(percentage>=0 && percentage<50) emoji="🤕";
if(percentage===0) emoji="🤦";
  return (<><p className='result'><span>{emoji}</span>you scored<strong>{points}</strong>out of {maxpoints}({Math.ceil(percentage)}%)</p><p className="highscore">(Highscore: {highscore} points)</p><button className="btn btn-ui" onClick={() => dispatch({type:"reset"})}>restart</button></>)
}
