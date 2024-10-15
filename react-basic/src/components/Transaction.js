import Item from "./Item";
import './Transaction.css';
import { v4 as uuidv4 } from 'uuid';


const Transaction=()=>{
    const data=[
        {title:'Hospital' ,amount:2000},
        {title:'Salary' ,amount:50000},
        {title:'Transportation' ,amount:30},
        {title:'Assurance' ,amount:3000}
    ]
    return (
      <ul className='Item-list'>
        {data.map(element=>{
            return <Item title={element.title} amount={element.amount} key={uuidv4()} />
            // or 
            // return <Item {...element} />
        }
        )}
      </ul>
    );
  }

  export default Transaction