import { useReducer } from "react";

const initialState=0;
const reducer = (state,action)=>{
    switch(action){
        case "Increment":
            return state+=1;
        case "Decrement":
            return state-=1;
        default:
            return state=0;        
    }
}
const Counter = ()=>{
  const [count,dispatch] = useReducer(reducer,initialState) // Here reducer() will take two args 1st is that initialState and second the action that is dispatched by dispatch()
   return (
    <center>
      <div> Count is {count}</div>
      <button onClick={()=>{dispatch("Increment")}}>Inc</button>
      <button onClick={()=>{dispatch("Decrement")}}>Dec</button>
    </center>
   )
}

export default Counter;