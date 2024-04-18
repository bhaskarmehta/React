import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
 
  const [data, setData] = useState("Ram");

  // useEffect accept two arguments 1) function and 2) array
  // Here useEffect gets called when Page get loaded and it will be called again when there is an update
  // useEffect(()=>{
  //   console.log("My name is Bhaskar Mehta")
  // })

  // To avoid above situation we pass second args along with function and that is an empty array. Now our function will not be called 
  // when there is an update but here one problem is that it will get loaded for only one time but when required data is updated then
  // this will not be called and that is an issue .
  // useEffect(()=>{
  //   console.log("My name is Bhaskar Mehta")
  // },[])


  // If we want to reload or repaint when a data is updated then instead of empty array we can pass the data. And when data
  // updates then this method will be called again.
  useEffect(()=>{
    console.log(`My name is ${data}`)
  },[data])



const logData = ()=>{
   setData("Sita");
}
  const incCount = ()=>{
    setCount(count+1);
  }

  return (
    <>
      <p>Count is {count}</p>
      <button onClick={incCount}>Click Me To Get Count</button>
      <button onClick={logData}>Click Me To Log</button>
    </>
  )
}

export default App
