import "bootstrap/dist/css/bootstrap.min.css"
import Input from "./components/Input"
import Button from "./components/Button"
import styles from './App.module.css'

function App() {
  return (<>
    <div className={styles.container}>
     <Input/>
     <Button></Button>
    </div>
  </>)

}

export default App
