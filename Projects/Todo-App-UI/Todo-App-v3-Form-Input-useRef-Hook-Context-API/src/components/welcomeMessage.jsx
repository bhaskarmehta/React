import { useContext } from "react";
import TaskValueContext from "../store/TodoContext";
function WelcomeMessage(){
    const {todoItems} = useContext(TaskValueContext);
    return <> 
       {todoItems.length===0 &&  <h1>Enjoy Your Day</h1>}
    </>
}

export default WelcomeMessage;