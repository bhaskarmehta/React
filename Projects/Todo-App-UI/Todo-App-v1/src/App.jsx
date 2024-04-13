import Heading from "./components/heading";
import TodoInput from "./components/todo-input";
import TodoTask1 from "./components/todo-task1";
import TodoTask2 from "./components/todo-task2";
import './App.css'
function App(){

  return <center className="todo-container">
       <Heading></Heading>
       <TodoInput></TodoInput>
       <TodoTask1></TodoTask1>
       <TodoTask2></TodoTask2>
  </center>
}

export default App;