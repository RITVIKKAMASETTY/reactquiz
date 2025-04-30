import React from 'react';
import "./App.css";
export default function StartSCreen({numquestion,dispatch}) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numquestion} number of questions to test your react mastery</h3>
      <button className="btn btn-ui" onClick={dispatch({type:"start"})}>Let us start</button>
    </div>
  )
}
