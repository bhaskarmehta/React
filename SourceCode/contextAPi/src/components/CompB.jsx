
// import CompC from "./CompC";
// const CompB = ()=>{
//     return <>
//        <CompC></CompC>
//     </>
// }

// export default CompB;



// Now we will see about useContext api , in CompC we have seen about consumer. useContext is used to simplified consumer.

import { useContext } from "react";
import {firstName,lastName} from "../UseContext";

const CompB = ()=>{
    const fname = useContext(firstName);
    const lname = useContext(lastName);
    return <>
       <h1>Hello ! My name is {fname} {lname}</h1>
    </>
}

export default CompB;