import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import Heading from './components/Heading';
import InputBox from './components/InputBox';
import ItemsAndButtons from './components/ItemsAndButtons';
import { useState } from 'react';

function App() {
  // let foodItems = ['Dal','Roti','Salad','Vegetable','Milk','Apple'];

  // // let textStateArr= useState("Enter your text here"); // useState returns an array of two elements ,first one is current value and second element is a function that allows you to update the state
  // // // If we want to set any initial value then we can pass it in useState();
  // // let textStateVal = textStateArr[0];
  // // let textStateMethod = textStateArr[1];

  // // Here we will use Array destructuring of this array as - 
  // let  [textStateVal, textStateMethod] = useState();
  // // console.log(`Current value of textStateVal is ${textStateVal}`);

  // function ButtonCkeck(item,event){
  //   console.log(`${item} is bought`);
  //   // console.log(event);
  // }
  // function ButtonOnChange(event){
  //   // console.log("I am changed");
  //   textStateMethod(event.target.value);
  // }

  // return ( 
  //   <>
  //     <Heading></Heading>
  //     {/* <input type="text" onChange={(event)=>{console.log("I am changed"); console.log(event.target.value)}} placeholder='Enter your text here' /> */}
  //     <InputBox buttonOnChange={ButtonOnChange}></InputBox>
  //     <p>{textStateVal}</p>
  //     <ItemsAndButtons item={foodItems} buttonCheck={ButtonCkeck}></ItemsAndButtons>
  // </>
  // )


  //Here we are passing foodItems values using useState()
  // let foodItems = ['Dal','Roti','Salad','Vegetable','Milk','Apple'];

  // let textStateArr= useState("Enter your text here"); // useState returns an array of two elements ,first one is current value and second element is a function that allows you to update the state
  // // If we want to set any initial value then we can pass it in useState();
  // let textStateVal = textStateArr[0];
  // let textStateMethod = textStateArr[1];



  // Here we will use destructuring of this array as - 
  let  [textStateVal, textStateMethod] = useState(['Dal','Roti','Salad','Vegetable']);
  // console.log(`Current value of textStateVal is ${textStateVal}`);

  function ButtonCkeck(item,event){
    console.log(`${item} is bought`);
    // console.log(event);
  }

  function onKeyDown(event){
    if(event.key==="Enter"){
      let newFoodItem =  event.target.value;
      event.target.value='';
      let newItems = [...textStateVal,newFoodItem] // It is a spread operator. Here wa are saying that copy all the data of textStateVal array into
      // newItems and also add newFoodItem value into that array.
      //console.log(`Food value eneterd is ${newItems}`)
      textStateMethod(newItems); // When we do this then it will repaint the whole App components with this newItems values

    }
  }

  return ( 
    <>
      <Heading></Heading>
      {/* <input type="text" onChange={(event)=>{console.log("I am changed"); console.log(event.target.value)}} placeholder='Enter your text here' /> */}
      {/* <InputBox buttonOnChange={ButtonOnChange} addItem={AddItem}></InputBox> */}
      <InputBox  handleKeyDown={onKeyDown}></InputBox>
      <ItemsAndButtons item={textStateVal} buttonCheck={ButtonCkeck}></ItemsAndButtons>
  </>
  )
}

export default App