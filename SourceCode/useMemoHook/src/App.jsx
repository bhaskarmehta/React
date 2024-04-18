// This code shows the problem if we do not use useMemo hook
// import { useState } from 'react'

// function App() {
//   const [add, setAdd] = useState(0);
//   const [minus, setMinus] = useState(100);

//   const multuply = () =>{
//     console.log("Hello");
//     return add*10;
//   }

//   return (
//     <>
//      When a Addition is called then only multiply() should have been called but in this case it is being called when 
//      we called subtraction as well. It means that multiply() is being called unneccessary that can cause a performance issue.
//      To avoiud this sitiation we use useMemo Hook as -
//       <span>Multiply {multuply()}</span> 
//       <br />
//       <button onClick={()=>{setAdd(add+1)}}>Addition</button>
//       <span>{add}</span>
//       <br />
//       <button onClick={()=>{setMinus(minus-1)}}>Substraction</button>
//       <span>{minus}</span>
//     </>
//   )
// }

import { useMemo } from 'react';
import { useState } from 'react'

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
 
  const multuply = () =>{
    console.log("Hello");
    return add*10;
  }
  const multiplication = useMemo(multuply,[add]) // useHook takes two args 1) Function and 2) Dependencies based on this function should run

  return (
    <>
     {/* When a Addition is called then only multiply() should have been called but in this case it is being called when 
     we called subtraction as well. It means that multiply() is being called unneccessary that can cause a performance issue.
     To avoiud this sitiation we use useMemo Hook as - */}
      <span>Multiply {multiplication}</span> 
      <br />
      <button onClick={()=>{setAdd(add+1)}}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={()=>{setMinus(minus-1)}}>Substraction</button>
      <span>{minus}</span>
    </>
  )
}

export default App
