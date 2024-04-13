function ClockTime(){
    return <p>This is the current time: {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}</p>
}

export default ClockTime;