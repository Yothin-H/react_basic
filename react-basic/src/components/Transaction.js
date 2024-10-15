import Item from "./Item";
import './Transaction.css';
const Transaction=()=>{
    const data=[
        {id:1, title:'Hospital' ,amount:'2000'},
        {id:2,title:'Salary' ,amount:'50000'},
        {id:3,title:'Transportation' ,amount:'30'},
        {id:4,title:'Assurance' ,amount:'3000'}
    ]
    return (
      <ul className='Item-list'>
        {data.map(element=>{
            return <Item title={element.title} amount={element.amount} key={element.id} />
            // or 
            // return <Item {...element} />
        }
        )}
      </ul>
    );
  }

  export default Transaction