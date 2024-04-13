import styles from "./PrintName.module.css"
function PrintName({username}){
    return <>
      <h1 className={styles.myname}>My name is {username}</h1>
    </>
}

export default PrintName;