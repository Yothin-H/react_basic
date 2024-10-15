import Item from "./Item";
import './Transaction.css';
const Transaction=()=>{
    return (
      <ul className='Item-list'>
        <Item title='Hospital' amount='2000'/>
        <Item title='Salary' amount='50000'/>
        <Item title='Transportation' amount='30'/>
        
      </ul>
    );
  }

  export default Transaction