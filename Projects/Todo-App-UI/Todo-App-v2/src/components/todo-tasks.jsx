import styles from "./todo-tasks.module.css"

function TodoTasks({tasks}){
  return <>
      { tasks.map((item)=>(
          <div className={`container ${styles.task_row}`}>
                <div className={`row ${styles.task_item}`}>
                 <div class="col-5">
                    <p key={item.task}>{item.task}</p>
                  </div>
                 <div className="col-5">
                   <p key={item.dueDate}>{item.dueDate}</p>
                 </div>
                
                 <div className="col-2">
                   <button key={item.task} type="button" className={`btn btn-primary ${styles.my_button}`}>Delete</button>
                 </div>
                </div>
            </div>     
        ))}
    </>
}

export default TodoTasks;