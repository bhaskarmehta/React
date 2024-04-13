import {firstName,lastName} from "../UseContext";

const CompC = ()=>{
  return (
     <>
       <firstName.Consumer>
            {(firstName) => {
                return (
                 <>
                   <lastName.Consumer>
                      {
                        (lastName)=>{
                            return <h1>My name is {firstName} {lastName}</h1>
                        }
                      }
                   </lastName.Consumer>
                 </>

                )

            }}
       </firstName.Consumer>
     </>

  )
   
}

export default CompC;

// return (
//     <>
//         <firstName.Consumer>
//         {
//             (firstName)=>{
//                return(
//                 <lastName.Consumer>
//                  <>
//                   {
//                     (lastName)=>{
//                        return  <><h1>My name is ${firstName} ${lastName}</h1></>
//                     }
//                   }
//                </>)
//                </lastName.Consumer>
//             }
//          }
//         }
//        </firstName.Consumer>
//     </>)