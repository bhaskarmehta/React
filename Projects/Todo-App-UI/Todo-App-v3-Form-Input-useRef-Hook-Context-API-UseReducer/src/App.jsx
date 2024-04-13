import Heading from "./components/heading";
import TodoInput from "./components/todo-input";
import TodoTasks from "./components/todo-tasks";
import WelcomeMessage from "./components/welcomeMessage";
import TaskValueContext from "./store/TodoContext";
import './App.css'
import { useReducer } from "react";

const todoItemReducer = (todoItems,action)=>{
  let newTodoItems = todoItems
  if(action.type==="NEW_ITEM"){
     newTodoItems = [...todoItems,{task: action.payload.todoItem,
     dueDate: action.payload.dueDate}]
  }
  else if(action.type==="DELETE_ITEM"){
    newTodoItems = todoItems.filter(item => item.task !== action.payload.todoItem);
  }
 return newTodoItems;
}
function App(){

// let [todoItems,methodToChangeCurrentTask]=useState([]);
const [todoItems,dispatchTodoItem]=useReducer(todoItemReducer,[])

const deleteItem = (todoItemName)=>{
  const deleteItemAction = {
    type: "DELETE_ITEM",
    payload: {
      todoItem:todoItemName,
    }
}
  dispatchTodoItem(deleteItemAction);
}

 const  addNewItem = (todoItem,dueDate) =>{
  const newItemAction = {
    type: "NEW_ITEM",
    payload: {
      todoItem,
      dueDate
    }
}
 dispatchTodoItem(newItemAction);
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