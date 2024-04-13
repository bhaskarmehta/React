import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClockHeading from './ClockHeading'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClockSlogan from './ClockSlogan'
import ClockTime from './ClockTime'


function App() {
  return <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
  </center> 
}

export default App
