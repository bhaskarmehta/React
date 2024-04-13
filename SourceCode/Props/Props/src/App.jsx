import Square from "./components/Square";
import Sum from "./components/Sum";
import PrintName from "./components/PrintName";

function App() {
  let numbers = [1,2,3,4,5]
  let name="Bhaskar";
  return (<>
     <Sum nums = {numbers}></Sum>
     <br />
     <Square numSquare={numbers}></Square>
     <br />
     <PrintName username={name}></PrintName>

  </>)
}

export default App
