import styles from './ItemsAndButtons.module.css';

function ItemsAndButtons({item,buttonCheck}){
    // console.log(item);
    return <>
       <ul className="list-group">
           {item.map((item) => ( 
            <li key = {item} className='list-group-item'>{item}
            {/* <span> <button className={styles.btnItem} onClick={(event)=>{console.log(`${item} bought`); */}
            <span> <button className={styles.btnItem} onClick={(event)=>buttonCheck(item,event)
            }>Buy</button></span>
            </li>
           ))}
      </ul>
    </>
}

export default ItemsAndButtons;