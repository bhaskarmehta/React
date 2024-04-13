function Square({numSquare}){
    let sqr=[];
    let sqredNum;
    numSquare.map((item)=>{
       sqredNum = item*item;
       sqr.push(sqredNum);
    
    })
    return (<>
      <h1>Square: {sqr.join(" ")}</h1>
    </>);
}

export default Square;