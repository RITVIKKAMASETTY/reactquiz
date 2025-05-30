import { useEffect,useReducer } from 'react'
import './App.css'
import Header from './Header.jsx'
import Mainn from './Mainn.jsx'
import Loader from './Loader.jsx';
import Error from './Error.jsx'
import StartSCreen from './StartSCreen.jsx';
import QUESTION from './QUESTION.jsx';
import NextButton from './NextButton.jsx';
import Progress from './Progress.jsx';
import FinishScreen from './FinishScreen.jsx';
import Footer from './Footer.jsx';
import Timer from './Timer.jsx';
import {useQuiz,Quizcontext} from './context/Quizcontext.jsx';
// const SECONDSPERQUESTION=30;
// const initialstate={
//   questions:[],
//   status:"loading",
//   index:0,
//   answer:null,
//   points:0,
//   highscore:0,
//   secondsremaining:null,
// }
// function reducer(state, action) {
//   switch (action.type) {
//     case "dataRecived":
//       return { ...state, questions: action.payload, status: "ready" };
//     case "dataFailed":
//       return { ...state, status: "error" };
//     case 'start':
//       return{...state,status:"active",secondsremaining:state.questions.length*SECONDSPERQUESTION}
//     case 'newAnswer': {
//       const question = state.questions.at(state.index);
//       return { ...state, answer: action.payload, points: action.payload === question.correctOption ? state.points+question.points:state.points };
//     }
//     case 'nextQuestion':
//       return{...state,index:state.index+1,answer:null}
//     case 'finish':
//       return{...state,status:"finished",highscore:state.points>state.highscore?state.points:state.highscore}
//     case 'finished':
//       return{}
//     case 'reset':
//       console.log("reset")
//       return{...state,status:"ready",points:0,index:0,answer:null,questions:state.questions,secondsremaining:10}
//     case 'tick':
//       return{...state,secondsremaining:state.secondsremaining-1,status:state.secondsremaining===0?"finished":state.status}
//     default:
//       return state;
//   }
// }  
function App() {
  const {questions,status,index,answer,points,highscore,secondsremaining,numquestion,maxpoint,dispatch}=useQuiz();
// useEffect(function(){
//   fetch("http://localhost:3001/questions")
//   .then((res)=>res.json())
//   .then((data)=>dispatch({type:"dataRecived",payload:data}))
//   .catch((err)=>dispatch({type:"dataFailed"}))
// },[]);
// const [{questions,status,index,answer,points,highscore,secondsremaining},dispatch]=useReducer(reducer,initialstate);
// const numquestion=questions.length;
// const maxpoint=questions.reduce((prev,curr)=>prev+curr.points,0);
  return (
  <div className="app">
    <Header/>
    <Mainn>
{status==="loading" && <Loader/>}
{status==="error" && <Error/>}
{status==="ready"&&<StartSCreen numquestion={numquestion} dispatch={dispatch}/>}
{status==="active"&&<><Progress index={index} numquestions={numquestion} points={points} maxpoints={maxpoint} answer={answer}/><QUESTION  question={questions[index]} dispatch={dispatch} answer={answer}/><Footer><Timer dispatch={dispatch} secondsremaining={secondsremaining}/><NextButton dispatch={dispatch} answer={answer} index={index} numquestions={numquestion}/></Footer></>}
{status==="finished"&&<FinishScreen points={points} maxpoints={maxpoint} highscore={highscore}dispatch={dispatch}/>}
    </Mainn>
  </div>
  )
}

export default App
