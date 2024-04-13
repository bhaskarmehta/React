function TodoInput(){
    return <div class="container my-row">
    <div class="row">
      <div class="col-5 input-col">
        <input  type="text" placeholder="Enter your TODO Here" />
      </div>
      <div class="col-5 input-col">
        <input type="date" />
      </div>
      <div class="col-2 button-col">
         <button type="button" class="btn btn-primary my-button">ADD</button>
      </div>
    </div>
  </div>
}

export default TodoInput;