import './App.css'
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';


// inline css
const Title =()=> <h1 style={{color:'red',textAlign:'center'}}>Income-Spending</h1>
const Description =()=>{
  const design ={color:'brown',textAlign:'center'}
  return(
    <p style={design}>Detail of daily spending</p>
  );
}




function App() {
  const initData=[
    {id:1,title:'Hospital' ,amount:2000},
    {id:2,title:'Salary' ,amount:50000},
    {id:3,title:'Transportation' ,amount:30},
    {id:4,title:'Assurance' ,amount:3000}
  ]

  const [items,setItems]=useState(initData)
  const onAddNewItem=(newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <section className='container'>
      <Title/>
      <Description/>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items={items}/>
    </section>
  );
}

export default App;
