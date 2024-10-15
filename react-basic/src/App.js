import './App.css'
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';


// inline css
const Title =()=> <h1 style={{color:'red',textAlign:'center'}}>Income-Spending</h1>
const Description =()=>{
  const design ={color:'brown',textAlign:'center'}
  return(
    <p style={design}>Detail of daily spending</p>
  );
}




function App() {
  const initData=[]

  const [items,setItems]=useState(initData)
  const onAddNewItem=(newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <DataContext.Provider value={
      {
        income : 50000,
        expense : -8000
      }
    }>
      <section className='container'>
        <Title/>
        <ReportComponent/>
        <Description/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items={items}/>
    </section>
    </DataContext.Provider>
  );
}

export default App;
