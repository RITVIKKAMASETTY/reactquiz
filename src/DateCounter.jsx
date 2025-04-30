import { useReducer, useState } from "react";
function reducer(state,action){
 switch(action.type){
  case "inc":
    console.log(state);
   return{...state,count:state.count+action.payload}
  case "dec":
    console.log(state);
   return{...state,count:state.count-action.payload}
  case "defineCount":
    console.log(state);
   return{...state,count:action.payload}
  case "defineStep":
    console.log(state);
   return{...state,step:action.payload}
  case "reset":
    console.log(state);
   return{...state,count:0,step:1}
  default:
    console.log(state);
   throw new Error()
 }
}
function DateCounter() {
  // const [count, setCount] = useState(0);
const initialstate={count:0,step:1};
const [state,dispatch]=useReducer(reducer,initialstate);
const {count,step}=state;
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({type:"dec",payload:-1});

  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({type:"inc",payload:1});
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({type:"defineCount",payload:Number(e.target.value)});
  };

  const defineStep = function (e) {
    dispatch({type:"defineStep",payload:Number(e.target.value)});
    //setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    dispatch({type:"reset"});
    //setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
