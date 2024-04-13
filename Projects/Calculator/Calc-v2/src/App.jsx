import "bootstrap/dist/css/bootstrap.min.css"
import Input from "./components/Input"
import Button from "./components/Button"
import styles from './App.module.css'
import { useState } from "react"

function App() {
 let [currentValue, methodToChange] = useState("");
//  console.log(currentValue);
  return (<>
    <div className={styles.container}>
     <Input currentValue={currentValue}/>
     <Button onButtonClick={OnButtonClick}></Button>
    </div>
  </>)
 

function OnButtonClick(buttonText){
  // console.log(buttonText);
  if(buttonText==="C")
  {
    methodToChange("");
  }
  else if(buttonText==="="){
    const result = eval(currentValue);
    methodToChange(result);
  }
  else{
    let newCurrentValue = currentValue + buttonText;
    methodToChange(newCurrentValue);
  }
} 

}

export default App
