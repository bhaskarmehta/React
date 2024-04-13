import './App.css'
import CompA from './components/CompA';
import {firstName,lastName} from './UseContext';

function App() {
   const firstNameVal = "Bhaskar";
   const lastNameVal = "Mehta";
  return (
    <>
     <firstName.Provider value={firstNameVal}>
        <lastName.Provider value={lastNameVal}>
            <CompA></CompA>
        </lastName.Provider>
     </firstName.Provider>
    </>
  )
}

export default App
