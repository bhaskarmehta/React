function Sum(props){
    let sum = 0;
    props.nums.map((item)=>(sum+=item))
    return (<>
      <h1>Sum : {sum}</h1>
    </>);
}

export default Sum;