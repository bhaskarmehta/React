// function InputBox({buttonOnChange,addItem}){
//      return <>
//         <input type="text" onChange={(event)=>buttonOnChange(event)} placeholder='Enter your text here' />
//         <span><button onClick={addItem}>Add</button></span>
//      </>
// }

function InputBox({handleKeyDown}){
   return <>
      <input type="text" onKeyDown={handleKeyDown} placeholder='Enter your text here' />
   </>
}

export default InputBox;