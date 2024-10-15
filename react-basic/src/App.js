import './App.css'
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';

// inline css
const Title =()=> <h1 style={{color:'red',textAlign:'center'}}>Income-Spending</h1>
const Description =()=>{
  const design ={color:'brown',textAlign:'center'}
  return(
    <p style={design}>Detail of daily spending</p>
  );
}




function App() {
  return (
    <section className='container'>
      <Title/>
      <Description/>
      <FormComponent/>
      <Transaction/>
    </section>
  );
}

export default App;
