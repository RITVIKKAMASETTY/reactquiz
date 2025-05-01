import React from 'react'

export default function NextButton({dispatch,answer,index,numquestions}) {
    if(answer==null)return null;
    if(index<numquestions-1)
  return (<button className="btn btn-next" onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>)
    if(index===numquestions-1)
      return (<button className="btn btn-next" onClick={()=>dispatch({type:"finish"})}>Finish</button>)
}
