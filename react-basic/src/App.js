import './App.css'
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';


// inline css
const Title =()=> <h1 style={{color:'red',textAlign:'center'}}>Income-Spending</h1>
// const Description =()=>{
//   const design ={color:'brown',textAlign:'center'}
//   return(
//     <p style={design}>Detail of daily spending</p>
//   );
// }




function App() {
  const initData=[
    {id:1,title:'Hospital' ,amount:-2000},
    {id:2,title:'Salary' ,amount:50000},
    {id:3,title:'Transportation' ,amount:-30},
    {id:4,title:'Assurance' ,amount:-3000}
  ]
  const [items,setItems]=useState(initData)
  
  //calculate
  const[reportIncome,setReportIncome]=useState(0)
  const[reportExpense,setReportExpense]=useState(0)

  const onAddNewItem=(newItem)=>{
    setItems((prev2Item)=>{
      return [newItem,...prev2Item]
    })
  }

  useEffect(()=>{
    const amounts=items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)*-1
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <section className='container'>
        <Title/>
        <ReportComponent/>
        {/* <Description/> */}
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items={items}/>
    </section>
    </DataContext.Provider>
  );
}

export default App;
