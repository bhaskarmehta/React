import Heading from "./components/heading";
import TodoInput from "./components/todo-input";
import TodoTasks from "./components/todo-tasks";
import WelcomeMessage from "./components/welcomeMessage";
import './App.css'
import { useState } from "react";
function App(){

let [taskValue,methodToChangeCurrentTask]=useState([]);

const handleDeleteItem = (todoItemName)=>{
  const newTodoItems = taskValue.filter(item => item.task !== todoItemName);
  methodToChangeCurrentTask(newTodoItems);
  // console.log(`Item Deleted ${todoItemName}`);
 }

  return <center className="todo-container">
       <Heading></Heading>
       <TodoInput addTask={addTask}></TodoInput>
       {taskValue.length===0 && <WelcomeMessage tasks={taskValue}></WelcomeMessage>}
       <TodoTasks deleteItem={handleDeleteItem} tasks={taskValue}></TodoTasks>
  </center>

  function addTask(newTask,dueDate) {
    const newTodoItems = [...taskValue,{task: newTask,
    dueDate: dueDate}]
    methodToChangeCurrentTask(newTodoItems);
    
    // console.log(`Items are ${newTask} and ${dueDate}`);
    
  }
 
}

export default App;