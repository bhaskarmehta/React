

function App() {
  let numbers = [1,2,3,4,5,6];
  let num=6;

  return (
    <> 
      {/* Teranry Operator */}
       {numbers.includes(num)? <p>{num} is Present</p> : <p>{num} is not present</p>}
    </>
  )
}

export default App
