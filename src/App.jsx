import { useEffect,useReducer } from 'react'
import './App.css'
import Header from './Header'
import Mainn from './Mainn'
import Loader from './Loader';
import Error from './Error'
import StartSCreen from './StartSCreen';
import QUESTION from './QUESTION.jsx';
const initialstate={
  questions:[],
  status:"loading",
  index:0,
  answer:null,
  points:0,
  highscore:0
}
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case 'start':
      return{...state,status:"active"}
    default:
      return state;
  }
}
function App() {
useEffect(function(){
  fetch("http://localhost:3001/questions")
  .then((res)=>res.json())
  .then((data)=>dispatch({type:"dataRecived",payload:data}))
  .catch((err)=>dispatch({type:"dataFailed"}))
},[]);
const [{questions,status},dispatch]=useReducer(reducer,initialstate);
const numquestion=questions.length;
  return (
  <div className="app">
    <Header/>
    <Mainn>
{status==="loading" && <Loader/>}
{status==="error" && <Error/>}
{status==="ready"&&<StartSCreen numquestion={numquestion} dispatch={dispatch}/>}
{status==="active"&&<QUESTION/>}
    </Mainn>
  </div>
  )
}

export default App
