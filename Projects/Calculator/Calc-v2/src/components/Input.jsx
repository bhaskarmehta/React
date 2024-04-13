import styles from "./Input.module.css"

function Input({currentValue}){
    return <>
         <input type="text" readOnly value={currentValue} />
    </>
}

export default Input;