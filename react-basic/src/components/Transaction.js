import Item from "./Item";
import './Transaction.css';
import DataContext from "../data/DataContext";


const Transaction=(props)=>{
    const{items}=props
    
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
        <DataContext.Consumer>
            {value=><p>{value}</p>}
        </DataContext.Consumer>
        
      </div>
    );
  }

  export default Transaction