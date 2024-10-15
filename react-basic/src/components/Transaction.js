import Item from "./Item";
import './Transaction.css';
// import DataContext from "../data/DataContext";
// import { useContext } from "react";


const Transaction=(props)=>{
    const{items}=props
    // const name =useContext(DataContext)
    return (
      <div>
        <ul className='Item-list'>
            {items.map(element=>{
                return <Item title={element.title} amount={element.amount} key={element.id} />
                // or 
                // return <Item {...element} />
            }
            )}
        </ul>
       
      </div>
    );
  }

  export default Transaction