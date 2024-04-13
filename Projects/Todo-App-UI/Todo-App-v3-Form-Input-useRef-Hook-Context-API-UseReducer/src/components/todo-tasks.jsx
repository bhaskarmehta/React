import styles from "./todo-tasks.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import TaskValueContext from "../store/TodoContext";


function TodoTasks(){
  const {todoItems,deleteItem} = useContext(TaskValueContext);
  return <>
      {todoItems.map((item)=>(
          <div key={item.task} className={`container ${styles.task_row}`}>
                <div  className={`row ${styles.task_item}`}>
                 <div className="col-5">
                    <p key={item.task}>{item.task}</p>
                  </div>
                 <div className="col-5">
                   <p key={item.dueDate}>{item.dueDate}</p>
                 </div>
                
                 <div className="col-2">
                   {/* <button key={item.task} type="button" onClick={()=>deleteItem(item.task)} className={`btn btn-primary ${styles.my_button}`} >Delete</button> */}
                   <button key={item.task} type="button" onClick={()=>deleteItem(item.task)} className={`btn btn-primary ${styles.my_button}`} ><MdDelete /></button>
                 </div>
                </div>
            </div>     
        ))}
    </>
}

export default TodoTasks;