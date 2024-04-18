import { useEffect } from "react";
import { useState } from "react";

function ClockTime(){
    const [time,setTime] = useState(new Date());

    useEffect(()=>{
            const interValId = setInterval(()=>{
                setTime(new Date());
          },1000);

          return ()=>{
            clearInterval(interValId);
          }
    },[]);
    return <p>This is the current time: {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}</p>
}

export default ClockTime;