import styles from "./Button.module.css";

function Button(){

    let buttonNames = ['1','2','3','4','5','6','7','8','9','0','*','/','-','+','C']
    return <>
        <div className={styles.buttonDiv}>
            {buttonNames.map(btn=><button>{btn}</button> )}
        </div>
    </>
  
}

export default Button;