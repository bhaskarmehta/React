import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";

function TodoInput({ addTask }) {
  const [item, setItem] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleInputChange = (event) => {
    // console.log(event)
      setItem(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event)
      setDueDate(event.target.value);
  };

  const handleAddTask = (event) => {
      event.preventDefault();
      addTask(item, dueDate);
      // Clear input fields after adding task if needed
      setItem('');
      setDueDate('');
  };

  return (
      <div className="container my-row">
          <form className="row" onSubmit={handleAddTask}>
              <div className="col-5 input-col">
                  <input type="text" placeholder="Enter your TODO Here" value={item} onChange={handleInputChange} />
              </div>
              <div className="col-5 input-col">
                  <input type="date" value={dueDate} onChange={handleDateChange} />
              </div>
              <div className="col-2 button-col">
                  {/* <button type="button" className="btn btn-primary my-button" onClick={handleAddTask}>ADD</button> */}
                  <button className="btn btn-primary my-button"><IoIosAddCircle /></button>
              </div>
          </form>
        </div>
  );
}

export default TodoInput;
