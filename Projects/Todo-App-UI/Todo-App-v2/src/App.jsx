import Heading from "./components/heading";
import TodoInput from "./components/todo-input";
import TodoTasks from "./components/todo-tasks";
import './App.css'
function App(){

  let todoTasks = [{
     task: "Study",
     dueDate: "15/3/2024"
  },{
    task: "Play",
    dueDate: "15/3/2024"
 },
 {
  task: "Watch Movie",
  dueDate: "15/3/2024"
},{
  task: "Watch Cricket",
  dueDate: "15/3/2024"
},
];

  return <center className="todo-container">
       <Heading></Heading>
       <TodoInput></TodoInput>
       <TodoTasks tasks={todoTasks}></TodoTasks>
  </center>
}

export default App;