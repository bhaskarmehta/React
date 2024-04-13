import Heading from "./components/heading";
import TodoInput from "./components/todo-input";
import TodoTasks from "./components/todo-tasks";
import WelcomeMessage from "./components/welcomeMessage";
import TaskValueContext from "./store/TodoContext";
import './App.css'
import { useState } from "react";
function App(){

let [todoItems,methodToChangeCurrentTask]=useState([]);

const deleteItem = (todoItemName)=>{
  const newTodoItems = todoItems.filter(item => item.task !== todoItemName);
  methodToChangeCurrentTask(newTodoItems);
  // console.log(`Item Deleted ${todoItemName}`);
 }

 const  addNewItem = (newTask,dueDate) =>{
  const newTodoItems = [...todoItems,{task: newTask,
  dueDate: dueDate}]
  methodToChangeCurrentTask(newTodoItems);
  
  // console.log(`Items are ${newTask} and ${dueDate}`);
  
}

  return(
    <TaskValueContext.Provider value={{
      todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem
      }}>
         <center className="todo-container">
              <Heading></Heading>
              <TodoInput></TodoInput>
              <WelcomeMessage></WelcomeMessage>
              <TodoTasks></TodoTasks>
         </center>
    </TaskValueContext.Provider>
  );
 
}



export default App;