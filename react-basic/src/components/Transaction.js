import Item from "./Item";
import './Transaction.css';
const Transaction=()=>{
    const data=[
        {title:'Hospital' ,amount:'2000'},
        {title:'Salary' ,amount:'50000'},
        {title:'Transportation' ,amount:'30'}
    ]
    return (
      <ul className='Item-list'>
        <Item title={data[0].title} amount={data[0].amount}/>
        <Item title={data[1].title} amount={data[1].amount}/>
        <Item title={data[2].title} amount={data[2].amount}/>
        
      </ul>
    );
  }

  export default Transaction