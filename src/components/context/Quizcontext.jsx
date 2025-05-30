import React, { createContext } from 'react'
import { useReducer, useEffect } from 'react';
const SECONDSPERQUESTION=30;
const initialstate={
  questions:[],
  status:"loading",
  index:0,
  answer:null,
  points:0,
  highscore:0,
  secondsremaining:null,
}
const QuizContext=createContext();
function reducer(state, action) {
    switch (action.type) {
      case "dataRecived":
        return { ...state, questions: action.payload, status: "ready" };
      case "dataFailed":
        return { ...state, status: "error" };
      case 'start':
        return{...state,status:"active",secondsremaining:state.questions.length*SECONDSPERQUESTION}
      case 'newAnswer': {
        const question = state.questions.at(state.index);
        return { ...state, answer: action.payload, points: action.payload === question.correctOption ? state.points+question.points:state.points };
      }
      case 'nextQuestion':
        return{...state,index:state.index+1,answer:null}
      case 'finish':
        return{...state,status:"finished",highscore:state.points>state.highscore?state.points:state.highscore}
      case 'finished':
        return{}
      case 'reset':
        console.log("reset")
        return{...state,status:"ready",points:0,index:0,answer:null,questions:state.questions,secondsremaining:10}
      case 'tick':
        return{...state,secondsremaining:state.secondsremaining-1,status:state.secondsremaining===0?"finished":state.status}
      default:
        return state;
    }
  }  
function Quizcontext({children}) {
    useEffect(function(){
        fetch("http://localhost:3001/questions")
        .then((res)=>res.json())
        .then((data)=>dispatch({type:"dataRecived",payload:data}))
        .catch((err)=>dispatch({type:"dataFailed"}))
      },[]);
      const [{questions,status,index,answer,points,highscore,secondsremaining},dispatch]=useReducer(reducer,initialstate);
      const numquestion=questions.length;
      const maxpoint=questions.reduce((prev,curr)=>prev+curr.points,0);
  return (<QuizContext.Provider value={{questions,status,index,answer,points,highscore,secondsremaining,numquestion,maxpoint,dispatch}}>{children}</QuizContext.Provider>);
}
function useQuiz(){
  const context=React.useContext(QuizContext);
  if(context===undefined){
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
export{useQuiz,Quizcontext};