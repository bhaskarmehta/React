import styles from "./Button.module.css";

function Button({onButtonClick}){
    
    let buttonNames = ['1','2','3','4','5','6','7','8','9','0','*','/','-','+','C','=']
    return <>
        <div className={styles.buttonDiv}>
            {buttonNames.map(btn=><button onClick={()=> onButtonClick(btn)}>{btn}</button> )}
        </div>
    </>
  
}

export default Button;