import React, { useContext, useRef } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import TaskValueContext from '../store/TodoContext';

function TodoInput() {
  const {addNewItem} = useContext(TaskValueContext);  
  const todoItemName = useRef();
  const todoDueDate = useRef();

  const handleAddTask = (event) => {
      event.preventDefault();
      const item =todoItemName.current.value;
      const dueDate = todoDueDate.current.value;
      addNewItem(item, dueDate);
      todoItemName.current.value="";
      todoDueDate.current.value="";
  };

  return (
      <div className="container my-row">
          <form className="row" onSubmit={handleAddTask}>
              <div className="col-5 input-col">
                  <input type="text" ref={todoItemName} placeholder="Enter your TODO Here" />
              </div>
              <div className="col-5 input-col">
                  <input type="date" ref={todoDueDate}/>
              </div>
              <div className="col-2 button-col">
                  <button className="btn btn-primary my-button"><IoIosAddCircle /></button>
              </div>
          </form>
        </div>
  );
}

export default TodoInput;
