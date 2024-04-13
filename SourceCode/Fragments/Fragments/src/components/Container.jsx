import styles from './Container.module.css'
function Container({children}){
    return <>
       <div className={styles.myContainer}>{children}</div>
    </>
}

export default Container;